import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";
  import StudyJams_Gallary from './StudyJams_Gallary'
  import StudyJams_Gallary2 from './StudyJams_Gallary2'
  import StudyJams_Gallary3 from './StudyJams_Gallary3'
   
  export default function() {
    return (
      <div className="sm:w-[32rem] mx-2 sm:mx-0">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3 ">
              <TimelineIcon color="red" />
              <Typography variant="h6"  className="leading-none text-red-600 text-2xl font-bold">
                Timeline Title Here.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="sm:mb-60 ">
                <div className="block md:hidden">
                <StudyJams_Gallary />

                </div>
              <Typography variant="small" color="gray" className="font-normal text-gray-600  md:block hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quas, perspiciatis earum amet voluptates atque similique, facere suscipit dicta, deserunt sed ad. Eaque officiis culpa non vero corrupti quaerat ipsa sapiente exercitationem cupiditate molestias unde quam, sed laborum fuga.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon  color="green"/>
              <Typography variant="h6" color="blue-gray" className="leading-none text-green-600 text-2xl font-bold">
                Timeline Title Here.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="md:mb-60 " >
            <div className="block sm:hidden">
                <StudyJams_Gallary2 />

                </div>
              <Typography variant="small" color="gary" className="font-normal text-gray-600 md:block hidden">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, culpa. Nulla nobis, perferendis distinctio repellendus odit labore nam voluptatibus consectetur magni consequuntur recusandae eos, accusamus fugit accusantium ad asperiores. Ab!
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader className="h-3">
              <TimelineIcon color="blue"/>
              <Typography variant="h6" color="blue-gray" className="leading-none text-blue-700 text-2xl font-bold">
                Timeline Title Here.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="">
            <div className="block md:hidden">
                <StudyJams_Gallary3 />
               
                </div>
              <Typography variant="small" color="gary" className="font-normal text-gray-600 md:block hidden">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia corporis tempore sed rem doloremque quam quidem tenetur vero! Vero ex magnam tempora dicta facilis, aliquid veritatis non debitis. Quaerat, culpa!
              </Typography>
              
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }