import React, { useEffect, useRef } from "react";

interface CarouselProps {
  items: { text: string; svg: React.ReactNode }[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollWidth, clientWidth } = carouselRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;
        const currentScrollLeft = carouselRef.current.scrollLeft;
        const scrollStep = 1;

        carouselRef.current.scrollLeft =
          currentScrollLeft + scrollStep >= maxScrollLeft
            ? 0
            : currentScrollLeft + scrollStep;
      }
    }, 20); // Adjust the speed of the carousel by changing the interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex whitespace-nowrap" ref={carouselRef}>
        {items.map((item, index) => (
          <div
            className="flex w-full flex-none items-center justify-center p-4"
            key={index}
          >
            <div className="flex items-center space-x-4">
              <div className="flex h-16 w-16 items-center justify-center">
                {item.svg}
              </div>
              <p className="text-xl font-semibold">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
