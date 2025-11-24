"use client";

import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) {
      setMsg("Account created! You can now login");
    } else {
      const data = await res.json();
      setMsg(data.error);
    }
  }

  return (
    <div>
      <h2>Create Account</h2>

      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Choose a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign up</button>

        {msg && <p>{msg}</p>}
      </form>
    </div>
  );
}
