import { Carousel, Typography, Button } from "@material-tailwind/react";
 
export default function() {
  return (
    <Carousel className="rounded-xl">
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Welcome to GDSC SSGMCE
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quae maxime dolorum dolores quia eos obcaecati delectus eius, ducimus officia!
            </Typography>
            <div className="flex justify-center gap-2">
             <a href="https://gdsc.community.dev/shri-sant-gajanan-maharaj-college-of-engineering-shegaon/" target="_blank"> <Button size="lg" color="white">
                Join Us
              </Button>
              </a>
             
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Lorem ipsum dolor sit amet.
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae ut minima laboriosam consectetur ea dolor debitis est ratione porro maiores?
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
            
            </div>
          </div>
        </div>
      </div>
   
    </Carousel>
  );
}