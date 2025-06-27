    window.addEventListener("scroll" ,function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})   

//services 
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");

}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    })
});
serviceModals.forEach((modalView) => {
    modalView.addEventListener("click", (e) => {
        if (e.target === modalView) {
            modalView.classList.remove("active");
        }
    });
});

//portfolio section




 //client swiper action
 var swiper = new Swiper(".clinet-Swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

 const scrollToTopbtn = document.querySelector(".scrollToTop-btn")

 window.addEventListener('scroll', function(){
    scrollToTopbtn.classList.toggle('active' , window.scrollY > 500)
 })

 scrollToTopbtn.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
 })
 window.addEventListener('scroll', ()=>{
    const sections = document.querySelectorAll('section')
    const scrollY = window.pageYOffset

    sections.forEach(current  => {
        let sectionHeight = current.offsetHeight
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute('id')


        if(scrollY> sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-items a[href *=' + id + ']').classList.add('active');

        }
        else{
            document.querySelector('.nav-items a[href*=' + id + ']').classList.remove('active')
        }
    })

 })


//dark/light theme
const themebtn = document.querySelector(".theme-btn")

themebtn.addEventListener("click", () =>{
    document.body.classList.toggle('dark-theme')
    themebtn.classList.toggle('sun')

    localStorage.setItem("saved-theme" , getCurrentTheme());
    localStorage.setItem('saved-icon', getCurrentIcon())
})

const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? "dark" : "light";
const getCurrentIcon = () => themebtn.classList.contains("sun") ? 'sun' : 'moon';

const savedTheme = localStorage.getItem("saved-theme")
const savedIcons = localStorage.getItem("saved-icon")

if(savedTheme){
    document.body.classList[savedTheme === 'dark' ? 'add' : 'remove']('dark-theme');
    themebtn.classList[savedIcons === 'sun' ? 'add' : 'remove']('sun')
}
//navigation 
const menuBtn = document.querySelector(".nav-menu-btn")
const closeBtn = document.querySelector(".nav-close-btn")
const  navigation = document.querySelector('.navigation')
const navItems = document.querySelectorAll('.nav-items a')

menuBtn.addEventListener('click', function(){
    navigation.classList.add('active');
    console.log("clicked");
    
   
    
})
closeBtn.addEventListener('click', function(){
    navigation.classList.remove('active');
   
    
})

//remove navigartion when a nav-item is clicked using eventlisners
navItems.forEach((navItem) => {
    navItem.addEventListener('click', () => {
        navigation.classList.remove('active');
    })
}) 
ScrollReveal({ 
    reset: true,
    distance:'60px',
    duration: 2500,
    delay: 100

});

ScrollReveal().reveal('.home , .info h2 , .section-title-01 ,.section-title-02' , {delay : 500 ,origin :'left'});
ScrollReveal().reveal('.home , .info h2 ,.home .info p ,.about-info .btn', {delay : 600 ,origin :'right'});
ScrollReveal().reveal('.home , .info  , .btn ', {delay : 700 ,origin :'bottom'});
ScrollReveal().reveal('.media-icons  , .contact-left li ,.contact-form ', {delay : 500 ,origin :'left', interval:200});
ScrollReveal().reveal('.home-img  , about-img', {delay : 500 ,origin :'bottom'});
ScrollReveal().reveal('.about .description , .copy-right', {delay : 500 ,origin :'right'});
ScrollReveal().reveal('.about .professional-list li ', {delay : 500 ,origin :'right', interval:200});
ScrollReveal().reveal('skill-description ,.services-description ,.contact-card ,.contact-left h2', {delay : 700 ,origin :'left', interval:100});
ScrollReveal().reveal('.experience-card, .service-card ,.education , .portfolio .img-card ,.get-in-touch', {delay : 700 ,origin :'bottom', interval:200});
ScrollReveal().reveal('footer .group ', {delay : 700 ,origin :'top', interval:200});




sentMsg = document.getElementById('sentMsg')
function sendEmail(e) {
    e.preventDefault(); // prevent form reload
    let parms = {
        from_name: document.getElementById("fullName").value,
        email: document.getElementById("email_id").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }

    emailjs.send('service_jwww2tr', 'template_eojs6ed', parms)
    .then((response) => {
        console.log('message sent', response.status)
        sentMsg.style.display = 'block'
    }, (error) => {
        MsgNtSent.style.display = 'block'
        console.log('FAILED...', error);
    });
}


//text typing effect
const texts = [
    "Welcome to my portfolio.",
    "Front-end Devloper  ",
    "I love building cool websites.",
    "Let's create something amazing together!"
  ];

  let currentText = 0;
  let charIndex = 0;
  let isDeleting =  false;
  const element = document.getElementById('typewriter')

  function typeEffect(){
    const fullText = texts[currentText]
    if(isDeleting){
        element.textContent = fullText.substring(0, charIndex--)
    }
    else{
        element.textContent = fullText.substring(0, charIndex++)
    }

    if (!isDeleting && charIndex === fullText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentText = (currentText + 1) % texts.length;
        setTimeout(typeEffect, 500); // Pause before typing new sentence
      } else {
        const speed = isDeleting ? 50 : 100;
        setTimeout(typeEffect, speed);
      }
  }

  document.addEventListener("DOMContentLoaded", () => {
    typeEffect()
  });
  