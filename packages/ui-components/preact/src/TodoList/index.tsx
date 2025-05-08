// import { render } from 'preact';
/** @jsxImportSource preact */
import { computed, signal } from '@preact/signals';
import type { JSX } from 'preact/jsx-runtime';

const todos = signal([
  { text: 'Write my first post', completed: true },
  { text: 'Buy new groceries', completed: false },
  { text: 'Walk the dog', completed: false },
]);

const completedCount = computed(
  () => todos.value.filter((todo) => todo.completed).length,
);

const newItem = signal('');

function addTodo(e: JSX.TargetedEvent<HTMLFormElement, SubmitEvent>) {
  e.preventDefault();

  todos.value = [...todos.value, { text: newItem.value, completed: false }];
  newItem.value = ''; // Reset input value on add
}

function removeTodo(index: number) {
  todos.value.splice(index, 1);
  todos.value = [...todos.value];
}

export default function TodoList() {
  const onInput = (event: JSX.TargetedEvent<HTMLInputElement, Event>) =>
    (newItem.value = (event.target as HTMLInputElement).value);

  const handleClick = (e: JSX.TargetedMouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (newItem.value) {
      todos.value = [...todos.value, { text: newItem.value, completed: false }];
      newItem.value = '';
    }
  };

  return (
    <form onSubmit={addTodo}>
      <label htmlFor="new-todo">Add todo item</label>
      <input
        id="new-todo"
        type="text"
        value={newItem.value}
        onInput={onInput}
        placeholder="Enter a new todo item"
      />
      <button onClick={handleClick}>Add</button>
      <ul>
        {todos.value.map((todo, index) => (
          <li>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onInput={() => {
                  todo.completed = !todo.completed;
                  todos.value = [...todos.value];
                }}
              />
              {todo.completed ?
                <s>{todo.text}</s>
              : todo.text}
            </label>{' '}
            <button onClick={() => removeTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
      <p>Completed count: {completedCount.value}</p>
    </form>
  );
}

// render(<TodoList />, document.getElementById('app'));
