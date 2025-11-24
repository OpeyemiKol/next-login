// app/page.tsx

export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Welcome to My App</h1>

      <p>Please choose an option:</p>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <a href="/login" style={{ fontSize: "18px" }}>
          Login
        </a>
        <a href="/signup" style={{ fontSize: "18px" }}>
          Sign up
        </a>
      </div>
    </main>
  );
}
