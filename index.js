const input=document.getElementById("input");
const btn=document.getElementById("btn");
const todo=document.getElementById("todo");

btn.addEventListener("click",()=>{
    const input_text=input.value.trim();
    if(input_text.length<=0)
    {
        alert("Enter Some-Thing in Todo List");
        return false;
    }
    const p=document.createElement("p");
    const li=document.createElement("li");
    p.innerText=input_text;
    li.appendChild(p);
    todo.appendChild(li);
    input.value="";


    const edit=document.createElement("button");
    edit.innerText="Edit";
    li.appendChild(edit);
    edit.classList.add("edit_btn");
    const remove=document.createElement("button");
    remove.innerText="Remove";
    remove.classList.add("remove_btn");
    li.appendChild(remove);


    remove.addEventListener("click",()=>{
        li.remove();
    })

    edit.addEventListener("click",()=>{
        const pr=prompt("Enter the new todo to edit");
        p.innerText=pr;
        li.appendChild(p);
    })

})