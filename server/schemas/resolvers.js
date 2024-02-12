const { assertValidExecutionArguments } = require("graphql/execution/execute");
const { User, Company, jobPosting, Application } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
// const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    //Check the usability of this User and Company queries , remove it not used
    // user: async () => {
    //   const users = await User.find();
    //   console.log(users);
    //   return users;
    // },
    // company: async (parent, args) => {
    //   // if (context.user) {
    //   const company = await Company.find();
    //   return company;
    //   // }
    //   // throw AuthenticationError;
    // },
    openjobs: async (parent, args) => {
      // if (context.user) {
      if (args.title && args.jobFunction) {
        return jobPosting
          .find({ title: args.title, jobFunction: args.jobFunction })
          .populate("company");
      } else if (args.jobFunction && !args.title) {
        return jobPosting
          .find({ jobFunction: args.jobFunction })
          .populate("company");
      } else if (!args.jobFunction && args.title) {
        return jobPosting.find({ title: args.title }).populate("company");
      } else {
        return jobPosting.find().populate("company");
      }
      // }
      // throw AuthenticationError;
    },
    companyjobs: async (parent, { companyid }) => {
      // if (context.user) {
      return jobPosting.find({ company: companyid }).populate("company");
      // }
      // throw AuthenticationError;
    },
    application: async (parent, { jobid }) => {
      // if (context.user) {
      const application = await Application.find({ job: jobid })
        .populate("job")
        .populate("applicant");
      return application;
      // }
      // throw AuthenticationError;
    },
    onejob: async (parent, { jobid }) => {
      // if (context.user) {
      return jobPosting.find({ _id: jobid }).populate("company");
      // }
      // throw AuthenticationError;
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

    addJobposting: async (parent, args) => {
      // if (context.user) {
      return jobPosting.create(args);
      // }
      // throw AuthenticationError;
    },
    addApplication: async (parent, args) => {
      // if (context.user) {
      return Application.create(args);
      // }
      // throw AuthenticationError;
    },

    updateJobposting: async (parent, args) => {
      // if (context.user) {
      console.log(args);
      return jobPosting.findOneAndUpdate(
        { _id: args._id },
        {
          $set: {
            title: args.title,
            description: args.description,
            location: args.location,
            salary: args.salary,
            locationType: args.locationType,
            isActive: args.isActive,
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );
      // }
      // throw AuthenticationError;
    },

    updateUser: async (parent, args) => {
      // if (context.user) {
      console.log(args);
      return User.findOneAndUpdate(
        { _id: args._id },
        {
          $set: {
            email: args.email,
            password: args.password,
            role: args.role,
            firstName: args.firstName,
            lastName: args.lastName,
            resumeURL: args.resumeURL,
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );
      // }
      // throw AuthenticationError;
    },
    //  Update user using token value instead of id
    // updateUser: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findByIdAndUpdate(context.user.id, args, {
    //       new: true,
    //     });
    //   }

    //   throw AuthenticationError;
    // },
  },
};

module.exports = resolvers;
