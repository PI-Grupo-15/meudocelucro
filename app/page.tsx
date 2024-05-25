"use client"
import * as React from "react";
// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import Principal_page from "./principal_page/page";

export default function Home() {
  
  return (
    
    <NextUIProvider>
      <>      
       
          <Principal_page/>     
       
      </>    
  </NextUIProvider>
    
  );
}
