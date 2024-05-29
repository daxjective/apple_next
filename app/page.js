import Link from "next/link";

export default function Home() {
  // javascript
  let name = "Apple";
  let link = "https://codingapple.com/unit/nextjs-page-layout/?id=68759";

  return (
    <main>
      <div className="navbar">
        <Link href="/">home</Link>
        <Link href="/list">list</Link>
        <h1 className="title">Programming Log</h1>
        <p className="title-sub">by dev kim</p>
      </div>

      <h4 className="title">{name}</h4>
      <p className="title-sub" style={{ color: "blue", fontSize: "30px" }}>
        by {name}Coding
      </p>
      <a href={link}>link</a>
    </main>
  );
}
