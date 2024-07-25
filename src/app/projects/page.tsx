import { Vollkorn } from "next/font/google";
import styles from "./projects.module.css";
import cn from "classnames";

const font = Vollkorn({ subsets: ["latin"], variable: "--font-vollkorn" });

export default function Questions() {
  return (
    <main className={cn(font.variable, "p-6")}>
      <h1 className='text-xl font-bold'>Projects</h1>
      <article>
        <h1 className='text-lg font-medium'>Pearson</h1>
        <ul>
          <li>eCommerce amazon buy-now checkout experience</li>
          <li>React/Typescript/NextJS with micro-frontend design</li>
          <li>Use server side component to enhance page performance</li>
          <li>Token/theme system for dynamic style adjustments at runtime</li>
        </ul>
      </article>
    </main>
  );
}
