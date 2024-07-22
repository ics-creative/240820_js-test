import { describe, test, expect } from "vitest";
import { addTodo } from "./addTodo";

describe("addTodo", () => {
  test("新しいTODOを追加できること", () => {
    // 既存のTODOリスト
    const todos = [
      { title: "TODO1", dueDate: "2024-08-10", completed: false },
      { title: "TODO2", dueDate: "2024-08-20", completed: true },
    ];

    // 新しいTODOを追加
    const updated = addTodo(todos, "TODO3", "2024-08-30");

    // 新しいTODOが追加されていることを確認
    expect(updated).toEqual([
      { title: "TODO1", dueDate: "2024-08-10", completed: false },
      { title: "TODO2", dueDate: "2024-08-20", completed: true },
      { title: "TODO3", dueDate: "2024-08-30", completed: false },
    ]);
  });

  test("既存のTODOが空でも新しいTODOを追加できること", () => {
    // 空のTODOリスト
    const todos = [];

    // 新しいTODOを追加
    const updated = addTodo(todos, "TODO1", "2024-08-10");

    // 新しいTODOが追加されていることを確認
    expect(updated).toEqual([
      { title: "TODO1", dueDate: "2024-08-10", completed: false },
    ]);
  });
});
