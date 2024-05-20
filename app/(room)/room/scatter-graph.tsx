
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { fetchRoomById } from "@/actions/profile.action";
import { BarList, Bold, Card, Flex, Text, Title } from "@tremor/react";

const data = [
  {
    name: "MileStone 1",
    value: 0,
    href: "https://twitter.com/tremorlabs",
  },

  {
    name: "MileStone 2",
    value: 0,
    href: "https://google.com",

  },
  {
    name: "MileStone 3",
    value: 0,
    href: "https://github.com/tremorlabs/tremor",
   
  },
  {
    name: "MileStone 4",
    value: 0,


      
  
  },
  {
    name: "MileStone 5",
    value: 0,

  
    
  },


];

import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input";
interface Props{}
const Bar = () => {



  return (
   <>
   
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
  <BarList data={data} className="mt-2" />
</Card>
</>
  )
}

export default Bar