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
                The key to more success is to have a lot of pillows. Put it this way, it took me
                twenty five years to get these plants, twenty five years of blood sweat and tears, and
                I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
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
                The key to more success is to have a lot of pillows. Put it this way, it took me
                twenty five years to get these plants, twenty five years of blood sweat and tears, and
                I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
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
                The key to more success is to have a lot of pillows. Put it this way, it took me
                twenty five years to get these plants, twenty five years of blood sweat and tears, and
                I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </Typography>
              
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }