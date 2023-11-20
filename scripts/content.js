let aboutMe = document.getElementById('aboutMe');
let experience = document.getElementById('experience');
let pageSubHeading = document.getElementById('pageSubHeading');
let pageTagline = document.getElementById('pageTagline');
let aboutMeNav = document.getElementById("aboutMeNav");
let experienceNav = document.getElementById("experienceNav");



function loadAboutMe(){ 
    experience.classList.add("d-none");
    aboutMe.classList.remove("d-none");
    pageSubHeading.innerText = "Software Engineering Leader";
    pageTagline.classList.remove("d-none");
    experienceNav.classList.remove("active");
    aboutMeNav.classList.add("active");
    collapseNavbar();
}


function loadExperience(){
    aboutMe.classList.add("d-none");
    experience.classList.remove("d-none");
    pageSubHeading.innerText = "Work History";
    pageTagline.classList.add("d-none");
    aboutMeNav.classList.remove("active");
    experienceNav.classList.add("active");
    collapseNavbar();
}

function collapseNavbar(){
    document.getElementById('navbarSupportedContent').classList.remove("show");
}

