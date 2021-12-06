import type { NextPage } from "next";
import Todo from "../components/Todo";

const Home: NextPage = () => {
  return (
    <main className="py-14">
      <Todo />
    </main>
  );
};

export default Home;
