
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

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

  const hamburger = document.getElementById("hamburger");
    const nav_Links = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

   