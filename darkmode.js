onStart();

function toggleDark() {
    var body = document.body;
    const projects = document.getElementsByClassName("project");
    const left_projects = document.getElementsByClassName("double-project-panel-left");
    const right_projects = document.getElementsByClassName("double-project-panel-right");
    body.classList.toggle("darkmode");
    
    for(let i = 0; i < projects.length; i++){
        projects[i].classList.toggle("project_darkmode");
        left_projects[i].classList.toggle("project_darkmode");
        right_projects[i].classList.toggle("project_darkmode");
    }
    if(body.classList.contains("darkmode")){
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

function onStart(){
  var body = document.body;
  const projects = document.getElementsByClassName("project");
  const left_projects = document.getElementsByClassName("double-project-panel-left");
  const right_projects = document.getElementsByClassName("double-project-panel-right");
  if (localStorage.getItem('darkMode') == 'enabled') {
    body.classList.add('darkmode');
    const checkbox = document.getElementById('darkmode');
    checkbox.checked = true;
    for(let i = 0; i < projects.length; i++){
        projects[i].classList.toggle("project_darkmode");
        left_projects[i].classList.toggle("project_darkmode");
        right_projects[i].classList.toggle("project_darkmode");
    }
  }
}