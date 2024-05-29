export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h2 className="title">Products</h2>
      {상품.map((v, i) => {
        return (
          <div className="food">
            <h4>{v} $16</h4>
          </div>
        );
      })}
    </div>
  );
}
