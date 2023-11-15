document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from the JSON file
  fetch("./data/index.json")
    .then((response) => response.json())
    .then((data) => {
      // Update Skills Section
      const skillsContainer = document.getElementById("skills-container");
      skillsContainer.innerHTML = generateSkillsHTML(data.skills);

      // Update Projects Section
      const ProjectsContainer = document.getElementById("projects-container");
      ProjectsContainer.innerHTML = generateProjectsHTML(data.Projects);

      // Update Contact Section
      const contactContainer = document.getElementById("contact-container");
      contactContainer.innerHTML = generateContactHTML(data.contact);
    })
    .catch((error) => console.error("Error fetching data:", error));

  // Function to generate HTML for skills
  function generateSkillsHTML(skills) {
    return skills
      .map(
        (skill) => `
      <div class="skills-section-card">
        <div class="skills-section-img">
          <img src="${skill.src}" alt="${skill.title}">
        </div>
        <div class="skills-section-card-content">
          <h3 class="skills-section-title">${skill.title}</h3>
          <div class="skills-section-stars">
            ${generateStarsHTML(skill.rate)}
          </div>
        </div>
      </div>
    `
      )
      .join("");
  }

  // Function to generate HTML for stars based on rating
  function generateStarsHTML(rate) {
    const filledStars = '<span class="filled-star">★</span>'.repeat(rate);
    return filledStars;
  }

  // Function to generate HTML for Projects items
  function generateProjectsHTML(Projects) {
    return Projects.map(
      (item) => `
      <div class="projects-section-card">
        <div class="projects-section-img">
          <img src="${item.src}" alt="${item.title}">
        </div>
        <div class="projects-section-card-content">
          <h3 class="projects-section-card-title">${item.title}</h3>
          <p class="projects-section-card-description">${item.description}</p>
          <div class="projects-code-links">
            <a href="${
              item.link
            }" class="projects-link" target="_blank">GitHub</a>
            ${
              item.demo
                ? `<a href="${item.demo}" class="projects-link" target="_blank">Demo</a>`
                : ""
            }
          </div>
        </div>
      </div>
    `
    ).join("");
  }
});
