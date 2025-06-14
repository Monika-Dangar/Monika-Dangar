import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  return (
    <div className={cn("relative", className)}>
      <FloatingDockMenu items={items} />
    </div>
  );
};

const FloatingDockMenu = ({
  items,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
}) => {
  let mouseX = useMotionValue(Infinity);
  let touchX = useMotionValue(Infinity);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(e.pageX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    touchX.set(touch.clientX);
  };

  return (
    <>
      {/* Mobile Navigation Menu */}
      <motion.div
        className="z-50 md:hidden flex flex-row gap-4 rounded-full bg-secondary shadow-[0_4px_12px_rgb(0_0_0/0.2)]"
        onTouchMove={handleTouchMove}
      >
        {items.map((item, idx) => (
          <IconContainer
            key={item.title}
            mouseX={touchX}
            title={item.title}
            icon={item.icon}
            href={item.href}
            isMobile={true}
          />
        ))}
      </motion.div>

      {/* Desktop Navigation Menu */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="z-50 hidden md:flex flex-row gap-4 items-center rounded-full bg-secondary shadow-[0_4px_12px_rgb(0_0_0/0.2)]"
      >
        {items.map((item) => (
          <IconContainer
            key={item.title}
            mouseX={mouseX}
            title={item.title}
            icon={item.icon}
            href={item.href}
          />
        ))}
      </motion.div>
    </>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  isMobile = false,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  isMobile?: boolean;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} target="_blank">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => !isMobile && setHovered(true)}
        onMouseLeave={() => !isMobile && setHovered(false)}
        className="aspect-square rounded-full bg-secondary border border-gray-700 hover:bg-accent-blue/20 transition-colors duration-200 flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && !isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-secondary border border-gray-700 text-primary absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-sm font-mono font-light"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}