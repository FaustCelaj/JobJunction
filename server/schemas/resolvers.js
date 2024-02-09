const { User, Company, jobPosting, Application } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
// const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    user: async () => {
      const users = await User.find();
      return users;
    },
    company: async (parent, args, context) => {
      if (context.user) {
        const company = await Company.findById(context.user._id);
        return company;
      }
      throw AuthenticationError;
    },
    openjobs: async (parent, args, context) => {
      if (context.user) {
        return jobPosting.find();
      }
      throw AuthenticationError;
    },
    companyjobs: async (parent, { companyid }, context) => {
      if (context.user) {
        return jobPosting.find({ company: companyid });
      }
      throw AuthenticationError;
    },
    application: async (parent, { jobid }, context) => {
      if (context.user) {
        const application = await Application.findById(job.jobid);
        return application;
      }
      throw AuthenticationError;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addCompany: async (parent, args, context) => {
      // if (context.user) {
      return Company.create(args);
      // }
      // throw AuthenticationError;
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },

    addJobposting: async (parent, { args }, context) => {
      if (context.user) {
        return jobPosting.create({ args });
      }
      throw AuthenticationError;
    },
    addApplication: async (parent, { job, applicant, status }, context) => {
      if (context.user) {
        return Application.create({ job, applicant, status });
      }
      throw AuthenticationError;
    },

    updateJobposting: async (
      parent,
      { id, title, description, location, salary, locationType }
    ) => {
      if (context.user) {
        return jobPosting.findByIdAndUpdate(
          id,
          { title, description, location, salary, locationType },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
