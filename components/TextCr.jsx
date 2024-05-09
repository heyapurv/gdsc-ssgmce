import { Carousel, Typography, Button } from "@material-tailwind/react";
 
export default function() {
  return (
    <Carousel className="rounded-xl">
      <div className="relative h-full w-full ">
        <img
          src="../../../public/studyjams.jpg"
          alt="image 1"
          className="h-full w-full object-cover opacity-100"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="pb-10 mb-72  text-3xl md:text-4xl lg:text-5xl"
            >
               <span className="underline decoration-red-600 underline-offset-[15px] ">WELCOME </span>   
                            <span className="underline decoration-blue-600 underline-offset-[15px] ">TO </span> 
                            <span className="underline decoration-green-600 underline-offset-[15px] ">GDSC </span> 
                            <span className="underline decoration-yellow-600 underline-offset-[15px] ">SSGMCE </span> 
            </Typography>
          
            <div className="flex justify-center gap-2">
             <a href="https://gdsc.community.dev/shri-sant-gajanan-maharaj-college-of-engineering-shegaon/" target="_blank"> <Button size="lg" color="white" className="hover:scale-110 duration-300">
                Join Us
              </Button>
              </a>
             
            </div>
          </div>
        </div>
      </div>
      
   
    </Carousel>
  );
}