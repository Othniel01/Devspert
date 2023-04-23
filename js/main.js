const navbar = document.getElementById("navigation");

let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");

    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)";
    }
    setTimeout(function () {
      navbar.style.transform = "translateY(0)";

      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add("top");
    scrolled = false;
  }
};

const sliderEl = document.querySelector(".slider-container");
const imgsEl = document.querySelectorAll(".box");
const servicebox1El = document.querySelector(".service-box1");
const servicebox2El = document.querySelector(".service-box2");
const servicebox3El = document.querySelector(".service-box3");
const servicebox4El = document.querySelector(".service-box4");
const deskEl = document.querySelector(".desk");
const webEl = document.querySelector(".web");
const mobileEl = document.querySelector(".mobile");
const dataEl = document.querySelector(".data");
const serviceContainerbox1El = document.querySelector(
  ".service-container4-box1"
);
const serviceContainerbox2El = document.querySelector(
  ".service-container4-box2"
);
const serviceContainerbox3El = document.querySelector(
  ".service-container4-box3"
);
const serviceContainerbox4El = document.querySelector(
  ".service-container4-box4"
);

const ideaEl = document.querySelector(".idea");
const innovationEl = document.querySelector(".innovation ");
const softwareEl = document.querySelector(".software");
const projectEl = document.querySelector(".project");
const mediaQuery2 = window.matchMedia("(max-width: 1200px)");
const mediaQuery3 = window.matchMedia("(max-width: 700px)");

let currentImg = 1;

let timeout;

updateImg();

function updateImg() {
  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }

  sliderEl.style.transform = `translateY(-${(currentImg - 1) * 92}px)`;

  if (mediaQuery2.matches) {
    sliderEl.style.transform = `translateY(-${(currentImg - 1) * 74}px)`;
  }

  if (mediaQuery3.matches) {
    sliderEl.style.transform = `translateY(-${(currentImg - 1) * 50}px)`;
  }

  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}

// Navbar scroll

$("#navigation a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

$("#Sectionc a").on("click", function (d) {
  if (this.hash !== "") {
    d.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

servicebox1El.addEventListener("click", showDesk);
servicebox2El.addEventListener("click", showWeb);
servicebox3El.addEventListener("click", showMobile);
servicebox4El.addEventListener("click", showData);

function showDesk() {
  servicebox1El.classList.add("active");
  servicebox2El.classList.remove("active");
  servicebox3El.classList.remove("active");
  servicebox4El.classList.remove("active");
  deskEl.classList.remove("none");
  webEl.classList.add("none");
  mobileEl.classList.add("none");
  dataEl.classList.add("none");
}

function showWeb() {
  servicebox1El.classList.remove("active");
  servicebox2El.classList.add("active");
  servicebox3El.classList.remove("active");
  servicebox4El.classList.remove("active");
  deskEl.classList.add("none");
  webEl.classList.remove("none");
  mobileEl.classList.add("none");
  dataEl.classList.add("none");
}

function showMobile() {
  servicebox1El.classList.remove("active");
  servicebox2El.classList.remove("active");
  servicebox3El.classList.add("active");
  servicebox4El.classList.remove("active");
  deskEl.classList.add("none");
  webEl.classList.add("none");
  mobileEl.classList.remove("none");
  dataEl.classList.add("none");
}

function showData() {
  servicebox1El.classList.remove("active");
  servicebox2El.classList.remove("active");
  servicebox3El.classList.remove("active");
  servicebox4El.classList.add("active");
  deskEl.classList.add("none");
  webEl.classList.add("none");
  mobileEl.classList.add("none");
  dataEl.classList.remove("none");
}

serviceContainerbox1El.addEventListener("click", open1);
serviceContainerbox2El.addEventListener("click", open2);
serviceContainerbox3El.addEventListener("click", open3);
serviceContainerbox4El.addEventListener("click", open4);

function open1() {
  serviceContainerbox1El.classList.add("archodian-active");
  serviceContainerbox2El.classList.remove("archodian-active");
  serviceContainerbox3El.classList.remove("archodian-active");
  serviceContainerbox4El.classList.remove("archodian-active");
  ideaEl.classList.remove("none");
  innovationEl.classList.add("none");
  softwareEl.classList.add("none");
  projectEl.classList.add("none");
}

function open2() {
  serviceContainerbox1El.classList.remove("archodian-active");
  serviceContainerbox2El.classList.add("archodian-active");
  serviceContainerbox3El.classList.remove("archodian-active");
  serviceContainerbox4El.classList.remove("archodian-active");
  ideaEl.classList.add("none");
  innovationEl.classList.remove("none");
  softwareEl.classList.add("none");
  projectEl.classList.add("none");
}

function open3() {
  serviceContainerbox1El.classList.remove("archodian-active");
  serviceContainerbox2El.classList.remove("archodian-active");
  serviceContainerbox3El.classList.add("archodian-active");
  serviceContainerbox4El.classList.remove("archodian-active");
  ideaEl.classList.add("none");
  innovationEl.classList.add("none");
  softwareEl.classList.remove("none");
  projectEl.classList.add("none");
}

function open4() {
  serviceContainerbox1El.classList.remove("archodian-active");
  serviceContainerbox2El.classList.remove("archodian-active");
  serviceContainerbox3El.classList.remove("archodian-active");
  serviceContainerbox4El.classList.add("archodian-active");
  ideaEl.classList.add("none");
  innovationEl.classList.add("none");
  softwareEl.classList.add("none");
  projectEl.classList.remove("none");
}

const hamburgerEl = document.querySelector(".hamburger");
const menuEl = document.querySelector(".menu");

hamburgerEl.addEventListener("click", () => {
  hamburgerEl.classList.toggle("is-active");
  menuEl.classList.toggle("alive");
});
