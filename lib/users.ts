// lib/users.ts

export interface User {
  id: string;
  email: string;
  password: string; // plain for now (later use bcrypt)
  name: string;
}

// Temporary in-memory users list
export const users: User[] = [];

// Add user
export function addUser(user: User) {
  users.push(user);
}

// Find user by email
export function findUserByEmail(email: string) {
  return users.find((u) => u.email === email);
}
