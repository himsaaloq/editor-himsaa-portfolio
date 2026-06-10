<<<<<<< HEAD
const texts = [
"Transforming Ideas Into Scroll-Stopping Edits",
"Creative Video Editor",
"Instagram Reel Specialist",
"Future Professional Editor"
];

let index = 0;
let char = 0;

const typing = document.getElementById("typing");

function typeEffect(){

if(char < texts[index].length){

typing.textContent += texts[index].charAt(char);
char++;

setTimeout(typeEffect,80);

}else{

setTimeout(eraseEffect,1500);

}

}

function eraseEffect(){

if(char > 0){

typing.textContent =
texts[index].substring(0,char-1);

char--;

setTimeout(eraseEffect,40);

}else{

index++;

if(index >= texts.length){
index = 0;
}

setTimeout(typeEffect,300);

}

}

document.addEventListener("DOMContentLoaded",()=>{
typeEffect();
});

/* COUNTERS */

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(updateCounter,20);

}else{

counter.innerText=target;

}

};

updateCounter();

});

/* SCROLL REVEAL */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const hiddenElements=document.querySelectorAll(".hidden");

hiddenElements.forEach((el)=>observer.observe(el));

/* LOADER */

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1800);

});
/* HAMBURGER MENU */

const menuToggle =
document.querySelector(".menu-toggle");

const navMenu =
document.querySelector("nav ul");

menuToggle.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});
document.addEventListener("click",(e)=>{

if(
!menuToggle.contains(e.target)
&&
!navMenu.contains(e.target)
){

navMenu.classList.remove("active");

}

});

const navLinks =
document.querySelectorAll("nav ul li a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("active");

});

});
/* EMAILJS */

emailjs.init("jNu1gA6vQ3NCCi6eD");

const form =
document.getElementById("contact-form");

const status =
document.getElementById("form-status");

form.addEventListener("submit",function(e){

e.preventDefault();

status.innerHTML = "Sending...";

emailjs.sendForm(
"service_uy0sp56",
"template_awgarjk",
this
)

.then(()=>{

status.innerHTML =
"✅ Message sent successfully!";

form.reset();

})

.catch((error)=>{

status.innerHTML =
"❌ Failed to send message.";

console.log(error);

});

=======
const texts = [
"Transforming Ideas Into Scroll-Stopping Edits",
"Creative Video Editor",
"Instagram Reel Specialist",
"Future Professional Editor"
];

let index = 0;
let char = 0;

const typing = document.getElementById("typing");

function typeEffect(){

if(char < texts[index].length){

typing.textContent += texts[index].charAt(char);
char++;

setTimeout(typeEffect,80);

}else{

setTimeout(eraseEffect,1500);

}

}

function eraseEffect(){

if(char > 0){

typing.textContent =
texts[index].substring(0,char-1);

char--;

setTimeout(eraseEffect,40);

}else{

index++;

if(index >= texts.length){
index = 0;
}

setTimeout(typeEffect,300);

}

}

document.addEventListener("DOMContentLoaded",()=>{
typeEffect();
});

/* COUNTERS */

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(updateCounter,20);

}else{

counter.innerText=target;

}

};

updateCounter();

});

/* SCROLL REVEAL */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const hiddenElements=document.querySelectorAll(".hidden");

hiddenElements.forEach((el)=>observer.observe(el));

/* LOADER */

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1800);

>>>>>>> 09976dce188df61435338b38ea7a1507ad6df076
});