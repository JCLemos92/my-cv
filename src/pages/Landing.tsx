import React from "react";
import type { HeroProps } from "../models/CvModels";
import { Hero } from "../components/Hero";

export const Landing = () => {
    const heroText: HeroProps = {
      name: 'João Lemos',
      description: 'Software Engineer',
      linkedinUrl: "asd",
      email: "asd",
      githubUrl: "asd"
    }
    
    return (
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Hero name={heroText.name} description={heroText.description} linkedinUrl={heroText.linkedinUrl} email={heroText.email} githubUrl={heroText.githubUrl}/>
        <div className="text-[28px] font-bold leading-tight">App works!</div>
      </div>
    )
}