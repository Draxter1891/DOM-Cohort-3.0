let add = document.querySelector("#add");
let container = document.querySelector(".list");
let inp = document.querySelector("input");
let dltaction = document.querySelector("#dlt")

function taskAdder(val) {
  let task = document.createElement("div");
  task.classList.add("task");

  let p = document.createElement("p");
  p.textContent = val;

  let action = document.createElement("div");
  action.classList.add("action");

  let editBtn = document.createElement("button");
  editBtn.textContent = "edit";
  editBtn.setAttribute("id","edt")
  let dltBtn = document.createElement("button");
  dltBtn.setAttribute("id","dlt")
  dltBtn.textContent = "delete";

  action.append(editBtn, dltBtn);

  task.append(p, action);

  container.prepend(task);
}

inp.addEventListener("keydown",(e)=>{
  if(e.key==="Enter") return add.click()
  else return
})
add.addEventListener("click", () => {
  let val = inp.value;

  val.trim() && taskAdder(val);

  inp.value = "";

});
 
container.addEventListener("click",(e)=>{
    if(e.target.id==="dlt"){
        e.target.closest(".task").remove()
    }
})
 