import User from "../../models/User";

export default {
  signup: async (_, { fullName, ...rest }) => {
    const [firstName, ...lastName] = fullName.split("");
    const user = await User.create({
      firstName,
      lastName,
      ...rest
    });

    return {
      token: user.createToken(),
    }

 

  },
  login: async (_, { email, password }) => {
    const user = User.findOne({ email });

    if (!user) {
      throw new Error("User does not exist!");
    }

    if (!user.authenticateUser(password)) {
      throw new Error("Password does not match!");
    }

    return user;
  }
};
