// ====== Toggle Mobile Menu ======
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("bx-x");
});

// Close menu when a nav link is clicked
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
  });
});

// ====== Active Link on Scroll & Sticky Header ======
const sections = document.querySelectorAll("section");
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // highlight current section link
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        const href = link.getAttribute("href");
        if (href === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });

  // sticky header
  if (scrollY > 80) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// ====== Simple Contact Form Feedback ======
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    alert(`Thank you${name ? ", " + name : ""}! Your message has been received.`);
    contactForm.reset();
  });
}
