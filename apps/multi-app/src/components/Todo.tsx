// import { render } from 'preact';
import { signal, computed } from '@preact/signals';
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

function addTodo(e: JSX.TargetedEvent<HTMLButtonElement, MouseEvent>) {
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

  return (
    <form onSubmit={addTodo}>
      <input type="text" value={newItem.value} onInput={onInput} />
      <button onClick={addTodo}>Add</button>
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
              {todo.completed ? <s>{todo.text}</s> : todo.text}
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
