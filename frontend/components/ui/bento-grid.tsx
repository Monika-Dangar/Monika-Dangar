"use client";
import { cn } from "@/lib/utils";
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
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 md:max-w-xl lg:max-w-5xl  mx-auto",

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
  const rightLists = ["MongoDB", "NodeJS", "GraphQL"];

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        // background: "rgb(4,7,29)",
        // backgroundColor:
        //   "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        backgroundImage: " linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-40"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:max-w-40 lg:text-sm text-sm text-neutral-700 z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 md:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap- md:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="md:py-4 md:px-3 py-2 px-3 text-xs md:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-gray-300"
                  >
                    {item}
                  </span>
                ))}
                <span className="md:py-4 md:px-3 py-4 px-3  rounded-lg text-center bg-gray-400"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap- md:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-gray-400"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="md:py-4 md:px-3 py-2 px-3 text-xs md:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
