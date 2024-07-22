/**
 * TODOリストを期限の昇順でソートする
 * @param {Array} todos TODOリスト
 * @returns {Array} ソート済みのTODOリスト
 */
export const sortByDueDateAsc = (todos) => {
  return [...todos].sort((a, b) => a.dueDate.localeCompare(b.dueDate, "ja-JP"));
};
