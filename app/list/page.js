export default function List() {

  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let a = [10, 20, "30"]; // 여러가지 데이터 형식 => array

  // map () : array 기본 함수 => 반복
  let array = [2, 3, 4];
  let newMap = array.map((a, i) => {
    
    console.log(a); // 요소 값
    console.log(i); // 0부터 1씩 증가할 
    console.log('------------------------------------');
    return 10 ; 
  });
  console.log(newMap) // [ 10, 10, 10 ]

  return (
    <div>
      <h2 className="title">Products</h2>

      <div className="food">
        <h4>{상품[0]} $16</h4>
      </div>
      <div className="food">
        <h4>{상품[1]} $8</h4>
      </div>
      <div className="food">
        <h4>{상품[2]} $12</h4>
      </div>
    </div>
  );
}
