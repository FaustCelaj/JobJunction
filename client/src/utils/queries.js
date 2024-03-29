import { gql } from "@apollo/client";

export const QUERY_ALLJOBS = gql`
  query getAllJobs($title: String, $jobFunction: String) {
    openjobs(title: $title, jobFunction: $jobFunction) {
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
// export const QUERY_ALLJOBS = gql`
//   query getAllJobs() {
//     openjobs() {
//       _id
//       title
//       description
//       location
//       locationType
//       salary
//       isActive
//       company {
//         name
//       }
//     }
//   }
// `;


export const GET_COMPANY_BY_ACCOUNT_OWNER = gql`
query GetCompanyByAccountOwner($accountOwnerId: ID!) {
  getCompanyByAccountOwner(accountOwnerId: $accountOwnerId) {
    _id
    name
    description
    industry
    companySize
    location
    contactEmail
    website
    accountOwner
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

export const QUERY_ONEJOB = gql`
  query getOneJob($jobid: ID!) {
    onejob(jobid: $jobid) {
      _id
      title
      description
      location
      locationType
      salary
      isActive
      jobFunction
      company {
        name
      }
    }
  }
`;
