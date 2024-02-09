const db = require('./connection');
const { User, Company, jobPosting, Application } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  // Clean the database for User, Company, jobPosting, and Application
  await cleanDB('User');
  await cleanDB('Company');
  await cleanDB('jobPosting');
  await cleanDB('Application');

  // Seed Users (3 company owners, 5 jobseekers)
  const users = await User.insertMany([
    // Company Owners
    {
      username: "TechBoss",
      email: "techboss@example.com",
      password: "password",
      role: "company",
    },
    {
      username: "EcoCEO",
      email: "ecoceo@example.com",
      password: "password",
      role: "company",
    },
    {
      username: "AutoExec",
      email: "autoexec@example.com",
      password: "password",
      role: "company",
    },

    // Job Seekers
    {
      username: "DevDana",
      email: "devdana@example.com",
      password: "password",
      role: "jobseeker",
      firstName: "Dana",
      lastName: "Smith",
      resumeURL: "http://example.com/resumedana.pdf",
    },
    {
      username: "CodeCarlos",
      email: "codecarlos@example.com",
      password: "password",
      role: "jobseeker",
      firstName: "Carlos",
      lastName: "Jones",
      resumeURL: "http://example.com/resumecarlos.pdf",
    },
    {
      username: "TechTina",
      email: "techtina@example.com",
      password: "password",
      role: "jobseeker",
      firstName: "Tina",
      lastName: "Johnson",
      resumeURL: "http://example.com/resumetina.pdf",
    },
    {
      username: "SysSara",
      email: "syssara@example.com",
      password: "password",
      role: "jobseeker",
      firstName: "Sara",
      lastName: "Williams",
      resumeURL: "http://example.com/resumesara.pdf",
    },
    {
      username: "ProgPete",
      email: "progpeter@example.com",
      password: "password",
      role: "jobseeker",
      firstName: "Peter",
      lastName: "Brown",
      resumeURL: "http://example.com/resumepete.pdf",
    },
  ]);

  console.log("Users seeded");

  // Seed Companies (3 companies, each belonging to one of the company owners)
  const companies = await Company.insertMany([
    {
      name: "Tech Innovate",
      description: "Leading innovation in tech",
      industry: "Professional, Scientific and Technical Services",
      companySize: "50 - 100",
      location: "Silicon Valley",
      contactEmail: "contact@techinnovate.com",
      website: "http://techinnovate.com",
      accountOwner: users[0]._id,
    },
    {
      name: "Eco Sustain",
      description: "Sustainability in the modern world",
      industry: "Administration, Business Support & Waste Management Services",
      companySize: "20 - 30",
      location: "Austin",
      contactEmail: "contact@ecosustain.com",
      website: "http://ecosustain.com",
      accountOwner: users[1]._id,
    },
    {
      name: "Auto Drive",
      description: "Automotive excellence and innovation",
      industry: "Manufacturing",
      companySize: "100+",
      location: "Detroit",
      contactEmail: "contact@autodrive.com",
      website: "http://autodrive.com",
      accountOwner: users[2]._id,
    },
  ]);

  console.log("Companies seeded");

  // Seed jobPostings
  const jobPostings = await jobPosting.insertMany([
    // For Tech Innovate
    {
      title: "Senior Frontend Developer",
      description: "Crafting high-quality front-end experiences.",
      location: "Remote",
      locationType: "Remote",
      salary: "80,000 - 100,000",
      isActive: true,
      company: companies[0]._id,
    },
    {
      title: "AI Specialist",
      description: "Develop cutting-edge AI systems.",
      location: "On-site",
      locationType: "In Office",
      salary: "100,000 - 150,000",
      isActive: true,
      company: companies[0]._id,
    },

    // Eco Sustain / company 2 will purposefully not have any jobs so we can see how to render that case

    // For Auto Drive
    {
      title: "Mechanical Engineer",
      description: "Designing next-gen automotive machinery.",
      location: "Remote",
      locationType: "Remote",
      salary: "80,000 - 100,000",
      isActive: true,
      company: companies[2]._id,
    },
    {
      title: "Automotive Designer",
      description: "Shaping the cars of the future.",
      location: "Remote",
      locationType: "Hybrid",
      salary: "80,000 - 100,000",
      isActive: true,
      company: companies[2]._id,
    },
    {
      title: "Quality Assurance Engineer",
      description: "Ensuring product quality and reliability.",
      location: "Remote",
      locationType: "Hybrid",
      salary: "60,000 - 80,000",
      isActive: true,
      company: companies[2]._id,
    },
    {
      title: "Supply Chain Analyst",
      description: "Optimizing supply chain processes.",
      location: "Remote",
      locationType: "Remote",
      salary: "60,000 - 80,000",
      isActive: true,
      company: companies[2]._id,
    },
    {
      title: "Product Manager",
      description: "Leading product development initiatives.",
      location: "Remote",
      locationType: "Hybrid",
      salary: "100,000 - 150,000",
      isActive: true,
      company: companies[2]._id,
    },
    {
      title: "Sales Strategist",
      description: "Developing sales strategies and customer relationships.",
      location: "Remote",
      locationType: "In Office",
      salary: "40,000 - 60,000",
      isActive: true,
      company: companies[2]._id,
    },
  ]);

  console.log("Job Postings seeded");

  // Seed Applications
  // Applications for company 1's first job
  const applications1 = await Application.insertMany([
    { job: jobPostings[0]._id, applicant: users[3]._id, status: "Applied" },
    { job: jobPostings[0]._id, applicant: users[4]._id, status: "Applied" },
  ]);

  // Applications for company 1's second job
  const applications2 = await Application.insertMany([
    { job: jobPostings[1]._id, applicant: users[3]._id, status: "Applied" },
    { job: jobPostings[1]._id, applicant: users[4]._id, status: "Applied" },
    { job: jobPostings[1]._id, applicant: users[5]._id, status: "Applied" },
  ]);

  // Applications for company 3's jobs
  const applications3 = [];
  for (let i = 2; i < jobPostings.length; i++) {
    for (let j = 3; j < users.length; j++) {
      applications3.push({
        job: jobPostings[i]._id,
        applicant: users[j]._id,
        status: "Applied",
      });
    }
  }

  await Application.insertMany(applications3);

  console.log("Applications seeded");

  // Update the company with the active job postings
  await Company.updateOne(
    { _id: companies[0]._id },
    { $set: { activeJobs: [jobPostings[0]._id, jobPostings[1]._id] } }
  );
  await Company.updateOne(
    { _id: companies[2]._id },
    { $set: { activeJobs: jobPostings.slice(2).map((jp) => jp._id) } }
  );

  console.log("Company job postings updated");

  process.exit();
});
