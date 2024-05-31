export default async function write2() {
  // Server API
  async function handleSubmit(formData) {
    "use server";
    console.log(formData.get("title"));
  }

  return (
    <div>
      <form action={handleSubmit}>
        <input name="title" />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}