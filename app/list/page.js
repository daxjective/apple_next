import Image from "next/image";
import 작명 from '/public/food0.png'
// import 작명 from '@/public/food0.png'

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h2 className="title">Products</h2>
      {상품.map((v,i) => {
        return (
          <div className="food" key={i}>
            {/* <img src="/food0.png" food-img></img> */}
            <Image src={작명} className="food-img"></Image>

            <h4>{v} $16</h4>
          </div> 
        );
      })}
    </div>
  );
}
