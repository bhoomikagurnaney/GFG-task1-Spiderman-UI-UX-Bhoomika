document.addEventListener("DOMContentLoaded", function () 
{
  setupNavbarScroll();
  setupMobileMenu();
  setupBackToTop();
  setupScrollReveal();
  setupCountdown();
  setupCastCards();
  setupFaqAccordion();
});

function setupNavbarScroll() 
{
  var navbar = document.getElementById("navbar");
  if (!navbar) return;
  window.addEventListener("scroll", function () 
  {
    if (window.scrollY > 40) 
    {
      navbar.classList.add("scrolled");
    } 
    else 
    {
      navbar.classList.remove("scrolled");
    }
  });
}

function setupMobileMenu() 
{
  var toggleBtn = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  if (!toggleBtn || !navLinks) return;
  toggleBtn.addEventListener("click", function () 
  {
    toggleBtn.classList.toggle("open");
    navLinks.classList.toggle("open");
  });
  var links = navLinks.querySelectorAll("a");
  for (var i = 0; i < links.length; i++) 
  {
    links[i].addEventListener("click", function () 
    {
      toggleBtn.classList.remove("open");
      navLinks.classList.remove("open");
    });
  }
}

function setupBackToTop()
{
  var btn = document.getElementById("backToTop");
  if (!btn) return;
  window.addEventListener("scroll", function () 
  {
    if (window.scrollY > 500) 
    {
      btn.classList.add("show");
    } 
    else 
    {
      btn.classList.remove("show");
    }
  });

  btn.addEventListener("click", function () 
  {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupScrollReveal() 
{
  var revealItems = document.querySelectorAll(".reveal");
  if (revealItems.length === 0) return;

  // if a browser doesn't support IntersectionObserver, just show everything
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach(function (item) {
      item.classList.add("visible");
    });
    return;
  }
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // only animate once
        }
      });
    },
    { threshold: 0.15 }
  );
  revealItems.forEach(function (item) {
    observer.observe(item);
  });
}

function setupCountdown() 
{
  var daysEl = document.getElementById("cd-days");
  var hoursEl = document.getElementById("cd-hours");
  var minsEl = document.getElementById("cd-mins");
  var secsEl = document.getElementById("cd-secs");

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;
  var releaseDate = new Date("2026-08-31T09:00:00");

  function updateCountdown() 
  {
    var now = new Date();
    var diff = releaseDate - now;
    if (diff <= 0) 
    {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minsEl.textContent = "00";
      secsEl.textContent = "00";
      clearInterval(timerId);
      return;
    }
    var totalSeconds = Math.floor(diff / 1000);
    var days = Math.floor(totalSeconds / (60 * 60 * 24));
    var hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
    var mins = Math.floor((totalSeconds % 3600) / 60);
    var secs = totalSeconds % 60;
    daysEl.textContent = padNumber(days);
    hoursEl.textContent = padNumber(hours);
    minsEl.textContent = padNumber(mins);
    secsEl.textContent = padNumber(secs);
  }
  function padNumber(num) 
  {
    return num < 10 ? "0" + num : "" + num;
  }
  updateCountdown();
  var timerId = setInterval(updateCountdown, 1000);
}

function setupCastCards() {
  var castCards = document.querySelectorAll(".cast-card");
  if (castCards.length === 0) return;
  castCards.forEach(function (card) {
    card.addEventListener("click", function () {
      var name = card.getAttribute("data-name");
      var role = card.getAttribute("data-role");
      alert(name + " plays " + role + " in Spider-Man: Brand New Day.");
    });
  });
}

function setupFaqAccordion() {
  var faqItems = document.querySelectorAll(".faq-item");
  if (faqItems.length === 0) return;
  faqItems.forEach(function (item) {
    var question = item.querySelector(".faq-question");
    question.addEventListener("click", function () {
      var alreadyOpen = item.classList.contains("open");
      faqItems.forEach(function (otherItem) {
        otherItem.classList.remove("open");
      });
      if (!alreadyOpen) {
        item.classList.add("open");
      }
    });
  });
}