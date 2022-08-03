import "./styles.css";
import { Counter } from "./components/counter";
import { TodosSection } from "./components/todos-section";
import { List } from "./components/list";

export default function App() {
  return (
    <div className="p-4">
      <h3 className="text-xl">Part 1 - List</h3>
      <p>Why is this broken?</p>
      <List />

      <br />
      <hr />

      <div className="p-4 bg-gray-200">
        <h3 className="text-xl">Part 2 - Todos</h3>
        <p>
          Why is <em>this</em> broken?
        </p>
        <TodosSection />
      </div>

      <br />
      <hr />

      <div className="p-4">
        <h3 className="text-xl">Part 3 - Counter</h3>
        <p>This should log to console. Why does it not?</p>
        <Counter />
      </div>
    </div>
  );
}
