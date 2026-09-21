const drawer = document.getElementById("drawer");
const menuButton = document.getElementById("menuButton");
const drawerClose = document.getElementById("drawerClose");
const jobButton = document.getElementById("jobButton");

menuButton.addEventListener("click", () => {
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
});

drawerClose.addEventListener("click", () => {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
});

document.querySelectorAll(".drawer a").forEach(link => {
  link.addEventListener("click", () => {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
  });
});

jobButton.addEventListener("click", () => {
  document.getElementById("jobsSection").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".switch").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".switch").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
  });
});

document.querySelectorAll(".lang").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".lang").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
  });
});
