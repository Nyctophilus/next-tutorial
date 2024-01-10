import { addPost, deletePost } from "@/lib/actions";

const ServerAction = () => {
  return (
    <div className="flex flex-col gap-12">
      <form action={addPost} className="flex flex-col">
        <input
          className="bg-transparent"
          type="text"
          name="title"
          placeholder="title"
        />
        <input
          className="bg-transparent"
          type="text"
          name="desc"
          placeholder="desc"
        />
        <input
          className="bg-transparent"
          type="text"
          name="slug"
          placeholder="slug"
        />
        <input
          className="bg-transparent"
          type="text"
          name="userId"
          placeholder="userId"
        />
        <button className="bg-transparent" type="submit">
          add post
        </button>
      </form>

      <form action={deletePost}>
        <input type="text" name="id" placeholder="id" />
        <button type="submit">delete post</button>
      </form>
    </div>
  );
};
export default ServerAction;
