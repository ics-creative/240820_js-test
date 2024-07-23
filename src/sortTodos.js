import { sortByDueDateAsc } from "./sortByDueDateAsc";

/**
 * TODOリストを指定の方法でソートする
 * @param {Array} todos TODOリスト
 * @param {string} sortBy ソートの方法
 * @returns {Array} ソート済みのTODOリスト
 */
export const sortTodos = (todos, sortBy) => {
  switch (sortBy) {
    case "dueDateAsc":
      return sortByDueDateAsc(todos);
    case "dueDateDesc":
      // 仮実装
      return todos;
    case "titleAsc":
      // 仮実装
      return todos;
    case "titleDesc":
      // 仮実装
      return todos;
    default:
      return todos;
  }
};
