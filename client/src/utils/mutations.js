import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $role: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      role: $role
    ) {
      token
      user {
        _id
      }
    }
  }
`;
export const UPDATE_USER = gql`
  mutation updateUser(
    $_id: String!
    $email: String!
    $password: String!
    $role: String!
    $firstName: String!
    $lastName: String!
    $resumeURL: String!
  ) {
    updateUser(
      _id: $_id
      email: $email
      password: $password
      role: $role
      firstName: $firstName
      lastName: $lastName
      resumeURL: $resumeURL
    )     
  }
  }
`;

export const ADD_COMPANY = gql`
  mutation addCompany(
    $name: String!
    $description: String!
    $industry: String!
    $companySize: String!
    $location: String!
    $contactEmail: String!
    $website: String!
  ) {
    addCompany(
      name: $name
      description: $description
      industry: $industry
      companySize: $companySize
      location: $location
      contactEmail: $contactEmail
      website: $website
    ) 
    }
  }
`;

export const ADD_JOBPOSTING = gql`
  mutation addJobposting(
    $title: String!
    $description: String!
    $location: String!
    $locationType: String!
    $salary: String!
    $isActive: String!
    $company: ID!
  ) {
    addJobposting(
      title: $title
      description: $description
      location: $location
      locationType: $locationType
      salary: $salary
      isActive: $isActive
      company: $company
    ) 
    }
  }
`;

export const UPDATE_JOBPOSTING = gql`
mutation updateJobposting(
  $_id: ID!
  $title: String!
  $description: String!
  $location: String!
  $locationType: String!
  $salary: String!
  $isActive: String!
  $company: ID!
) {
  updateJobposting(
    _id: $_id
    title: $title
    description: $description
    location: $location
    locationType: $locationType
    salary: $salary
    isActive: $isActive
    company: $company
  ) 
  }
}
`;

export const ADD_APPLICATION = gql`
  mutation addApplication(
    $job: ID!
    $applicant: ID!
    $status: String!
    ) {
    addApplication(
      job: $job
      applicant: $applicant
      status: $status
    ) 
    }
  }
`;
