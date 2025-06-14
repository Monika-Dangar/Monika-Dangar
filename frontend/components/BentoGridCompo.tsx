import { gridItems } from "@/data/index";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const BentoGridCompo = () => {
  return (
    <section id="about" className="bg-secondary py-20 font-mono">
      <BentoGrid className="w-full max-w-7xl mx-auto">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default BentoGridCompo;