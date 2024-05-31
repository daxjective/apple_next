"use client";

/** Client에서 Server Actions 사용하는 방법
 * - 서버 API 만드는 것이랑 복잡도가 같다. => 굳이 ?
 * - 장점 : 한 곳에서 관리 할 수 있다.
 */
import { handleSubmit } from "./action";

export default async function write2() {
  const db = (await connectDB).db("forum");
  await db.collection;

  return (
    <div>
      <form action={handleSubmit}>
        <input name="title" />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
