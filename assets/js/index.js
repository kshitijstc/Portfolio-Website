/* ------ DARK MODE ----------*/

//selectors
const themeToggleBtn=document.querySelector('.theme-toggle');

//state
const theme = localStorage.getItem('theme');

//on mount
if(theme){
  document.getElementById('dark-mode-label').innerHTML='Light Mode';
  document.body.classList.add(theme);

}

// handlers
handleThemeToggle = () => {
  document.body.classList.toggle('dark-mode');
  // It was not staying/remembering once refreshed so we have to use browsers local storage which can be found in inspect->application
  if(document.body.classList.contains('dark-mode')){
    document.getElementById('dark-mode-label').innerHTML='Light Mode';
    localStorage.setItem('theme','dark-mode');
  }else{
    document.getElementById('dark-mode-label').innerHTML='Dark Mode';
    localStorage.removeItem('theme');
    
  }
};

// event
themeToggleBtn.addEventListener('click',handleThemeToggle);      






/* ----- Scroll Bar ---------*/ 
window.onscroll = function() {myFunction()};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
 let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



// ------- Progress Indicator  -------




 
/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    let menuBtn = document.getElementById("myNavMenu");
    let closebtn = document.querySelector("nav-menu");
    let navLinks = document.querySelector(".nav-menu");

    if(menuBtn.className === "nav-menu"){
      
      menuBtn.className += " responsive";
      closebtn.addEventListener("click",()=>{
        navLinks.style.left ="-100%";
      })
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }

/* ----  EXPERIENCE COUNTER -------- */

  
  const counter = document.querySelector(".counter");
  const container = document.querySelector(".experience-container");

  let activated =false;

  window.addEventListener("scroll", () => {
    
    if(pageYOffset>container.offsetTop - container.offsetHeight - 120  && activated ===false){
      counter.innerHTML = 0 ;
      let count=0;

      function updateCount(){
        const target = parseInt(counter.dataset.count);
        if(count<target){
          count++;
          counter.innerHTML = count;
          setTimeout(updateCount,7);
        }else{
          counter.innerHTML=target;
        }
      }
      updateCount();
      activated =true;
    }
    // else if(pageYOffset<container.offsetTop - container.offsetHeight -300 || pageYOffset === 0 && activated===true){
    //   counter.innerHTML=0;
    //   activated = false;
    // }
  });

  // let valueDisplays=document.querySelector(".counter");
  // let interval=1000;
  
  // let startValue=0;
  // let endValue=parseInt(valueDisplays.getAttribute("data-count"));
  
  // let duration = Math.floor(interval/endValue);
  // let count = setInterval(function(){
  //   startValue += 1;
  //   valueDisplays.textContent = startValue;
  //   if(startValue == endValue){
  //     clearInterval(count);
  //   }
  // },duration);






/* ----- TYPING EFFECT ----- */
//  var typingEffect = new Typed(".typedText",{
//     strings : ["Designer","Youtuber","Developer"],
//     loop : true,
//     typeSpeed : 100, 
//     backSpeed : 80,
//     backDelay : 2000
//  })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1500,
        // reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* -- EXPERIENCE BOX --*/
sr.reveal('.experience-box',{interval: 100})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 100})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  // reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  // reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)



