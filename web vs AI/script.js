// Growvia Digital demo interactions
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const contactForm = document.getElementById("contactForm");
const formNotice = document.getElementById("formNotice");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) return;

  const data = new FormData(contactForm);
  const name = data.get("name").trim();
  const business = data.get("business").trim() || "Not provided";
  const contact = data.get("email").trim();
  const service = data.get("service");
  const message = data.get("message").trim() || "No extra details provided.";

  // Replace this placeholder with your real business email before publishing.
  const agencyEmail = "hello@example.com";
  const subject = encodeURIComponent(New website enquiry from ${name});
  const body = encodeURIComponent(
    Name: ${name}\nBusiness: ${business}\nEmail or phone: ${contact}\nService: ${service}\nGoal: ${message}
  );

  formNotice.textContent = "Opening your email app with the enquiry details. Replace hello@example.com in script.js with your real business email.";
  window.location.href = mailto:${agencyEmail}?subject=${subject}&body=${body};
});

// Replace 91XXXXXXXXXX with your WhatsApp number including country code, digits only.
const whatsappNumber = "91XXXXXXXXXX";
const whatsappLink = document.getElementById("whatsappLink");
whatsappLink.href = https://wa.me/${whatsappNumber};
whatsappLink.addEventListener("click", (event) => {
  if (whatsappNumber.includes("X")) {
    event.preventDefault();
    alert("Please open script.js and replace 91XXXXXXXXXX with your WhatsApp number, including country code.");
  }
});