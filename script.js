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