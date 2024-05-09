import { Carousel } from "@material-tailwind/react";
import img1 from '../../../public/studyjams.jpg' 
export default function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-xl h-40  sm:h-60 sm:my-10 my-5 shadow-2xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={img1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={img1}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={img1}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}