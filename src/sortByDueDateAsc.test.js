import { sortByDueDateAsc } from "./sortByDueDateAsc";
import { describe, test, expect } from "vitest";

describe("sortByDueDateAsc", () => {
  test("期限の昇順でソートされること", () => {
    // TODOリスト
    const todos = [
      { title: "粗大ゴミを捨てる", dueDate: "2024-08-10", completed: false },
      { title: "本を読み終わる", dueDate: "2024-08-01", completed: false },
      { title: "書類を出す", dueDate: "2024-08-20", completed: false },
    ];

    // ソートする
    const sorted = sortByDueDateAsc(todos);

    // 期限日の昇順でソートされている
    expect(sorted).toEqual([
      { title: "本を読み終わる", dueDate: "2024-08-01", completed: false },
      { title: "粗大ゴミを捨てる", dueDate: "2024-08-10", completed: false },
      { title: "書類を出す", dueDate: "2024-08-20", completed: false },
    ]);
  });
});
