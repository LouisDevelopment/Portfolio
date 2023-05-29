onStart();

function toggleDark() {
    var body = document.body;
    const projects = document.getElementsByClassName("project");
    body.classList.toggle("darkmode");
    
    for(let i = 0; i < projects.length; i++){
        projects[i].classList.toggle("project_darkmode");
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
  if (localStorage.getItem('darkMode') == 'enabled') {
    body.classList.add('darkmode');
    const checkbox = document.getElementById('darkmode');
    checkbox.checked = true;
    for(let i = 0; i < projects.length; i++){
        projects[i].classList.toggle("project_darkmode");
    }
  }
}