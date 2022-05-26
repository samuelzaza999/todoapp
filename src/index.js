import { log } from "./utils";
import "./todos.css";

const todos = [
  { title: "샌즈", isDone: false },
  { title: "파피루스", isDone: false },
]; // 기본 입력형

// 폼에 입력 이벤트 추가하기 & 입력 시 todo 추가
const $form = document.querySelector(".new-task");
const $input = document.querySelector(".new-task > input");
const $todos = document.querySelector("#todos");

const printTodos = () => {
  const html = todos.map((todo) => {
    return `
    <ul>
        <li>
          <button class="delete">×</button>
          <input type="checkbox" class="toggle-checked" />
          <span class="text">${todo.title}</span>
        </li>
      </ul>
    `;
  });
  $todos.innerHTML = `<ul>${html.join("")}</ul>`;
};

const checkTodo = (e) => {
  e.preventDefault();

  // todo 추가
  const todo = { title: $input.value, isDone: false };
  todos.push(todo);
  console.log(todos);

  // 폼 초기화
  $input.value = "";

  // todos 출력
  printTodos();
};
$form.addEventListener("submit", checkTodo);

// 삭제
const deleteTodo = () => {};

document.body.addEventListener("click", (e) => {
  console.log(e.target); // 이벤트 벌인 엘리먼트 추적
  if (e.target.className === "delete") {
    deleteTodo();
  }
});

// 시작 시 todos 출력
printTodos();
