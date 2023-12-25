import { BarList, Bold, Card, Flex, Text, Title } from "@tremor/react";

const data = [
  {
    name: "MileStone 1",
    value: 90,
    href: "https://twitter.com/tremorlabs",
    icon: function TwitterIcon() {
      return (
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

      );
    },
  },
  {
    name: "MileStone 2",
    value: 80,
    href: "https://google.com",
    icon: function GoogleIcon() {
      return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

      );
    },
  },
  {
    name: "MileStone 3",
    value: 70,
    href: "https://github.com/tremorlabs/tremor",
    icon: function GitHubIcon() {
      return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

      );
    },
  },
  {
    name: "MileStone 4",
    value: 50,
    href: "https://reddit.com",
    icon: function RedditIcon() {
      return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

      );
    },
  },
  {
    name: "MileStone 5",
    value: 20,
    href: "https://www.youtube.com/@tremorlabs3079",
    icon: function YouTubeIcon() {
      return (
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

      );
    },
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