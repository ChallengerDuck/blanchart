"use strict"

let list = document.querySelectorAll("a, button, input");
list.forEach((elem) => {
  elem.addEventListener('click', function (e) {
  // предотвращаем реагирование скрипта на нажите Enter
  if (e.code = "Enter") return;
  let c = document.createElement("div");
  c.classList.add('cursor');

  c.style.top = `${e.clientY + 8}px`;
  c.style.left =`${e.clientX + 10}px`;

  document.body.append(c);
  c.onanimationend = function (e) {
    this.remove();
  };
});
})
