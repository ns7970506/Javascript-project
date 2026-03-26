const addBtn = document.querySelector("#push")
const addInput = document.querySelector("#newtask input")

addBtn.addEventListener("click",()=>{
  if(addInput.value.length == 0){
    alert("Add Yout Task")
  }
  else{
    const addTask = document.querySelector("#tasks")
    addTask.innerHTML+=`
    <div class ="task">
    <span>${addInput.value}</span>
    <button class="delete">
        <i class="far fa-trash-alt"></i>
    </button>
    </div>`
  
  
  var current_task = document.querySelectorAll(".delete")
  for(let i=0 ; i<current_task.length ;i++){
      current_task[i].onclick = function(){ this.parentNode.remove()
  }
}

   var done = document.querySelector(".task")
   for(let i=0 ;i<done.length ;i++){
       done[i].onclick = function(){
        this.classList.add('completed')
      }
    }
   addInput.value = "";
  }
  })






















