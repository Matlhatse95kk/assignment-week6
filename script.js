document.getElementById("clickMeBtn").addEventListener("click", function() {
  document.getElementById("message").textContent = "You clicked the button!";
});

document.addEventListener("keydown", function(event) {
  document.getElementById("keyOutput").textContent = event.key;
});

document.getElementById("doubleClickBtn").addEventListener("dblclick", function() {
  document.getElementById("doubleClickMsg").textContent = "You double-clicked the button!";
});

let pressTimer;
const longPressBtn = document.getElementById("longPressBtn");
longPressBtn.addEventListener("mousedown", function() {
  pressTimer = setTimeout(function() {
    document.getElementById("longPressMsg").textContent = "Long press detected!";
  }, 1000);
});
longPressBtn.addEventListener("mouseup", function() {
  clearTimeout(pressTimer);
});
longPressBtn.addEventListener("mouseleave", function() {
  clearTimeout(pressTimer);
});

document.getElementById("interactiveBtn").addEventListener("click", function() {
  const btn = this;
  if (btn.textContent === "Click to Change Me") {
    btn.textContent = "Changed!";
    btn.style.backgroundColor = "#FF5733";
    btn.style.color = "white";
  } else {
    btn.textContent = "Click to Change Me";
    btn.style.backgroundColor = "";
    btn.style.color = "";
  }
});

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentIndex = 0;
const slideImage = document.getElementById("slideImage");

document.getElementById("nextBtn").addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % images.length;
  slideImage.src = images[currentIndex];
});
document.getElementById("prevBtn").addEventListener("click", function() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  slideImage.src = images[currentIndex];
});

function openTab(tabId) {
  const tabs = document.getElementsByClassName("tabContent");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  document.getElementById(tabId).style.display = "block";
}

document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("formMessage");

  if (!email.includes("@")) {
    message.textContent = "Invalid email format.";
    message.style.color = "red";
  } else if (password.length < 8) {
    message.textContent = "Password must be at least 8 characters.";
    message.style.color = "red";
  } else {
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
  }
});
