"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaSeedling } from "react-icons/fa";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Javascript"];
  const rightLists = ["MongoDB", "NodeJS", "Tailwind CSS"];

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-gray-700 group/bento hover:shadow-xl transition duration-200 shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        backgroundColor: "#1A1E33",
        backgroundImage: "linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(167, 139, 250, 0.1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-40"}`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt="Spare Image"
              width={id === 4 ? 250 : 500}
              height={id === 4 ? 250 : 500}
              // width={500}
              // height={500}
              className={`object-cover object-center w-full h-full mt-10`}
            />
          )}

        </div>

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* <div className="font-mono font-light md:max-w-32 md:text-xs lg:max-w-40 lg:text-sm text-secondary z-10"> */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:max-w-40 lg:text-sm text-sm text-secondary z-10">

            {description}
          </div>
          <div
            // className="font-mono text-lg lg:text-3xl max-w-96 font-bold text-primary z-10"
            className={`${id === 1 && "mb-5"} font-mono text-lg lg:text-3xl max-w-96 font-bold text-primary z-10`}
          >
            {title}
          </div>

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 md:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 md:py-4 md:px-3 text-xs md:text-base rounded-lg text-center bg-accent-blue/20 text-accent-blue hover:bg-accent-blue/40 transition tech-stack-item"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-2 px-3 md:py-4 md:px-3 rounded-lg text-center bg-transparent"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-8">
                <span className="py-2 px-3 md:py-4 md:px-3 rounded-lg text-center bg-transparent"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 md:py-4 md:px-3 text-xs md:text-base rounded-lg text-center bg-accent-purple/20 text-accent-purple hover:bg-accent-purple/40 transition tech-stack-item"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div >
  );
};