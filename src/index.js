// npm install - 웹팩 config의 dist를 docs로 변경 - npm run build

import printTodos from "./printTodos";
import { initForm } from "./form";
import "./todos.css";

// 기본 입력형
const todos = [
  { title: "샌즈", isDone: false },
  { title: "파피루스", isDone: true },
];

// 폼에 입력 이벤트 추가하기 & 입력 시 todo 추가
const print = () => {
  printTodos(todos);
};

// 삭제 : map의 자동 인덱스 번호 이용하는 방법?
const deleteTodo = (index) => {
  // todos에서 index 번호 항목 삭제
  console.log("delete", index);
  todos.splice(index, 1);
  print();
};

// index의 todo.inDone 반전
const toggleTodo = (index) => {
  console.log("toggle", index);
  todos[index].isDone = !todos[index].isDone;
  print();
};

document.body.addEventListener("click", (e) => {
  //   console.log(e.target); // 이벤트 벌인 엘리먼트 추적
  const index = parseInt(e.target.parentNode.dataset.index, 10); // 부모의 인덱스 가져오기

  if (e.target.className === "delete") {
    deleteTodo(index);
  } else if (e.target.className === "toggle-checked") {
    toggleTodo(index);
  }
});

// 시작 시 todos 출력
initForm(todos);
print();
