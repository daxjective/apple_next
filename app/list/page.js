export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h2 className="title">Products</h2>
      {상품.map((v,i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img"></img>
            <h4>{v} $16</h4>
          </div> 
        );
      })}
    </div>
  );
}
