const {
  User,
  ProfileInfo,
  Company,
  JobPosting,
  Application,
} = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
// const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate(
          "profileinfo"
        );
        return user;
      }
      throw AuthenticationError;
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
        return JobPosting.find();
      }
      throw AuthenticationError;
    },
    companyjobs: async (parent, { companyid }, context) => {
      if (context.user) {
        return JobPosting.find({ company: companyid });
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
    addCompany: async (
      parent,
      {
        name,
        description,
        industry,
        companysize,
        location,
        contactemail,
        website,
        accountowner,
      },
      context
    ) => {
      if (context.user) {
        const userid = context.user._id;
        return Company.create({
          name,
          description,
          industry,
          companysize,
          location,
          contactemail,
          website,
          userid,
        });
      }
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
    addProfile: async (parent, { args }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { comments: { commentText } },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }

      throw AuthenticationError;
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw AuthenticationError;
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
