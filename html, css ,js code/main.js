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

const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

// Function to open the modal
var portfolioModal = function (modalClick) {
    portfolioModals[modalClick].classList.add("active");
};

// Add event listeners to open modals
imgCards.forEach((imgCard, ic) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(ic);
    });
});


// Add event listeners to close modals (via clicking outside)
portfolioModals.forEach((modal, i) => {
    modal.addEventListener("click", (e) => {
        // Check if the click target is the modal itself, not the modal body
        if (e.target === modal) {
            portfolioModals[i].classList.remove("active");
        }
    });
});
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