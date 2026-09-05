import AddTodo from "./components/AddTodo";
import Todos from "./components/Todo";

function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Personal workspace</p>
          <h1>My tasks</h1>
          <p className="subtitle">Keep your day focused and organized.</p>
        </div>
      </header>
      <AddTodo />
      <Todos />
    </main>
  );
}

export default App;
