
const projects = document.querySelector('.projects_items');

function addProject(link){

  let output = `<div class="project wow zoomIn" style="background-image:url('${link}') ">
   </div>`;

   projects.innerHTML+= output;
}


addProject('img/cc.jpg');
addProject('img/cc.jpg');
addProject('img/cc.jpg');
addProject('img/cc.jpg');
addProject('img/cc.jpg');
addProject('img/cc.jpg');

const project = document.querySelector('.project');

project.addEventListener('mouseover',()=>{

   project.classListe.toggle('zoomOut');

})
