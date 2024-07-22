/**
 * TODOリストに新しいTODOを追加する
 * @param {Array} todos 既存のTodoリスト
 * @param {string} title TODOのタイトル
 * @param {string} dueDate TODOの期限
 * @returns {Array} 新しいTodoを追加したTodoリスト
 */
export const addTodo = (todos, title, dueDate) => {
  const newTodo = { title, dueDate, completed: false };
  return [...todos, newTodo];
};
