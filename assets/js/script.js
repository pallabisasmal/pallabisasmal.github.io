
  const navLinks = document.querySelectorAll(".sidebar .primary-menu a");
  const sections = document.querySelectorAll("section");
  const hamburger = document.getElementById("hamburger");
  const menu = document.querySelector(".nav-links");

  function activateNavLink() {
    let index = sections.length;

    // Find the section currently in view
    while (--index && window.scrollY - 50 < sections[index].offsetTop) {}

    // Remove 'active' from all links and add to the current one
    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  }

  // Listen for the scroll event
  window.addEventListener("scroll", activateNavLink);

  // Ensure the first nav link is active on page load
  document.addEventListener("DOMContentLoaded", activateNavLink);



    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });


  


   