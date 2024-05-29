import { age, name } from "./data.js";
import GoodDay from "./subject.js";

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <div className="cart-item">
        <p>Product by {name}</p>
        <p>${age}</p>
        <p>1개</p>
      </div>

      <CartItem />
      <CartItem />
      <CartItem />
      <GoodDay />
    </div>
  );
}

function CartItem() {
  return (
    <div className="cart-item">
      <p>ice-cream</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
