import User from "../models/user";
import { Request , Response } from "express";


const createUser = async(req: Request, res: Response) => {

    const {auth0Id} = req.body;
    try{
        // check if user already exists
        const user = await User.findOne({auth0Id});
        if(user){
            return res.status(200).json("usert already exists");
        }
        //if not create user
        const newUser = new User(req.body);
        await newUser.save();
        //return user object if it created
        res.status(201).json(newUser.toObject());

    }catch(err){
        console.error(err);
        res.status(500).json({message: "error creating user"});
    }
}

const updateUser = async (req: Request, res: Response) => {
  try {
    const { name, addressLine1, country, city } = req.body;
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name;
    user.addressLine1=addressLine1;
    user.city = city;
    user.country = country;

    await user.save();

    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating user" });
  }
};

module.exports = {
    createUser,
    updateUser
}