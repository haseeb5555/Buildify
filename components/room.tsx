"use client";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Card,
  DeltaType,
  TabGroup,
  TabPanel,
  TabPanels,
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
];

import Bar from "@/app/(room)/room/scatter-graph";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { fetchRoomById } from "@/actions/profile.action";
import { AreaChartUsageExampleAxisLabel } from "@/app/(room)/room/line-chart";

interface Props {
  title: string;
  description: string;
  id: string;
}

export default function Room({ title, description, id }: Props) {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-4 max-sm:flex-col">
      <main className="w-full border-r pr-2 max-sm:w-[380px]">
        <Title>{title}</Title>
        <Text>{description}</Text>
        <Bar />
        <AreaChartUsageExampleAxisLabel />
      </main>
      <div className="w-full  sticky top-20 flex flex-col gap-4">
        {/* <WebcamCapture/> */}

        <Card className="h-full w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Construction Chat</CardTitle>
            <CardDescription>
              Discuss the progress of your room construction project with your
              team.
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
                      Hey team, just wanted to give an update on the room
                      construction. The foundation is 80% complete and we're
                      moving on to the framing.
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
                      Great to hear! Let's make sure we stay on top of the
                      electrical work. I'll schedule a meeting to discuss the
                      next steps.
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
                      Sounds good. I'll make sure the electrician is on-site and
                      ready to go. Let's keep this momentum going!
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
            <Input
              className="flex-1"
              placeholder="Type your message..."
              type="text"
            />
            <Button className="ml-4" type="submit">
              Send
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
