import React from "react";
import { useState, useEffect } from "react";
import { jobs } from "../API";
import { Link } from "react-router-dom";
function Jobs() {
  const [joblist, setJobList] = useState([]);
  const getData = async () => {
    let page = 1;
    let jobsData = await jobs(page);
    setJobList(jobsData);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {joblist.length === ""
        ? ""
        : joblist?.map((item) => {
            return (
              <>
                <div>
                  <Link
                    to={`/jobs-detail/${item?.id}`}
                    className="text-lg text-blue-600"
                  >
                    {item?.title}
                  </Link>
                  ;
                </div>
                <div> {item?.company};</div>
                <div className="h-10"></div>
              </>
            );
          })}
    </div>
  );
}

export default Jobs;
