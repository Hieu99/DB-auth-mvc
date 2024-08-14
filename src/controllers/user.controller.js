const UserSchema = require("../models/user.model");
const bcrypt = require("bcrypt");

class UserController {
  static async userRegister(req, res) {
    try {
      const body = req.body;

      if (!body.username) {
        return res.status(400).json({ message: "username is required" });
      }
      if (!body.password) {
        return res.status(400).json({ message: "password is required" });
      }
      if (!body.email) {
        return res.status(400).json({ message: "email is required" });
      }

      //encode password
      const saltRound = 10;
      const hashedPassword = bcrypt.hashSync(body.password, saltRound);

      const newAccount = new UserSchema({
        username: body.username,
        password: hashedPassword,
        email: body.email,
        full_name: body.full_name,
        avatar: "/avatar/avatar.jpg",
      });
      await newAccount.save();

      res
        .status(201)
        .json({ message: "create user successfully", data: newAccount });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //login
  static async userLogin(req, res) {
    try {
      const body = req.body;
      if (!body.username) {
        return res.status(400).json({ message: "username is required" });
      }
      if (!body.password) {
        return res.status(400).json({ message: "password is required" });
      }

      const findUser = await UserSchema.findOne({ username: body.username });

      if (!findUser) {
        return res.status(404).json({ message: "username is not found" });
      }

      const checkPassword = bcrypt.compareSync(
        body.password,
        findUser.password
      );

      if (!checkPassword) {
        return res.status(404).json({ message: "password is not correct" });
      }

      const userResponse = findUser.toObject();
      delete userResponse.password;
      delete userResponse.__v;

      res
        .status(200)
        .json({ message: "login successfully", data: userResponse });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = UserController;
