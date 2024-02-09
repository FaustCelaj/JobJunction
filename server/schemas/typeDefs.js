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
    user: User
    company:Company
    openjobs(title:String,location:String,company:String,remote:String): [JobPosting]
    companyjobs(companyid: ID!): [JobPosting]
    application(jobid: ID!):[Application]
  }
  type Mutation {
    addUser(username: String!,email: String!, password: String!, role: String!,company:String): Auth
    addCompany(name: String!,description: String, industry: String, companysize: String,location:String,contactemail:String,website:String,accountowner:ID!): Auth
    login(email: String!, password: String!): Auth
    addJobposting(title:String!,description:String,location:String,salary:String,locationType:String,isActive:String,company:ID!):JobPosting
    updateJobposting(_id: ID!,title:String,description:String,location:String,salary:String,locationType:String):JobPosting
    addApplication(job:String, applicant:String, status:String):Application
    }
`;

module.exports = typeDefs;
