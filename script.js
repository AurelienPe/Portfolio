"use strict";

// ********** CONSTANTS **********


// ********** VARIABLES **********

// ********** FUNCTIONS **********
function displayProjects() {
  const projectContainer = document.querySelector("#gallery");

  fetch('./project.json')
  .then(response => response.json())
  .then(data => {
    
    data.forEach(item => {
      const projectCard = document.createElement("li");
      projectCard.classList.add("project-card");
      const projectLink = document.createElement("a");
      const projectFigure = document.createElement("figure");
      const projectCaption = document.createElement("figcaption");
      const projectImage = document.createElement("img");
      projectImage.classList.add("project-image");

      projectCaption.textContent = item.title;
      projectLink.href = item.url;
      projectLink.target = "_blank";
      projectCaption.textContent = item.subtitle;
      projectImage.src = item.cover;
      projectImage.alt = item.alt;

      if (item.languages) {
        const languagesList = document.createElement("ul");
        languagesList.classList.add("languages-list");
        item.languages.forEach(language => {
          const languageItem = document.createElement("li");
          const languageIcon = document.createElement("i");
          languageIcon.classList.add("fab", `fa-${language}`);
          languageItem.appendChild(languageIcon);
          languagesList.appendChild(languageItem);
        });
        projectCaption.appendChild(languagesList);
      }
      
      projectContainer.appendChild(projectCard);
      projectCard.appendChild(projectLink);
      projectLink.appendChild(projectFigure);
      projectFigure.appendChild(projectImage);
      projectFigure.appendChild(projectCaption);

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
