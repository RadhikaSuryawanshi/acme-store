import { NextResponse } from "next/server";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
//console.log(process.env.MONGODB_URI);
const MONGODB_URI = process.env.MONGODB_URI!;

async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  await mongoose.connect(MONGODB_URI);
  console.log("MongoDB Connected");
}

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    console.log(body);

    const { username, email, password } = body;

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return NextResponse.json(
        {
          message: "User already exists",
        },
        {
          status: 400,
        },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Signup failed",
      },
      {
        status: 500,
      },
    );
  }
}
