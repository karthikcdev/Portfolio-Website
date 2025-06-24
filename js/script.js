document.addEventListener('DOMContentLoaded', () => {
    const fullscreenBtn = document.querySelector('.fullscreen-toggle');

    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', toggleFullScreen);
    }
});

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Scroll animation for About section
function onScrollAnimate() {
    const aboutSection = document.querySelector('.about-section');
    if (!aboutSection) return;
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        aboutSection.classList.add('visible');
    }
}
window.addEventListener('scroll', onScrollAnimate);
window.addEventListener('DOMContentLoaded', onScrollAnimate);

// Smooth scroll for About nav link
const aboutNav = document.querySelector('nav ul li a[href="#about"]');
if (aboutNav) {
    aboutNav.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
}

// Fade out home content on scroll
window.addEventListener('scroll', function() {
    const left = document.querySelector('.content-left');
    const right = document.querySelector('.content-right');
    const main = document.querySelector('main');
    if (!left || !right || !main) return;
    const fadeStart = 0;
    const fadeEnd = main.offsetHeight * 0.5;
    const scrollY = window.scrollY;
    let opacity = 1;
    if (scrollY > fadeStart) {
        opacity = 1 - Math.min((scrollY - fadeStart) / (fadeEnd - fadeStart), 1);
    }
    left.style.opacity = opacity;
    right.style.opacity = opacity;
    left.style.pointerEvents = opacity < 0.1 ? 'none' : 'auto';
    right.style.pointerEvents = opacity < 0.1 ? 'none' : 'auto';
});

// Fade out social icons on scroll
window.addEventListener('scroll', function() {
    const social = document.querySelector('.social-icons');
    const main = document.querySelector('main');
    if (!social || !main) return;
    const fadeStart = 0;
    const fadeEnd = main.offsetHeight * 0.5;
    const scrollY = window.scrollY;
    let opacity = 1;
    if (scrollY > fadeStart) {
        opacity = 1 - Math.min((scrollY - fadeStart) / (fadeEnd - fadeStart), 1);
    }
    social.style.opacity = opacity;
    social.style.pointerEvents = opacity < 0.1 ? 'none' : 'auto';
});

// SPA-like toggle for Home/About
const navHome = document.querySelector('.nav-home');
const navAbout = document.querySelector('.nav-about');
const navProjects = document.querySelector('.nav-projects');
const homeSection = document.getElementById('home-section');
const aboutSection = document.getElementById('about-section');
const projectsSection = document.getElementById('projects-section');

if (navHome && navAbout && navProjects && homeSection && aboutSection && projectsSection) {
    navHome.addEventListener('click', function(e) {
        e.preventDefault();
        homeSection.style.display = '';
        aboutSection.style.display = 'none';
        projectsSection.style.display = 'none';
        aboutSection.classList.remove('fade-in');
        projectsSection.classList.remove('fade-in');
        navHome.classList.add('active');
        navAbout.classList.remove('active');
        navProjects.classList.remove('active');
    });
    navAbout.addEventListener('click', function(e) {
        e.preventDefault();
        homeSection.style.display = 'none';
        aboutSection.style.display = '';
        projectsSection.style.display = 'none';
        aboutSection.classList.remove('fade-in');
        void aboutSection.offsetWidth;
        aboutSection.classList.add('fade-in');
        projectsSection.classList.remove('fade-in');
        navHome.classList.remove('active');
        navAbout.classList.add('active');
        navProjects.classList.remove('active');
    });
    navProjects.addEventListener('click', function(e) {
        e.preventDefault();
        homeSection.style.display = 'none';
        aboutSection.style.display = 'none';
        projectsSection.style.display = '';
        projectsSection.classList.remove('fade-in');
        void projectsSection.offsetWidth;
        projectsSection.classList.add('fade-in');
        aboutSection.classList.remove('fade-in');
        navHome.classList.remove('active');
        navAbout.classList.remove('active');
        navProjects.classList.add('active');
    });
}

// Show Projects when 'SHOW MY PROJECTS' button is clicked
const showProjectsBtn = document.querySelector('.about-btn');
if (showProjectsBtn && homeSection && aboutSection && projectsSection && navProjects && navHome && navAbout) {
    showProjectsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        homeSection.style.display = 'none';
        aboutSection.style.display = 'none';
        projectsSection.style.display = '';
        projectsSection.classList.remove('fade-in');
        void projectsSection.offsetWidth;
        projectsSection.classList.add('fade-in');
        navHome.classList.remove('active');
        navAbout.classList.remove('active');
        navProjects.classList.add('active');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    });
} 