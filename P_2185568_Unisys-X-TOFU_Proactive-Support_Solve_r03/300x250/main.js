var tl;
var tl2;
var startTime;


function init() {
  startTime = new Date();
  tl = gsap.timeline({ onComplete: logDuration });
  animate();
  setRollover();
}

const split = new SplitText(".copy", { type: "words" });

function animate() {
  tl.set(["#main_content"], { autoAlpha: 1, force3D: true });
  tl.set(".cloud", { force3D: true });


  tl.from(split.words, 0.5, { y: 15, opacity: 0, filter: "blur(7px)", stagger: 0.2, ease: "power2.out" }, 0.5)
  .to(".cloud", 15, { x:37, ease: "none" }, -2)
}

function setRollover() {
  document
    .getElementById("default_exit")
    .addEventListener("mouseover", defaultOver, false);
  document
    .getElementById("default_exit")
    .addEventListener("mouseout", defaultOut, false);
}

function defaultOver() {
  gsap.to("#cta", 0.15, { scale: 1.1, ease: Power1.easeInOut });
}

function defaultOut() {
  gsap.to("#cta", 0.15, { scale: 1, ease: Power1.easeInOut });
}


function logDuration() {
  let endTime = new Date();
  console.log(
    "Animation duration: " +
      ((endTime - startTime) / 1000).toFixed(2) +
      " seconds",
  );
}
