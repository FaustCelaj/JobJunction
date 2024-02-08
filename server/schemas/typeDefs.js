const typeDefs = `
  type User {
    _id: ID
    username: String
    email:String
    password:String
    role:String
    profileinfo:ProfileInfo
    company:Company
  }
  type ProfileInfo
  {
    _id:ID
    firstname:String
    lastname:String
    skills:String
    resume:String
  }
  type Company {
    _id: ID
    name: String
    description: String
    industry: String
    companysize: String
    location:String
    contactemail:String
    website:String
    activejobs:[JobPosting]
    accountowner:User
  }
  type JobPosting {
    _id: ID
    title: String
    description: String
    location:String
    salary:Float
    remote:String
    posteddate:String
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
    // profileinfo:ProfileInfo
    openjobs(title:String,location:String,company:String,remote:String): [JobPosting]
    companyjobs(companyid: ID!): [JobPosting]
    application(jobid: ID!):[Application]
  }

  type Mutation {
    addUser(username: String!,email: String!, password: String!, role: String!,company:String): Auth
    addCompany(name: String!,description: String, industry: String, companysize: String,location:String,contactemail:String,website:String,accountowner:ID!): Auth
    login(email: String!, password: String!): Auth
    addProfile(firstname:String!,lastname:String!,skills:String!,resume:String): User
    addJobposting(title:String!,description:String,location:String,salary:Float,remote:String,posteddate:String,company:ID!)
    addApplication(job:ID!,applicant:ID!,resume:String,status:String!,applieddate:String)
    updateProfile(_id: ID!,skills:String!,resume:String): User
    updateJobposting(_id: ID!,title:String!,description:String,location:String,salary:Float,remote:String,posteddate:String)
    }
`;

module.exports = typeDefs;
