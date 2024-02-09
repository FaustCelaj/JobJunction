import { gql } from "@apollo/client";

export const QUERY_ALLJOBS = gql`
  query getAllJobs() {
    openjobs() {
      _id
      title
      description
      location
      locationType
      salary
      isActive
      company {
        name
      }
    }
  }
`;
export const QUERY_COMPANYJOBS = gql`
  query getCompanyJobs($companyid: ID!) {
    companyjobs(companyid: $companyid) {
      _id
      title
      description
      location
      locationType
      salary
      isActive
    }
  }
`;
export const QUERY_APPLICATION = gql`
  query getCompanyJobs($jobid: ID!) {
    companyjobs(jobid: $jobid) {
      _id
      status
      appliedDate
      applicant {
        firstName
        lastName
        resumeURL
      }
    }
  }
`;
