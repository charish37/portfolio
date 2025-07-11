// Navigation logic to show active tab
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    navLinks.classList.remove('open');
        this.classList.add('active');
  });
});

const toggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

// Event listener to toggle the nav toggle button
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Project data
const projectsData = [
  {
    id: 1,
    title: "How To Make Flyer Design",
    description: "Lorem Ipsum Dolor Sit Amet, Consec Adipisicing Elit Awd And Lorem Ipsum...",
    image: "./assets/project1.png",
    tags: ["Typescript", "ReactJs", "NextJs", "CSS", "HTML", "MongoDB"]
  },
  {
    id: 2,
    title: "E-commerce Website",
    description: "A full-featured e-commerce platform with shopping cart and payment integration...",
    image: "./assets/project2.png",
    tags: ["JavaScript", "Node.js", "Express", "CSS", "HTML", "PostgreSQL"]
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Interactive dashboard for managing multiple social media accounts...",
    image: "./assets/project3.png",
    tags: ["React", "Chart.js", "API", "CSS", "HTML"]
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates...",
    image: "./assets/project4.png",
    tags: ["Vue.js", "Firebase", "CSS", "HTML", "JavaScript"]
  },
  {
    id: 5,
    title: "Weather Forecast App",
    description: "Beautiful weather application with 7-day forecast and location tracking...",
    image: "./assets/project5.png",
    tags: ["React Native", "API", "JavaScript", "CSS"]
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Responsive portfolio website showcasing creative work and projects...",
    image: "./assets/project6.png",
    tags: ["HTML", "CSS", "JavaScript", "SASS"]
  }
];

// Function to create a project card
function createProjectCard(project) {
  const tagsHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
  
  return `
    <div class="project-card">
      <img src="${project.image}" alt="${project.title}">
      <div class="card-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">
          ${tagsHTML}
        </div>
      </div>
    </div>
  `;
}

// Function to render all projects
function renderProjects() {
  const projectGrid = document.getElementById('projectGrid');
  if (projectGrid) {
    const projectsHTML = projectsData.map(project => createProjectCard(project)).join('');
    projectGrid.innerHTML = projectsHTML;
  }
}

// Initialize projects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
});

// swiper logic to render slides based on the breakpoints and autoplay settings
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1470: {
        slidesPerView: 4,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });