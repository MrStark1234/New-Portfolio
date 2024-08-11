function locoScroll() {
  //--------------------------------------------------------------From here // This is the js file code coming from searching in google "locomotive scrolltrigger codepen" 's first link--------------------------------------------------------------------------------------
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

  //--------------------------------------------------------------To here // This is the js file code coming from searching in google "locomotive scrolltrigger codepen" 's first link--------------------------------------------------------------------------------------
}

locoScroll();

function cursorEffect() {
  let cursor = document.querySelector("#cursor");
  let page1content = document.querySelector("#page1-content");
  page1content.addEventListener("mousemove", function (details) {
    gsap.to(cursor, {
      x: details.x,
      y: details.y,
    });
    //   cursor.style.left = details.x + "px";
    //   cursor.style.top = details.y + "px";
  });

  page1content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  page1content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorEffect();

function page2Animation() {
  gsap.from(".elem h1, .elem a, .elem img, .elem h2", {
    y: 100, // Reduced the initial Y offset
    opacity: 0,
    stagger: 0.6, // Reduced stagger for a smoother sequence
    duration: 3, // Reduced duration for a quicker animation
    ease: "power2.out", // Added easing for a smoother transition
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 70%", // Adjusted start point for earlier trigger
      end: "bottom bottom", // Extended the end point
      scrub: 1.5, // Adjusted scrub for smoother playback
    },
  });
}
page2Animation();

function page3Animation() {
  gsap.from("#page3-top h4, #page3-top h2, #page3-top p, #cv", {
    y: 100, // Reduced the initial Y offset
    opacity: 0,
    stagger: 0.3, // Reduced stagger for a smoother sequence
    duration: 3, // Reduced duration for a quicker animation
    ease: "power2.out", // Added easing for a smoother transition
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      start: "top 80%", // Adjusted start point for earlier trigger
      end: "bottom bottom", // Extended the end point
      scrub: 1.5, // Adjusted scrub for smoother playback
    },
  });
}
page3Animation();

function cursor2Effect() {
  let cursor2 = document.querySelector("#cursor2");
  let page = document.querySelector("#page4");
  page.addEventListener("mousemove", function (dets) {
    gsap.to(cursor2, {
      x: dets.x,
      y: dets.y,
    });
  });

  page.addEventListener("mouseenter", function () {
    gsap.to(cursor2, {
      opacity: 1,
      scale: 1,
    });
  });
  page.addEventListener("mouseleave", function () {
    gsap.to(cursor2, {
      opacity: 0,
      scale: 0,
    });
  });
}
cursor2Effect();

function gsaptimeline() {
  let tl = gsap.timeline();

  tl.from("#loader h3", {
    x: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
  });
  tl.to("#loader h3", {
    opacity: 0,
    x: -40,
    duration: 1,
    stagger: 0.3,
  });
  tl.to("#loader", {
    opacity: 0,
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from("#page1-content h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.3,
  });
}
gsaptimeline();

function sliderAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}
sliderAnimation();

function successMsg() {
  let btn = document.querySelector("#submit");
  let success = document.querySelector("#success");

  btn.addEventListener("click", function () {
    success.style.display = "block";
    setTimeout(() => {
      success.style.display = "none";
    }, 2000);
  });
}
successMsg();
const emailFunc = () => {
  emailjs.init("2HQS2TQS_MK9xWSjb");

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Get the form values
      const name = document.getElementById("name").value;
      const number = document.getElementById("number").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Use the send method to send the email
      emailjs
        .send("service_94wv35u", "template_1wych1j", {
          "user-name": name,
          "user-number": number,
          "user-email": email,
          message: message,
        })
        .then(
          function (response) {
            console.log("Sent successfully:", response);
            document.getElementById("name").value = "";
            document.getElementById("number").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
          },
          function (error) {
            console.log("Failed to send:", error);
          }
        );
    });
};
emailFunc();
function effect() {
  let recruit = document.querySelector("#recruit");

  recruit.addEventListener("mouseenter", function () {
    gsap.to(recruit, {
      scale: 0.9,
      opacity: 0.6,
    });
  });
  recruit.addEventListener("mouseleave", function () {
    gsap.to(recruit, {
      scale: 1,
      opacity: 1,
    });
  });

  let git = document.querySelector("#git");

  git.addEventListener("mouseenter", function () {
    gsap.to(git, {
      scale: 0.9,
      opacity: 0.6,
    });
  });
  git.addEventListener("mouseleave", function () {
    gsap.to(git, {
      scale: 1,
      opacity: 1,
    });
  });
  let link = document.querySelector("#link");

  link.addEventListener("mouseenter", function () {
    gsap.to(link, {
      scale: 0.9,
      opacity: 0.6,
    });
  });
  link.addEventListener("mouseleave", function () {
    gsap.to(link, {
      scale: 1,
      opacity: 1,
    });
  });
  let cv = document.querySelector(".resume");

  cv.addEventListener("mouseenter", function () {
    gsap.to(cv, {
      scale: 0.9,
      opacity: 0.6,
    });
  });
  cv.addEventListener("mouseleave", function () {
    gsap.to(cv, {
      scale: 1,
      opacity: 1,
    });
  });
  let submit = document.querySelector("#submit");

  submit.addEventListener("mouseenter", function () {
    gsap.to(submit, {
      scale: 0.9,
      opacity: 0.6,
    });
  });
  submit.addEventListener("mouseleave", function () {
    gsap.to(submit, {
      scale: 1,
      opacity: 1,
    });
  });
}
effect();
