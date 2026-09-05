import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  };

  const saveEdit = (id) => {
    const trimmedText = editingText.trim();

    if (trimmedText) dispatch(updateTodo({ id, text: trimmedText }));
    setEditingId(null);
  };

  return (
    <section className="todo-section" aria-labelledby="todo-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Your list</p>
          <h2 id="todo-heading">Tasks</h2>
        </div>
        <span className="task-count">
          {todos.length} {todos.length === 1 ? "task" : "tasks"}
        </span>
      </div>
      <div className="filter-tabs" role="tablist" aria-label="Filter tasks">
        {[
          ["all", "All"],
          ["active", "Active"],
          ["completed", "Completed"],
        ].map(([value, label]) => (
          <button
            type="button"
            className={`filter-tab${filter === value ? " is-active" : ""}`}
            onClick={() => setFilter(value)}
            role="tab"
            aria-selected={filter === value}
            key={value}
          >
            {label}
          </button>
        ))}
      </div>
      {todos.length === 0 ? (
        <div className="empty-state">
          No tasks yet. Add one above to get started.
        </div>
      ) : filteredTodos.length === 0 ? (
        <div className="empty-state">No {filter} tasks right now.</div>
      ) : (
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <li
              className={`todo-card${todo.completed ? " is-complete" : ""}`}
              key={todo.id}
            >
              <button
                type="button"
                className="complete-button"
                onClick={() => dispatch(toggleTodo(todo.id))}
                aria-label={
                  todo.completed
                    ? `Mark ${todo.text} incomplete`
                    : `Complete ${todo.text}`
                }
                aria-pressed={todo.completed}
              >
                {todo.completed ? "✓" : ""}
              </button>
              {editingId === todo.id ? (
                <input
                  className="edit-input"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveEdit(todo.id)}
                  onBlur={() => saveEdit(todo.id)}
                  autoFocus
                  aria-label="Edit todo"
                />
              ) : (
                <span className="todo-text">{todo.text}</span>
              )}
              <div className="todo-actions">
                {editingId === todo.id ? (
                  <button
                    type="button"
                    className="text-button"
                    onClick={() => saveEdit(todo.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    type="button"
                    className="text-button"
                    onClick={() => startEditing(todo)}
                  >
                    Edit
                  </button>
                )}
                <button
                  type="button"
                  className="text-button danger-button"
                  onClick={() => dispatch(removeTodo(todo.id))}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Todos;
