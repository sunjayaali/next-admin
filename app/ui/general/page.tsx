"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckIcon, InfoIcon, TriangleAlertIcon } from "lucide-react";
import * as React from "react";

export default function Page() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Alerts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="bg-red-100 border-red-200 text-red-800">
            <TriangleAlertIcon />
            <AlertTitle>Alert!</AlertTitle>
            <AlertDescription className="text-inherit">
              Danger alert preview. This alert is dismissable. A wonderful
              serenity has taken possession of my entire soul, like these sweet
              mornings of spring which I enjoy with my whole heart.
            </AlertDescription>
          </Alert>

          <Alert className="bg-blue-100 text-blue-800 border border-blue-200">
            <InfoIcon />
            <AlertTitle>Alert</AlertTitle>
            <AlertDescription className="text-inherit">
              Info alert preview.
            </AlertDescription>
          </Alert>

          <Alert className="bg-yellow-100 text-yellow-800 border border-yellow-200">
            <TriangleAlertIcon />
            <AlertTitle>Alert</AlertTitle>
            <AlertDescription className="text-inherit">
              Warning alert preview.
            </AlertDescription>
          </Alert>

          <Alert className="bg-green-100 text-green-800 border border-green-200">
            <CheckIcon />
            <AlertTitle>Alert</AlertTitle>
            <AlertDescription className="text-inherit">
              Success alert preview.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress value={40} className=" [&>div]:bg-blue-500" />
          <Progress value={20} className=" [&>div]:bg-green-500" />
          <Progress value={60} className=" [&>div]:bg-yellow-500" />
          <Progress value={60} className="h-1 [&>div]:bg-blue-500" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accordion</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible defaultValue="shipping">
            <AccordionItem value="shipping">
              <AccordionTrigger>Item 1</AccordionTrigger>
              <AccordionContent>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven&apos;t heard of them accusamus labore sustainable VHS.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>
                Returns accepted within 30 days. Items must be unused and in
                original packaging. Refunds processed within 5-7 business days.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="support">
              <AccordionTrigger>
                How can I contact customer support?
              </AccordionTrigger>
              <AccordionContent>
                Reach us via email, live chat, or phone. We respond within 24
                hours during business days.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card className="">
        <CardHeader>
          <CardTitle>Typography</CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="text-4xl">h1. Heading</h1>
          <h2 className="text-3xl">h2. Heading</h2>
          <h3 className="text-2xl">h3. Heading</h3>
          <h4 className="text-xl">h4. Heading</h4>

          <blockquote className="mt-6 border-l-4 border-l-green-500 pl-6 italic">
            &quot;After all,&quot; he said, &quot;everyone enjoys a good joke,
            so it&apos;s only fair that they should pay for the privilege.&quot;
          </blockquote>
        </CardContent>
      </Card>
    </div>
  );
}
