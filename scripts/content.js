let pageHeading = document.getElementById('pageHeading');
let mainContent = document.getElementById('mainContent');
let aboutMe = document.getElementById('aboutMe');
let experience = document.getElementById('experience');
let pageSubHeading = document.getElementById('pageSubHeading');
let pageTagline = document.getElementById('pageTagline');


function loadContent(pageHeadingText, pageSubHeadingText, pageTaglineText, mainContentText){
    pageHeading.innerText = pageHeadingText;
    pageSubHeading.innerText = pageSubHeadingText;
    pageTagline.innerHTML = pageTaglineText;
    mainContent.innerHTML = mainContentText;
}

// window.onload = function(){
//     loadAboutMe();
// };


function loadAboutMe(){ 
    experience.classList.add("d-none");

    aboutMe.classList.remove("d-none");
    pageHeading.innerText = "About Me";
    pageSubHeading.innerText = "Software Engineering Leader";
    pageTagline.classList.remove("d-none");

    
    // const aboutMeTagLine = "<div class=\"col-lg-4\"><p class=\"text-center lead\">simplicity out of complexity</p></div>"
    // + "<div class=\"col-lg-4\"><p class=\"text-center lead\">simplicity out of complexity</p></div>"
    // + "<div class=\"col-lg-4\"><p class=\"text-center lead\">simplicity out of complexity</p></div>"
    
    // loadContent("About Me", "Software Engineering Leader", aboutMeTagLine, aboutMeContent);
}


function loadExperience(){

    aboutMe.classList.add("d-none");

    experience.classList.remove("d-none");
    pageHeading.innerText = "Experience";
    pageSubHeading.innerText = "Work History";
    pageTagline.classList.add("d-none");

}

function loadInterests(){

}

function loadContact(){

}

