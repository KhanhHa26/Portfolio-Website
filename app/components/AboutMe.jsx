"use client";
import { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>React</li>
        <li>TypeScript</li>
        <li>HTML/CSS/JavaScript</li>
        <li>C/C++</li>
        <li>Java</li>
        <li>Python</li>
        <li>Node.js</li>
        <li>Next.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Computer Science & Mathematics</li>
        <li>Bryn Mawr College, Bryn Mawr, PA - May 2027</li>
      </ul>
    ),
  },
];

const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image src="/about-me.png" alt="About me" width={400} height={400} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-pink-200 mb-4">About me</h2>
          <p className="text-white text-base mb-6 sm:text-lg lg:text-xl">
            I am passionate about technology and how it can innovate human
            experience and daily life. I love baking👩🏻‍🍳, drawing✏️, gymming🏋️‍♀️,
            and watching figure skating⛸️.
          </p>
          <div className="flex flex-row mt-8 justify-start">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
