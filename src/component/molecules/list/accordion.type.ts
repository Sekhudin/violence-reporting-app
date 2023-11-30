import React from "react"

export namespace Props {
  type Accordion = {
    trigger: React.ReactNode;
    content: React.ReactNode;
    triggerClassName?: string;
    contentClassName?:string;
  }

  export type ListAccordion = {
    accordionList: Accordion[];
    type?: "single" | "multiple";
    className?:string;
    itemClassName?:string;
    triggerClassName?:string;
    contentClassName?:string;
  }
}