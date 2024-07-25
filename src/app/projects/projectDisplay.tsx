"use client";
import { useState } from "react";
import cn from "classnames";
import style from "./projects.module.css";
import type { Project } from "@/types";

interface ProjectDisplayProps {
  project: Project;
}

export default function ProjectDisplay({ project }: ProjectDisplayProps) {
  const { title, type } = project;
  const [on, setOn] = useState<boolean>(false);
  const onToggle = () => {
    setOn((v) => !v);
  };

  return (
    <article className={style.project}>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onToggle}
      >
        {type}
      </button>
      {on && (
        <div className={cn(style.popover, "shadow-md")}>
          <button
            onClick={onToggle}
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded mb-4"
          >
            Back
          </button>
          <h1 className="text-lg font-medium">
            {title} - {type}
          </h1>
          <ul>
            <li>eCommerce amazon buy-now checkout experience</li>
            <li>React/Typescript/NextJS with micro-frontend design</li>
            <li>Use server side component to enhance page performance</li>
            <li>Token/theme system for dynamic style adjustments at runtime</li>
          </ul>
        </div>
      )}
    </article>
  );
}
