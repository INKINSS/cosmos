"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import type { ChartConfig } from "@/components/ui/chart"
import { ChartContainer } from "@/components/ui/chart"

const chartData = [
  { month: "Jun", desktop: 54, mobile: 55 },
  { month: "Jul", desktop: 78, mobile: 67 },
  { month: "Ago", desktop: 134, mobile: 120 },
  { month: "Sep", desktop: 189, mobile: 160 },
  { month: "Oct", desktop: 205, mobile: 179 },
  { month: "Nov", desktop: 214, mobile: 201 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "rgb(38,133,59)",
  },
  mobile: {
    label: "Mobile",
    color: "rgb(138,138,138)",
  },
} satisfies ChartConfig

export function Charts() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[150px] max-h-[200px] ssm:w-[90%] md:w-[80%] mx-auto">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
