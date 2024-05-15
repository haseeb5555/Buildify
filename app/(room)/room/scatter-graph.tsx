import { BarList, Bold, Card, Flex, Text, Title } from "@tremor/react";

const data = [
  {
    name: "MileStone 1",
    value: 90,
    href: "https://twitter.com/tremorlabs",
  },

  {
    name: "MileStone 2",
    value: 80,
    href: "https://google.com",

  },
  {
    name: "MileStone 3",
    value: 70,
    href: "https://github.com/tremorlabs/tremor",
   
  },
  {
    name: "MileStone 4",
    value: 50,


      
  
  },
  {
    name: "MileStone 5",
    value: 40,

  
    
  },


];

import React from 'react'

const Bar = () => {
  return (
       
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
  )
}

export default Bar