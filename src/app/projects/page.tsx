import { Vollkorn } from "next/font/google";
import cn from "classnames";
import ProjectList from "./projectList";

const font = Vollkorn({ subsets: ["latin"], variable: "--font-vollkorn" });

export default function Questions() {
  return (
    <main className={cn(font.variable, "p-6")}>
      <ProjectList />
    </main>
  );
}
