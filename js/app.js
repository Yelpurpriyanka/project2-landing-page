/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
/**
 * Define Global Variables
 * 
*/
//initialize global variables
const navigationBar = document.querySelector('#navbar__list');
console.log(navigationBar);

const sectionID = document.querySelectorAll('section');
console.log("These are Section ID");
console.log(sectionID);

//Adding new list items to the navigationBar for each of the sections
const addListItems = (section) => {
    let listItem = document.createElement('li');
    listItem.innerHTML = `<a class="scrollLink" data-target="tab" href="#${section.id}">${section.id}</a>`;
    navigationBar.appendChild(listItem);
}
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

sectionID.forEach(section => {
    addListItems(section);
});

navigationBar.style.cssText = 'height:35px; display:flex; justify-content:space-around; margin-top:10px';

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

let menuNavLinks = document.getElementsByClassName('scrollLink');
console.log("This is a Menu");
console.log(menuNavLinks);

let menulist = document.getElementById('navbar__list');
console.log("Menulist found");
console.log(menulist);

let elementsLi = document.querySelectorAll('ul#navbar__list > li a');
console.log("elementsList ");
console.log(elementsLi);

//for loop for Adding active class to nav links

for (let i = 0; i < elementsLi.length; i++) {
    elementsLi[i].addEventListener('click', function (e) {
    
        if (e.currentTarget.classList.contains('active-class')) {
            
            console.log("Test");
        }
        else {
            e.currentTarget.classList.add('active-class');
        }
    });
}

//Add of Scroll down  function for active sections
sectionID.forEach((section) =>
    window.addEventListener("scroll", function () {
        if (section.getBoundingClientRect().top + 200 < window.innerHeight &&
            section.getBoundingClientRect().bottom + 200 > window.innerHeight) {
            section.classList.add("your-active-class");
            console.log(section.id);
        } else {
            section.classList.remove("your-active-class");
        }
    })
);
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 150) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})