import { NextResponse } from "next/server";
import { addUser, findUserByEmail } from "@/lib/users";
import { nanoid } from "nanoid";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  // check if email already exists
  const existing = findUserByEmail(email);
  if (existing) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  // add new user
  addUser({
    id: nanoid(),
    email,
    password, // later hash this with bcrypt
    name,
  });

  return NextResponse.json(
    { message: "User created successfully" },
    { status: 201 }
  );
}
