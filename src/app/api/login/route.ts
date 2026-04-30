// app/api/login/route.ts

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const MONGO_URL = process.env.MONGODB_URI!;

if (!mongoose.connections[0].readyState) {
  mongoose.connect(MONGO_URL);
}

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { username, password } = body;

    const user = await User.findOne({
      username,
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        {
          status: 404,
        },
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        {
          message: "Invalid password",
        },
        {
          status: 401,
        },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Login successful",
      user,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Login failed",
      },
      {
        status: 500,
      },
    );
  }
}
