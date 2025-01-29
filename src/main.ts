import './style.css'
import './api'
import './time'


const addList = document.querySelector<HTMLButtonElement>("#addBtn");
const input = document.querySelector<HTMLInputElement>("#input")
const listCont = document.querySelector<HTMLDivElement>(".listContainer")
const span = document.querySelector<HTMLSpanElement>('span')

if (!addList || !input ||!listCont) {
      throw new Error("Issues with the HTM selectors")
    }

const addFunc = () => {
  if (input.value === "") {
    alert("Please enter a task in the box")
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listCont.append(li);
    input.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.append(span);
  }
}

const deleteFunc = (event: any) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle("checked")
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
  }
}


input.addEventListener("keypress", (event) => {
  if (event.key === 'Enter') {
    addFunc()
  }
})
addList.addEventListener("click", addFunc)
listCont.addEventListener("click", deleteFunc)

