import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
   
  export default() =>{
    return (
      <>
        <div className="grid sm:grid-cols-2 gap-10 mx-10 my-10">
            <Card className="sm:w-full sm:max-w-[48rem] sm:flex-row hover:shadow-2xl  duration-200">
                {/* <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="card-image"
                    className="sm:h-full sm:w-full sm:object-cover hidden sm:block"
                />
                </CardHeader> */}
                <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                Event
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    Google Cloud Study Jams 2023
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque modi provident sit fugit, reprehenderit ex labore nisi molestiae dolore non placeat alias quibusdam velit a minima architecto facere cum consectetur!
                </Typography>
                <Link to="/study_jams" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                    Learn More
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                    </Button>
                </Link>
                </CardBody>
            </Card>   
            <Card className="sm:w-full sm:max-w-[48rem] sm:flex-row hover:shadow-2xl duration-200">
                {/* <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="card-image"
                    className="sm:h-full sm:w-full sm:object-cover hidden sm:block"
                />
                </CardHeader> */}
                <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                Event
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                   Info Session GDSC
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, necessitatibus? Eius maxime numquam quam aspernatur pariatur at minus obcaecati debitis, corporis perferendis sint nihil dignissimos molestiae deleniti iste odit praesentium.
                </Typography>
                <Link to="/study_jams" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                    Learn More
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                    </Button>
                </Link>
                </CardBody>
            </Card>   
            <Card className="sm:w-full sm:max-w-[48rem] sm:flex-row hover:shadow-2xl duration-200">
                {/* <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="card-image"
                    className="sm:h-full sm:w-full sm:object-cover hidden sm:block"
                />
                </CardHeader> */}
                <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                Workshop
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    AI - ML Workshop
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus soluta tempora, repudiandae doloribus ratione error maiores sunt alias rem doloremque velit iure nesciunt, at tempore dolorem fugit. Molestiae, quisquam.
                </Typography>
                <Link to="/aiml" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                    Learn More
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                    </Button>
                </Link>
                </CardBody>
            </Card>   
            <Card className="sm:w-full sm:max-w-[48rem] sm:flex-row hover:shadow-2xl duration-200">
                {/* <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="card-image"
                    className="sm:h-full sm:w-full sm:object-cover hidden sm:block"
                />
                </CardHeader> */}
                <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                Workshop
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    Android Development using Kotlin
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aut, omnis nostrum a rem voluptate quasi nesciunt deleniti ex beatae quam quod velit praesentium vero doloribus veritatis illum at dolore!
                </Typography>
                <Link to="/android" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                    Learn More
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                    </Button>
                </Link>
                </CardBody>
            </Card>   
            <Card className="sm:w-full sm:max-w-[48rem] sm:flex-row hover:shadow-2xl duration-200">
                {/* <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="card-image"
                    className="sm:h-full sm:w-full sm:object-cover hidden sm:block"
                />
                </CardHeader> */}
                <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                Event
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                   Google Solution Challegne
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatum, ipsam sit beatae consectetur, omnis fugiat minima officiis eius facilis neque enim quod debitis? Fugiat, laboriosam cumque? Sapiente, atque earum!
                </Typography>
                <Link to="/android" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                    Learn More
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                    </Button>
                </Link>
                </CardBody>
            </Card>   
       
        </div>   
      </>
    );
  }