import TodoItem from './TodoItem';

const TodoCollection = ({
  todos,
  onToggleDown,
  onSave,
  onDelete,
  onChangeMode,
}) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onSave={({ id, title }) => onSave?.({ id, title })}
            onToggleDone={(id) => onToggleDown?.(id)}
            onChangeMode={({ id, isEdit }) => onChangeMode?.({ id, isEdit })}
            onDelete={(id) => onDelete?.(id)}
          />
        );
      })}
    </div>
  );
};

export default TodoCollection;
