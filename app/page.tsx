"use client"
import * as React from "react";
// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

export default function Home() {
  return (
    
    <NextUIProvider>
      <>      
        <div className="w-full h-screen bg-blue-50">
          <div className=" font-bold text-center p-2">
            <h1>Medidas Culinárias</h1>
          </div>
        <div className="flex w-full flex-col p-6">
      <Tabs aria-label="Options">
        <Tab key="farinha de trigo" title="Farinha de Trigo">
          <Card>
            <CardBody>
              <div className="text-center">
              1 Xícara .......................120g<br/><br/>
              1/2 Xícara.......................60g<br/><br/>
              1/3 Xícara.......................40g<br/><br/>
              1/4 Xícara.......................30g<br/><br/>
              1 Colher de sopa............7,5g
              </div>             
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="manteiga" title="Manteiga">
          <Card>
            <CardBody>
            <div className="text-center">
              1 Xícara .......................200g<br/><br/>
              1/2 Xícara.......................100g<br/><br/>
              1/3 Xícara.......................65g<br/><br/>
              1/4 Xícara.......................50g<br/><br/>
              1 Colher de sopa............15g
              </div>  
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="açucar" title="Açucar">
          <Card>
            <CardBody>
            <div className="text-center">
              1 Xícara .......................180g<br/><br/>
              1/2 Xícara.......................90g<br/><br/>
              1/3 Xícara.......................60g<br/><br/>
              1/4 Xícara.......................45g<br/><br/>
              1 Colher de sopa............12g
              </div>  
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="líquidos" title="Líquidos">
          <Card>
            <CardBody>
            <div className="text-center">
              1 Xícara .......................240ml<br/><br/>
              1/2 Xícara.......................120ml<br/><br/>
              1/3 Xícara.......................80ml<br/><br/>
              1/4 Xícara.......................60ml<br/><br/>
              1 Colher de sopa............60ml
            </div>  
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
                   
        </div>
    </>    
  </NextUIProvider>
    
  );
}
