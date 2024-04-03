let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('nav');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    
    menu.classList.toggle('fa-bars');
    navbar.classList.toggle('active');
    navbar.classList.toggle('navbar');
    
}


window.onscroll = () =>{
    menu.classList.remove('fa fa-times');
    
    menu.classList.toggle('fa fa-bars');
}

var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay:{
        delay: 3000,
        desableOnInteraction: false,
    }
  });

  document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault(); 

      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var number = document.getElementById("number").value;
      var subject = document.getElementById("subject").value;
      var message = document.getElementById("message").value;

      var table = document.getElementById("messageTableBody");
      var row = table.insertRow();

      var nameCell = row.insertCell();
      var emailCell = row.insertCell();
      var numberCell = row.insertCell();
      var subjectCell = row.insertCell();
      var messageCell = row.insertCell();

      nameCell.innerHTML = name;
      emailCell.innerHTML = email;
      numberCell.innerHTML = number;
      subjectCell.innerHTML = subject;
      messageCell.innerHTML = message;

      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("number").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
    });

