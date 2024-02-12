const typeDefs = `
  type User {
    _id: ID
    username: String
    email:String
    password:String
    role:String
    firstName:String
    lastName:String
    resumeURL:String
    company:Company
  }
  type Company {
    _id: ID
    name: String
    description: String
    industry: String
    companySize: String
    location:String
    contactEmail:String
    website:String
    accountOwner:User
  }
  type JobPosting {
    _id: ID
    title: String
    description: String
    location:String
    salary:String
    locationType:String
    company:Company
  }
  type Application {
    _id: ID
    job: JobPosting
    applicant: User
    userresume: String
    status: String
    applieddate:String
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    # Check for the usability of User and Company , remove it not used
    user: [User]
    company:[Company]
    openjobs: [JobPosting]
    companyjobs(companyid: ID!): [JobPosting]
    application(jobid: ID!):[Application]
    onejob(jobid: ID!):[JobPosting]

  }
  type Mutation {
    addUser(username: String!,email: String!, password: String!, role: String!,firstName:String,lastName:String,resumeURL:String,company:ID): Auth
    addCompany(name: String!,description: String, industry: String!, companySize: String!,location:String!,contactEmail:String!,website:String!,accountOwner:ID!): Company
    login(email: String!, password: String!): Auth
    addJobposting(title:String!,description:String!,location:String!,locationType:String!,salary:String!,isActive:String!,company:ID!):JobPosting
    updateJobposting(_id: ID!,title:String!,description:String!,location:String!,salary:String!,locationType:String!,isActive:String!,company:ID!):JobPosting
    updateUser(_id: ID!,email: String!, password: String!, role: String!,firstName:String,lastName:String,resumeURL:String):User
    addApplication(job:ID!, applicant:ID!,status:String!):Application
    }
`;

module.exports = typeDefs;
