import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "./../data/index";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            imgClassName,
            titleClassName,
            img,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              img={img}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
