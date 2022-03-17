const compBtn=document.querySelector('button#comp');
const pendBtn=document.querySelector('button#pend');
// const TodoInput =document.querySelector('input');
// const addTodoBtn=document.querySelector('button');
// const todolist=document.querySelector('.todos');
// let count=0;
// addTodoBtn.onclick=function(){
//     var input=TodoInput.value;
//     if(input.length===0){
//         alert("please enter a task");

//     }else{
//         let p=document.createElement("p")
//         p.setAttribute("key",count)
//         p.innerHTML=input
//         todolist.appendChild(p)
//         document.querySelector(`p[key="${count}"]`).addEventListener('click',function(){
//             todolist.removeChild(this)
//         })
//         count++;
//     }
// }
async function fetchtodo(){
    let res=await fetch('https://jsonplaceholder.typicode.com/todos');
    let data=await res.json();
    let output='';
    compBtn.onclick=function(){
        data.foreach(function(todo,index){
            if(todo.completed==true){
                output+=`<p key=${todo.id}>
                ${todo.title}
                </p>`
            }
        })
    }

{
document.querySelector('.todos').innerHTML=output;
}
pendBtn.onclick = function(){
    data.forEach(function(todo,index) {
  
if (todo.completed == false){
        output+=`<p key=${todo.id}>
                ${todo.title}
                </p>`
}})
    document.querySelector('.todos').innerHTML=output;
    }
}

fetchtodo();