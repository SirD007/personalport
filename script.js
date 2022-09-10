function mobileMenu() {
    const menu = document.querySelector(".mobile_menu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }

    const btn = document.querySelector(".menu_btn");
    if (btn.innerHTML === "menu") {
      btn.innerHTML = "close";
    } else {
      btn.innerHTML = "menu";
    }

  }

  function sendEmail(){
   const formMsg = document.querySelector('.form_msg')
   const formName = document.querySelector('#form_name').value
   const formEmail = document.querySelector('#form_mail').value
   const formSubject = document.querySelector('#tell_more').value

    Email.send({
      SecureToken: "8ebdf653-8eaa-4d60-b7a7-e13fdbbdb324",
      To : 'thedavid2009@gmail.com',
      From : formEmail,
      Subject : "Um novo contato em seu site [David Morais]",
      Body : "Name: " + formName
      + "<br> Email: " + formEmail
      + "<br> Message: " + formSubject
  }).then(
    formMsg.innerHTML = "Message Sent Successfully"
  ).catch(
    formMsg.style.color="red",
    formMsg.innerHTML = "Something gone wrong"
  );
  }
