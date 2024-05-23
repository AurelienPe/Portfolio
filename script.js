"use strict";

// ********** CONSTANTS **********


// ********** VARIABLES **********

// ********** FUNCTIONS **********
function displayProjects() {
  const projectContainer = document.querySelector("#gallery");
  projectContainer.innerHTML = "";

  fetch('./project.json')
  .then(response => response.json())
  .then(data => {
    
    data.forEach(item => {
      const projectCard = document.createElement("li");
      projectCard.classList.add("project-card");
      const projectTitle = document.createElement("h3");
      const projectLink = document.createElement("a");
      const projectFigure = document.createElement("figure");
      const projectCaption = document.createElement("figcaption");
      const projectImage = document.createElement("img");
      projectImage.classList.add("project-image");

      projectTitle.textContent = item.title;
      projectLink.href = item.url;
      projectLink.target = "_blank";
      projectCaption.textContent = item.subtitle;
      projectImage.src = item.cover;
      projectImage.alt = item.alt;

      
      projectContainer.appendChild(projectCard);
      projectCard.appendChild(projectTitle);
      projectCard.appendChild(projectLink);
      projectLink.appendChild(projectFigure);
      projectFigure.appendChild(projectCaption);
      projectFigure.appendChild(projectImage);
    });
  })
  .catch(error => {
    console.error('Erreur lors de la récupération du fichier JSON:', error);
  });
}

function projectRedirect() {
  //faire en sorte que si on clique sur l'image d'un projet, il redirige vers la page du projet
}

function addListeners() {
  const projectCards = document.querySelectorAll(".project-image");
}

// ********** MAIN CODE **********

displayProjects();
