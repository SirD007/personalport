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

      function handleSelectChange(event) {
      var selectElement = event.target;
      var value = selectElement.value;

      return value
  }

  function sendEmail(e){
    e.preventDefault();
   const formMsg = document.querySelector('.form_msg')
   const formName = document.querySelector('#form_name')
   const formEmail = document.querySelector('#form_mail')
   const formSubject = document.querySelector('#tell_more')

    Email.send({
      SecureToken : "f11b51bf-7ff6-49a3-9942-970c7337ea2e",
      To : 'thedavid2009@gmail.com',
      From : formEmail.value,
      Subject : "Um novo contato em seu site [David Morais]",
      Body : "Name: " + formName.value
      + "<br> Email: " + formEmail.value
      + "<br> Message: " + formSubject.value
  }).then(
    formMsg.innerHTML = "Message Sent Successfully"
  ).catch(
    formMsg.style.color="red",
    formMsg.innerHTML = "Something gone wrong"
  );
  }
