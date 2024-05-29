import Image from "next/image";

export default function Home() {
  // javascript   
  let name = 'Apple'
  let link = 'https://codingapple.com/unit/nextjs-page-layout/?id=68759'
  
  return (
    <div>
    <h4 className="title">{name}</h4>
    <p className="title-sub" style={{color : 'blue', fontSize:'30px'}}>by {name}Coding</p>
    <a href={link}>link</a>
  </div>
  );
}
