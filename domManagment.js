
const domManagement = (function(){

    const domButton = function(nameID, className, innerHtml){

        const button = document.createElement('button');
        button.id = nameID;
        button.className = className
        button.innerHTML = innerHtml;

        return button;
    }

    const domParagraph = function(nameID, content){
        const paragraph = document.createElement('p');
        paragraph.id = nameID;
        paragraph.innerHTML = content;

        return paragraph;
    }

    const domH1 = function(nameID, content){
        const heading1 = document.createElement('h1');
        heading1.id = nameID;
        heading1.innerHTML = content;

        return heading1;
    }

    const domH2 = function(nameID, content){
        const heading2 = document.createElement('h2');
        heading2.id = nameID;
        heading2.innerHTML = content;

        return heading2;
    }

    const domH3 = function(nameID, content){
        const heading3 = document.createElement('h3');
        heading3.id = nameID;
        heading3.innerHTML = content;

        return heading3;
    }

    const domImage = function(nameID, srcImage){
        const img = document.createElement('img');

        img.id = nameID;
        img.src = srcImage;

        return img;
    }

    const domAnchor = function(nameID, content, hrefPage){
        const anchor = document.createElement('a');

        anchor.id = nameID;
        anchor.href = hrefPage;
        anchor.innerHTML = content;

        return anchor;
    }

    const domInput = function(nameID, type, placeholderContent, checkValue){
        const input = document.createElement('input');
        input.type = `${type}`;
        input.id = nameID;
        if(checkValue != undefined){
            input.value = checkValue;
        }
        input.placeholder = placeholderContent;

        return input;
    }

    const domSelect = function(name, nameID, ...options ){
        const select = document.createElement('select');
        select.name = name;
        select.id = nameID;
        options.forEach(element => {
            const option = new Option(element, element);
            select.add(option, undefined);
        });

        return select;
    }

    return{
        domButton,
        domImage,
        domParagraph,
        domH1,
        domH2,
        domH3,
        domAnchor,
        domInput,
        domSelect,
        domInput
    }
})();




const toDoDOM = (function(){
        const renderNewToDo = function(){
            const toDoDiv = document.createElement('div');
            toDoDiv.className = 'newTodoDiv';

            const newToDo = domManagement.domH2('newToDo', 'New to-do');
            const titleTextBox = domManagement.domInput('newToDoTitle', 'text', 'task name');
            const descriptionTextBox = domManagement.domInput('newToDoDescription', 'text', 'description');
            const dueDateTextBox = domManagement.domInput('newToDoDueDate', 'date', 'dd/mm/yyyy');
            const h3Priority = domManagement.domH3('newToDoPriority', 'Priority: ');
            const prioritySelect = domManagement.domSelect('selectPriority', 'prioritys', 'High', 'Medium', 'Low');
            const addTaskButton = domManagement.domButton('addTaskButton','addButton', 'Add task');
           
            
            toDoDiv.appendChild(newToDo);
            toDoDiv.appendChild(titleTextBox);
            toDoDiv.appendChild(descriptionTextBox);
            toDoDiv.appendChild(dueDateTextBox);
            toDoDiv.appendChild(h3Priority);
            toDoDiv.appendChild(prioritySelect);
            toDoDiv.appendChild(addTaskButton);

            return toDoDiv;
        }

        const renderNewProject = function(){
            const projectDiv = document.createElement('div');
            projectDiv.className = 'newProjectDiv';

            const headingsProject = domManagement.domH2('headingsProject', 'New Project'); 
            const projectTitle = domManagement.domInput('projectTitle', 'text', 'project title');
            const projectDescription = domManagement.domInput('projectDescription', 'text', 'project description');
            const addProjectButton = domManagement.domButton('addProjectButton','addButton', 'Add project');


            projectDiv.appendChild(headingsProject);
            projectDiv.appendChild(projectTitle);
            projectDiv.appendChild(projectDescription);
            projectDiv.appendChild(addProjectButton);

            return projectDiv;
        }

        const createButtonProject = function(title, div){
            const divProjects = document.querySelector(div);

            const buttonProject = domManagement.domButton(title,'project-list', title);
            divProjects.appendChild(buttonProject);
        }

        const renderToDoObject = function(titleTask, check){
            const toDoObjectDiv = document.createElement('div');
            toDoObjectDiv.className = 'toDoObjectDiv';
            toDoObjectDiv.id = titleTask;

            const titleParagraph = domManagement.domParagraph('toDoObjectTitle', titleTask);
            const checkInput = domManagement.domInput('checkObject', 'checkbox',undefined ,check);

            toDoObjectDiv.appendChild(titleParagraph);
            toDoObjectDiv.appendChild(checkInput);

            return toDoObjectDiv;
        }

        const renderCurrentProject = function(title, description, toDoObjects, div){
            const projectDiv = document.querySelector(div);
           
            const projectTitle = domManagement.domH2('projectTitle', title);
            const projectDescription = domManagement.domParagraph('projectDescription', description);
            
            projectDiv.appendChild(projectTitle);
            projectDiv.appendChild(projectDescription);
            
            if(toDoObjects != undefined){
                toDoObjects.forEach(element => {
                   const toDo = renderToDoObject(element.state.title, element.state.check);
                   projectDiv.appendChild(toDo);
                });
            }

        }


        return {renderNewToDo, renderNewProject, renderCurrentProject, createButtonProject};
})();

   


export  {domManagement, toDoDOM};