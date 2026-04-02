import User from  "../models/User.js";
import bcrypt from "bcrypt";
import {generateToken} from "../utils/generateToken.js";

export const registerUser = async (data) => {
    const hashed = await bcrypt.hash(data.password, 10);

    const user = await User.create({
        ...data,
        password: hashed
    });

    return user;
};

export const loginUser = async (email, password) => {
    const user = await User.findOne({email});

    if(!user) {
        throw new Error("User not found.");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
        throw new Error("Invalid credentials.")
    };

    const token = generateToken(user);

    return {user, token};
};