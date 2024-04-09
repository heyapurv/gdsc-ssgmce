import { Select, Option } from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export  default function () {
  return (
    <div className="  sm:w-72">
      <Select label="Workshops">
        <Link to={"/study_jams"}><Option>AI & ML</Option></Link>
        <Link to={"/study_jams"}><Option className="mt-1">Android</Option></Link>
      </Select>
    </div>
  );
}