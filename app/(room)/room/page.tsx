"use client"
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { InformationCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card as ChatCard } from "@/components/ui/card"
import {
  AreaChart,
  BadgeDelta,
  Card,
  Color,
  DeltaType,
  Flex,
  Grid,
  Icon,
  Metric,
  MultiSelect,
  MultiSelectItem,
  ProgressBar,
  Select,
  SelectItem,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";

type Kpi = {
  title: string;
  metric: string;
  progress: number;
  target: string;
  delta: string;
  deltaType: DeltaType;
};

const kpiData: Kpi[] = [
  {
    title: "Sales",
    metric: "$ 12,699",
    progress: 15.9,
    target: "$ 80,000",
    delta: "13.2%",
    deltaType: "moderateIncrease",
  },
]

import { useState } from "react";
import WebcamCapture from "./webcam";
import Bar from "./scatter-graph";
import { Input } from "@/components/ui/input";
import Image from "next/image";


const usNumberformatter = (number: number, decimals = 0) =>
  Intl.NumberFormat("us", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
    .format(Number(number))
    .toString();

const formatters: { [key: string]: any } = {
  Sales: (number: number) => `$ ${usNumberformatter(number)}`,
  Profit: (number: number) => `$ ${usNumberformatter(number)}`,
  Customers: (number: number) => `${usNumberformatter(number)}`,
  Delta: (number: number) => `${usNumberformatter(number, 2)}%`,
};

const Kpis = {
  Sales: "Sales",
  Profit: "Profit",
  Customers: "Customers",
};

const kpiList = [Kpis.Sales, Kpis.Profit, Kpis.Customers];

export type DailyPerformance = {
  date: string;
  Sales: number;
  Profit: number;
  Customers: number;
};

export const performance: DailyPerformance[] = [
  {
    date: "2023-05-01",
    Sales: 900.73,
    Profit: 173,
    Customers: 73,
  },
  {
    date: "2023-05-02",
    Sales: 1000.74,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2023-05-03",
    Sales: 1100.93,
    Profit: 293.1,
    Customers: 293,
  },
  {
    date: "2023-05-04",
    Sales: 1200.9,
    Profit: 290.2,
    Customers: 29,
  },
];
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};


export type SalesPerson = {
  name: string;
  leads: number;
  sales: string;
  quota: string;
  variance: string;
  region: string;
  status: string;
};

export const salesPeople: SalesPerson[] = [
  {
    name: "Peter Doe",
    leads: 45,
    sales: "1,000,000",
    quota: "1,200,000",
    variance: "low",
    region: "Region A",
    status: "overperforming",
  },
  {
    name: "Lena Whitehouse",
    leads: 35,
    sales: "900,000",
    quota: "1,000,000",
    variance: "low",
    region: "Region B",
    status: "average",
  },
  {
    name: "Phil Less",
    leads: 52,
    sales: "930,000",
    quota: "1,000,000",
    variance: "medium",
    region: "Region C",
    status: "underperforming",
  },
  {
    name: "John Camper",
    leads: 22,
    sales: "390,000",
    quota: "250,000",
    variance: "low",
    region: "Region A",
    status: "overperforming",
  },
  {
    name: "Max Balmoore",
    leads: 49,
    sales: "860,000",
    quota: "750,000",
    variance: "low",
    region: "Region B",
    status: "overperforming",
  },
];

const deltaTypes: { [key: string]: DeltaType } = {
  average: "unchanged",
  overperforming: "moderateIncrease",
  underperforming: "moderateDecrease",
};

export default function FinalDashboard() {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedKpi = kpiList[selectedIndex];
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  const isSalesPersonSelected = (salesPerson: SalesPerson) =>
    (salesPerson.status === selectedStatus || selectedStatus === "all") &&
    (selectedNames.includes(salesPerson.name) || selectedNames.length === 0);

  const areaChartArgs = {
    className: "mt-5 h-72",
    data: performance,
    index: "date",
    categories: [selectedKpi],
    colors: ["blue"] as Color[],
    showLegend: false,
    valueFormatter: formatters[selectedKpi],
    yAxisWidth: 60,
  };
  const [search, setSearch] = useState("");
  return (
    <div className="w-full flex justify-start items-start gap-4 max-sm:flex-col">
   
    <main className="w-full border-r pr-2 max-sm:w-[380px]">
      <Title>Progress Room</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <TabGroup className="mt-6">
          <div className="flex gap-4">

          <Tab>Overview</Tab>
          <Tab>Detail</Tab>
          </div>
   
        <TabPanels>
          <TabPanel>
         <Bar/>
            <div className="mt-6 ">
              <Card className="rounded-xl ">
                <>
                  <div className="md:flex justify-between">
                    <div>
                      <Flex className="space-x-0.5" justifyContent="start" alignItems="center">
                        <Title> Performance History </Title>
                        <Icon
                          icon={InformationCircleIcon}
                          variant="simple"
                          tooltip="Shows daily increase or decrease of particular domain"
                        />
                      </Flex>
                      <Text> Daily change per domain </Text>
                    </div>
                    <div>
                      <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
                        <TabList color="gray" variant="solid" className="flex flex-col">
                          <Tab>Sales</Tab>
                          <Tab>Profit</Tab>
                          <Tab>Customers</Tab>
                        </TabList>
                      </TabGroup>
                    </div>
                  </div>
                  {/* web */}
                  <div className="mt-8 hidden sm:block">
                    <AreaChart {...areaChartArgs} />
                  </div>
                  {/* mobile */}
                  <div className="mt-8 sm:hidden ">
                    <AreaChart
                      {...areaChartArgs}
                      startEndOnly={true}
                      showGradient={false}
                      showYAxis={false}
                    />
                  </div>
                </>
              </Card>
            </div>
          </TabPanel>
   
          <Dialog>
        <DialogTrigger asChild>
          <Button>Update Milestones</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] md:max-w-[500px] lg:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Update Milestones</DialogTitle>
            <DialogDescription>Make changes to your construction milestones here.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="foundation">
                Found
              </Label>
              <Input className="col-span-3" defaultValue="80" id="foundation" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="framing">
                Framing
              </Label>
              <Input className="col-span-3" defaultValue="60" id="framing" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="electrical">
                Electrical
              </Label>
              <Input className="col-span-3" defaultValue="40" id="electrical" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="drywall">
                Drywall
              </Label>
              <Input className="col-span-3" defaultValue="30" id="drywall" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
          <TabPanel>
            <div className="mt-6 w-full">
              <Card>
                <>
                  <div>
                    <Flex className="space-x-0.5" justifyContent="start" alignItems="center">
                      <Title> Performance History </Title>
                      <Icon
                        icon={InformationCircleIcon}
                        variant="simple"
                        tooltip="Shows sales performance per employee"
                      />
                    </Flex>
                  </div>
                  <div className="flex space-x-2">
                    <MultiSelect
                      className="max-w-full sm:max-w-xs"
                      onValueChange={setSelectedNames}
                      placeholder="Select Salespeople..."
                    >
                      {salesPeople.map((item) => (
                        <MultiSelectItem key={item.name} value={item.name}>
                          {item.name}
                        </MultiSelectItem>
                      ))}
                    </MultiSelect>
                    <Select
                      className="max-w-full sm:max-w-xs"
                      defaultValue="all"
                      onValueChange={setSelectedStatus}
                    >
                      <SelectItem value="all">All Performances</SelectItem>
                      <SelectItem value="overperforming">Overperforming</SelectItem>
                      <SelectItem value="average">Average</SelectItem>
                      <SelectItem value="underperforming">Underperforming</SelectItem>
                    </Select>
                  </div>
                  <Table className="mt-6">
                    <TableHead>
                      <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell className="text-right">Leads</TableHeaderCell>
                        <TableHeaderCell className="text-right">Sales ($)</TableHeaderCell>
                        <TableHeaderCell className="text-right">Quota ($)</TableHeaderCell>
                        <TableHeaderCell className="text-right">Variance</TableHeaderCell>
                        <TableHeaderCell className="text-right">Region</TableHeaderCell>
                        <TableHeaderCell className="text-right">Status</TableHeaderCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {salesPeople
                        .filter((item) => isSalesPersonSelected(item))
                        .map((item) => (
                          <TableRow key={item.name}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell className="text-right">{item.leads}</TableCell>
                            <TableCell className="text-right">{item.sales}</TableCell>
                            <TableCell className="text-right">{item.quota}</TableCell>
                            <TableCell className="text-right">{item.variance}</TableCell>
                            <TableCell className="text-right">{item.region}</TableCell>
                            <TableCell className="text-right">
                              <BadgeDelta deltaType={deltaTypes[item.status]} size="xs">
                                {item.status}
                              </BadgeDelta>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </>
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
    <div className="w-full  sticky top-20 flex flex-col gap-4">

{/* <WebcamCapture/> */}
      
<Card className="h-full w-full max-w-2xl">
                <CardHeader>
                  <CardTitle>Construction Chat</CardTitle>
                  <CardDescription>
                    Discuss the progress of your room construction project with your team.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 overflow-auto">
                  <div className="grid gap-4">
                    <div className="flex items-start gap-4">
                      <img
                        alt="Avatar"
                        className="rounded-full"
                        height={40}
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width={40}
                      />
                      <div className="flex-1 space-y-2">
                        <div className="rounded-lg bg-muted/50 p-4">
                          <p>
                            Hey team, just wanted to give an update on the room construction. The foundation is 80%
                            complete and we're moving on to the framing.
                          </p>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          <time dateTime="2023-06-23">June 23, 2023</time>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <img
                        alt="Avatar"
                        className="rounded-full"
                        height={40}
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width={40}
                      />
                      <div className="flex-1 space-y-2">
                        <div className="rounded-lg bg-muted/50 p-4">
                          <p>
                            Great to hear! Let's make sure we stay on top of the electrical work. I'll schedule a
                            meeting to discuss the next steps.
                          </p>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          <time dateTime="2023-06-24">June 24, 2023</time>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <img
                        alt="Avatar"
                        className="rounded-full"
                        height={40}
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width={40}
                      />
                      <div className="flex-1 space-y-2">
                        <div className="rounded-lg bg-muted/50 p-4">
                          <p>
                            Sounds good. I'll make sure the electrician is on-site and ready to go. Let's keep this
                            momentum going!
                          </p>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          <time dateTime="2023-06-25">June 25, 2023</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Input className="flex-1" placeholder="Type your message..." type="text" />
                  <Button className="ml-4" type="submit">
                    Send
                  </Button>
                </CardFooter>
              </Card>
</div>
    </div>
  );
}  