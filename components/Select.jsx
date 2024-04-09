import { Select, Option } from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export  default function () {
  return (
    <div className=" sm:w-72 mb-10 sm:mb-0">
      <Select label="Events ">
        <Link to={"/study_jams"}> <Option className="">Cloud Study Jams</Option></Link>
        <Link to={"/"}> <Option className="mt-1">Info Session</Option></Link>
      </Select>
    </div>
  );
}