"use client";

import { useState, useEffect } from "react";
import type { Project } from "@/types";
import ProjectDisplay from "./projectDisplay";

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((res) => setProjects(res as Project[]));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-6">Projects</h1>
      <div className="flex gap-2">
        {projects.map((project) => (
          <ProjectDisplay key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
