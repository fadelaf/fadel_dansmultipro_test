import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { jobsDetail } from "../API";
function JobsDetail() {
  const params = useParams();
  const id = params.id;
  const [detail, setDetail] = useState();
  const getDetail = async () => {
    let data = await jobsDetail(id);
    setDetail(data.description);
  };

  useEffect(() => {
    getDetail();
  }, []);
  return <div>{detail}</div>;
}

export default JobsDetail;
