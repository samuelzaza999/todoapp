import { printTodos } from "./printTodos";

const $form = document.querySelector(".new-task");
const $input = document.querySelector(".new-task > input");

// 변수가 변할 수 있어 좋지 않은 방법
function init(todos) {
  const checkTodo = (e) => {
    e.preventDefault();

    // todo 추가
    const todo = { title: $input.value, isDone: false };
    todos.push(todo);
    console.log(todos);

    // 폼 초기화
    $input.value = "";

    // todos 출력
    printTodos(todos);
  };

  $form.addEventListener("submit", checkTodo);
}

export { init };
