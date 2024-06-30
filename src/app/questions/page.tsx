import { Vollkorn } from "next/font/google";
import Question1 from "./question1";

const font = Vollkorn({ subsets: ["latin"], variable: "--font-vollkorn" });

export default function Questions() {
  return (
    <main className={font.variable}>
      <div className='m-32 lg:max-w-6xl lg:w-full'>
        <Question1 />
      </div>
    </main>
  );
}
