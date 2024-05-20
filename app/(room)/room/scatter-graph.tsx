import React, { useState } from "react";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { BarList, Bold, Card, Flex, Text, Title } from "@tremor/react";
import { Input } from "@/components/ui/input";

const ScatterGraph = () => {
  const [milestones, setMilestones] = useState([
    { name: "MileStone 1", value: 0 },
    { name: "MileStone 2", value: 0 },
    {
      name: "MileStone 3",
      value: 0,
    },
    { name: "MileStone 4", value: 0 },
    { name: "MileStone 5", value: 0 },
  ]);

  const [foundation, setFoundation] = useState("");
  const [framing, setFraming] = useState("");
  const [electrical, setElectrical] = useState("");
  const [drywall, setDrywall] = useState("");

  const handleSaveChanges = () => {
    const updatedMilestones = [
      {
        name: "MileStone 1",
        value: parseInt(foundation),
      },
      {
        name: "MileStone 2",
        value: parseInt(framing),
      },
      {
        name: "MileStone 3",
        value: parseInt(electrical),
      },
      { name: "MileStone 4", value: parseInt(drywall) },
      { name: "MileStone 5", value: 0 },
    ];
    setMilestones(updatedMilestones);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Update Milestones</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] md:max-w-[500px] lg:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Update Milestones</DialogTitle>
            <DialogDescription>
              Make changes to your construction milestones here.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="foundation">
                Found
              </Label>
              <Input
                className="col-span-3"
                value={foundation}
                onChange={(e) => setFoundation(e.target.value)}
                id="foundation"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="framing">
                Framing
              </Label>
              <Input
                className="col-span-3"
                value={framing}
                onChange={(e) => setFraming(e.target.value)}
                id="framing"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="electrical">
                Electrical
              </Label>
              <Input
                className="col-span-3"
                value={electrical}
                onChange={(e) => setElectrical(e.target.value)}
                id="electrical"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="drywall">
                Drywall
              </Label>
              <Input
                className="col-span-3"
                value={drywall}
                onChange={(e) => setDrywall(e.target.value)}
                id="drywall"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Card className="max-w-lg rounded-xl">
        <Title>MileStone Analytics</Title>
        <Flex className="mt-4">
          <Text>
            <Bold>Source</Bold>
          </Text>
          <Text>
            <Bold>Percentage</Bold>
          </Text>
        </Flex>
        <BarList data={milestones} className="mt-2" />
      </Card>
    </>
  );
};

export default ScatterGraph;
