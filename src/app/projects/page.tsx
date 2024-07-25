"use client";
import { Vollkorn } from "next/font/google";
import { useState } from "react";
import cn from "classnames";
import style from "./projects.module.css";

const font = Vollkorn({ subsets: ["latin"], variable: "--font-vollkorn" });

export default function Questions() {
  const [on, setOn] = useState(false);
  const onToggle = () => {
    setOn((v) => !v);
  };
  return (
    <main className={cn(font.variable, "p-6")}>
      <h1 className="text-xl font-bold">Projects</h1>
      <article className={style.project}>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onToggle}
        >
          eCommerce
        </button>
        {on && (
          <div className={cn(style.popover, "shadow-md")}>
            <button
              onClick={onToggle}
              className="bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded mb-4"
            >
              Back
            </button>
            <h1 className="text-lg font-medium">Pearson</h1>
            <ul>
              <li>eCommerce amazon buy-now checkout experience</li>
              <li>React/Typescript/NextJS with micro-frontend design</li>
              <li>Use server side component to enhance page performance</li>
              <li>
                Token/theme system for dynamic style adjustments at runtime
              </li>
            </ul>
          </div>
        )}
      </article>
      <article>next project</article>
    </main>
  );
}
