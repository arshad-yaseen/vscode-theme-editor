"use client";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { GITHUB_REPO_URL } from "@/constants/site";
import Logo from "../logo";

const Hero = () => {
  return (
    <section className="grid gap-8 max-w-3xl mx-auto text-center">
      <Logo className="size-24 mt-8" />
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
        Design your own code theme
      </h1>
      <p className="text-lg font-medium text-muted-foreground">
        A powerful editor for creating code themes. Design your ideal syntax
        highlighting for VS Code, Monaco Editor, CodeMirror, and more.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href={"/editor"}
          className={buttonVariants({
            size: "lg",
          })}
        >
          Create Theme
        </Link>
        <Link
          href={GITHUB_REPO_URL}
          target={"_blank"}
          className={buttonVariants({
            size: "lg",
            variant: "outline",
          })}
        >
          <GitHubLogoIcon className="mr-2 h-5 w-5" />
          Star on Github
        </Link>
      </div>
    </section>
  );
};

export default Hero;
