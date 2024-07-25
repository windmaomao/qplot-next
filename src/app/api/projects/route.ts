import { NextRequest, NextResponse } from "next/server";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    type: "eCommerce",
    title: "Pearson",
    description: "xxx",
    date: "",
    technologies: "React, Typescript, NextJs",
  },
  {
    type: "Medical Device",
    title: "physIQ",
    description: "xxx",
    date: "",
    technologies: "React, Typescript, NextJs",
  },
];

export async function GET(request: NextRequest) {
  return NextResponse.json(projects);
}
