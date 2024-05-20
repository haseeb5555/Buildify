import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

interface Props {
  id: string;
  title: string;
  description: string;
  budget: string;
  TotalAmount: string;
  milestones: {
    title: string;
    description: string;
    amount: string;
    due: string;
  }[];
}
export default function WindowCard({
  title,
  description,
  budget,
  TotalAmount,
  milestones,
  id,
}: Props) {
  return (
    <CardContainer className="inter-var w-[416px]">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 h-[70px] overflow-hidden  text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <CardItem
                as="p"
                translateZ="100"
                className="text-xs text-neutral-500 font-bold dark:text-neutral-300"
              >
                Budget
              </CardItem>
              <CardItem as="p" translateZ="100" className="  dark:text-white">
                {budget}
              </CardItem>
            </div>
            <div className="flex flex-col">
              <CardItem
                as="p"
                translateZ="100"
                className=" text-neutral-500 font-bold dark:text-neutral-300"
              >
                Total Amount
              </CardItem>
              <CardItem as="p" translateZ="100" className=" dark:text-white">
                {TotalAmount}
              </CardItem>
            </div>
            <div className="flex flex-col">
              <CardItem
                as="p"
                translateZ="100"
                className=" text-neutral-500 font-bold dark:text-neutral-300"
              >
                Milstones
              </CardItem>
              <CardItem as="p" translateZ="100" className=" dark:text-white">
                {milestones.length}
              </CardItem>
            </div>
          </div>
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <Link href={`/room/${id}`}>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold
            "
            >
              Join Chat
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}
