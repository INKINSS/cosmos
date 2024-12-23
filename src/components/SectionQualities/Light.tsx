import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import { FaCircleInfo } from "react-icons/fa6";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

import type { ChartConfig } from "@/components/ui/chart";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [{ month: "actualizaciones", desktop: 129360 }];

const chartConfig = {
  desktop: {
    label: "cosmos",
    color: "rgb(38,133,59)",
  },
  mobile: {
    label: "other",
    color: "rgb(138,138,138)",
  },
} satisfies ChartConfig;

export const Light = () => {
  const totalVisitors = chartData[0].desktop;

  return (
    <Card className="flex flex-col md:min-w-[40%] h-[21rem] ssm:w-full border-none shadow-none">
      <CardContent className="flex flex-1 items-center pb-0 mt-7 ssm:max-h-[15rem]">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground text-[1.1rem]"
                        >
                          virus detectados y eliminados hoy
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-desktop)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="mobile"
              fill="var(--color-mobile)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex flex-row items-center justify-center gap-2">
        <FaCircleInfo color="rgb(38,133,59)" />
        <span className="ssm:text-[1.2rem] text-customGrayLight text-muted-foreground">
          Actualizado hace 15 minutos
        </span>
      </CardFooter>
    </Card>
  );
};
