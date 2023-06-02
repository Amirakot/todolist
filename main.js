let input = document.querySelector("input");
let ul = document.querySelector("ul");
let completed=true;
let form = document.querySelector(".form");
form.addEventListener('submit',
function (e) {
    e.preventDefault();
    if (input.value == "") {
      alert("you shoud add task");
    }
    else{
   ul.innerHTML += `<div class="displayy"><li class="listli">${input.value}</li><button class="btnn delete" onclick="deleteitem()">remove</button></div>`;


   var current_tasks = document.querySelectorAll(".delete");
   console.log(current_tasks);
   for (var i = 0; i < current_tasks.length; i++) {
     current_tasks[i].onclick = function () {
       this.parentNode.remove();
       console.log(this);
     };
    
    }
     var list = document.querySelectorAll(".listli");
     console.log(list);
     for (i = 0; i < list.length; i++) {
       if (completed) {
         list[i].onclick = function () {
           console.log(this);
           this.style = "text-decoration: line-through";
          
         };
       } 
       }
     }
      input.value = "";
}


)


function deleteitem(index){
 



//   for( i=0;i<length(html);i++){
   
//   }
//if i click on delte delete it 

}

