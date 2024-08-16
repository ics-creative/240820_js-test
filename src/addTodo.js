/**
 * TODOリストに新しいTODOを追加する
 * @param {Array} todos 既存のTodoリスト
 * @param {string} title TODOのタイトル
 * @param {string} dueDate TODOの期限
 * @param {boolean} completed TODOが完了済みかどうか。指定しない場合はfalse。
 * @returns {Array} 新しいTodoを追加したTodoリスト
 */
export const addTodo = (todos, title, dueDate, completed = false) => {
  const newTodo = { title, dueDate, completed };
  return [...todos, newTodo];
};
