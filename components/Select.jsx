import { Select, Option } from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export  default function () {
  return (
    <div className=" sm:w-72 mb-10 sm:mb-0">
      <Select label="Events ">
        <Link to={"/study_jams"}> <Option className="">Cloud Study Jams 2023</Option></Link>
        <Link to={"https://gdsc.community.dev/events/details/developer-student-clubs-shri-sant-gajanan-maharaj-college-of-engineering-shegaon-presents-google-solution-challenge-awareness-session/"}> <Option className="mt-1">Solution Challenge</Option></Link>
        <Link to={"https://gdsc.community.dev/events/details/developer-student-clubs-shri-sant-gajanan-maharaj-college-of-engineering-shegaon-presents-gdsc-info-session-2023/"}> <Option className="mt-1">Info Session</Option></Link>
      </Select>
    </div>
  );
}