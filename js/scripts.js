//funcao de adicionar task
function addTask(){
    
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle){

        //clonar template
        const template = document.querySelector(".template");
        
        const newTask = template.cloneNode(true);

        //Title
        newTask.querySelector(".task-title").textContent = taskTitle;

        //remove classes desnecessarias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //adicionar tarefas na lista 
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

        //add remove event
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        });


        //completar task

        const doneBtn =  newTask.querySelector(".done-btn").addEventListener("click", function(){

            completeTask(this);

        });



        ///clear input
        document.querySelector("#task-title").value = "";


    }

}
//completar tarefa
function completeTask(task){
    
    const taskComplete = task.parentNode;

    // toggle se tem a classe ele remove, se não tem ele add
    taskComplete.classList.toggle("done");

}


//remover tarefa

function removeTask(task){
    task.parentNode.remove(true)
}


//Evento para adicionar task
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){

    e.preventDefault();

    addTask();

});