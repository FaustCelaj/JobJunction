import React from "react";
import { useParams } from "react-router-dom";
import IndividualJob from "../components/JobDisplays/IndividualJob";

function Job() {
  const { jobId } = useParams();

  return <IndividualJob jobId={jobId} />;
}

export default Job;
