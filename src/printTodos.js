const $todos = document.querySelector("#todos");

const printTodos = (todos) => {
  const html = todos.map((todo, index) => {
    const isDoneClass = todo.isDone ? "checked" : "";
    return `
      <ul data-index="${index}" class="${isDoneClass}">
          <li>
            <button class="delete">×</button>
            <input type="checkbox" class="toggle-checked" ${isDoneClass} />
            <span class="text">${todo.title}</span>
          </li>
        </ul>
      `;
  });
  $todos.innerHTML = `<ul>${html.join("")}</ul>`;
};

export default printTodos;
