import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Jobfeatured = ({ featured }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    location,
    fulltime_or_parttime,
    remote_or_onsite,
    salary,
  } = featured;
  const navigate=useNavigate();
  return (
    <div className="pt-4 ">
     
      <img className="h-28 w-36" src={company_logo} alt="" />
      <h1>{job_title}</h1>
      <h2>{company_name}</h2>
      <div className="flex flex-nowrap gap-2">
        <button className="bg-white100  py-2 px-5 rounded text-violet-950 border-2">
          {remote_or_onsite}
        </button>
        <button className="bg-white-100  py-2 px-5 rounded text-violet-950 border-2">
          {fulltime_or_parttime}
        </button>
      </div>

      <div className="flex flex-nowrap gap-2">
        <p>{location}</p>
        <p>{salary}</p>
      </div>
      <div>
        {" "}
        <button onClick={()=>navigate(`details/${id}`)} className="bg-violet-900  py-2 px-4 rounded text-white">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Jobfeatured;
