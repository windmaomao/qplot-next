import { NextRequest, NextResponse } from "next/server";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    title: "Person eCommerce",
    description: "xxx",
    date: "",
  },
];

export async function GET(request: NextRequest) {
  return NextResponse.json({
    projects,
  });
}
