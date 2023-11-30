import React from "react";

export namespace Props {
  export type TabContentDashboard = {
    values: string[];
    childrens: React.ReactNode[];
    className?:string;
  }
}