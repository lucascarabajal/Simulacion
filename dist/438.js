"use strict";(self.webpackChunkSimulacion=self.webpackChunkSimulacion||[]).push([[438],{438:(e,t,n)=>{n.r(t),n.d(t,{domManagement:()=>o,toDoDOM:()=>d});const o=function(){const e=function(e,t,n,o){const d=document.createElement("input");return d.type=`${t}`,d.id=e,null!=o&&(d.value=o),d.placeholder=n,d};return{domButton:function(e,t,n){const o=document.createElement("button");return o.id=e,o.className=t,o.innerHTML=n,o},domImage:function(e,t){const n=document.createElement("img");return n.id=e,n.src=t,n},domParagraph:function(e,t){const n=document.createElement("p");return n.id=e,n.innerHTML=t,n},domH1:function(e,t){const n=document.createElement("h1");return n.id=e,n.innerHTML=t,n},domH2:function(e,t){const n=document.createElement("h2");return n.id=e,n.innerHTML=t,n},domH3:function(e,t){const n=document.createElement("h3");return n.id=e,n.innerHTML=t,n},domAnchor:function(e,t,n){const o=document.createElement("a");return o.id=e,o.href=n,o.innerHTML=t,o},domInput:e,domSelect:function(e,t,...n){const o=document.createElement("select");return o.name=e,o.id=t,n.forEach((e=>{const t=new Option(e,e);o.add(t,void 0)})),o},domInput:e}}(),d={renderNewToDo:function(){const e=document.createElement("div");e.className="newTodoDiv";const t=o.domH2("newToDo","New to-do"),n=o.domInput("newToDoTitle","text","task name"),d=o.domInput("newToDoDescription","text","description"),c=o.domInput("newToDoDueDate","date","dd/mm/yyyy"),r=o.domH3("newToDoPriority","Priority: "),i=o.domSelect("selectPriority","prioritys","High","Medium","Low"),u=o.domButton("addTaskButton","addButton","Add task");return e.appendChild(t),e.appendChild(n),e.appendChild(d),e.appendChild(c),e.appendChild(r),e.appendChild(i),e.appendChild(u),e},renderNewProject:function(){const e=document.createElement("div");e.className="newProjectDiv";const t=o.domH2("headingsProject","New Project"),n=o.domInput("projectTitle","text","project title"),d=o.domInput("projectDescription","text","project description"),c=o.domButton("addProjectButton","addButton","Add project");return e.appendChild(t),e.appendChild(n),e.appendChild(d),e.appendChild(c),e},renderCurrentProject:function(e,t,n,d){const c=document.querySelector(d),r=o.domH2("projectTitle",e),i=o.domParagraph("projectDescription",t);c.appendChild(r),c.appendChild(i),null!=n&&n.forEach((e=>{const t=function(e,t){const n=document.createElement("div");n.className="toDoObjectDiv",n.id=e;const d=o.domParagraph("toDoObjectTitle",e),c=o.domInput("checkObject","checkbox",void 0,t);return n.appendChild(d),n.appendChild(c),n}(e.state.title,e.state.check);c.appendChild(t)}))},createButtonProject:function(e,t){const n=document.querySelector(t),d=o.domButton(e,"project-list",e);n.appendChild(d)}}}}]);