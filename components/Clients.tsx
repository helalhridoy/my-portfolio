import React from "react";
import { InfiniteMovingCards } from "./ui/Infinite-moving-cards";
import { testimonials } from "@/data";

const Clients = () => {
  return (
    <>
      <div className="py-20" id="projects">
        <h1 className="heading">
          Kind words from{" "}
          <span className="text-purple"> satisfied clients.</span>
        </h1>
        <div className="flex flex-col items-center max-lg:mt-10">
          <div className="h-[50vh] md:h-[30rem] rounded-md flex-col antialiased items-center relative overflow-hidden ">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Clients;
