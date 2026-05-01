var tl;
var startTime;
var paths;

function init() {
  startTime = new Date();
  paths = document.querySelectorAll(".cls-1");
  tl = gsap.timeline({ onComplete: logDuration });
  animate();
  setRollover();
}

const split = new SplitText(".copy", { type: "words" });

function animate() {
  tl.set("#main_content", { autoAlpha: 1 });

  tl.from(split.words, {
    y: 15,
    opacity: 0,
    stagger: 0.15,
    duration: 0.4,
    ease: "power2.out"
  }, 0.3);

  animateSvgBuild();
}

function animateSvgBuild() {
  if (!paths.length) return;

  const orderedPaths = Array.from(paths).sort(function (a, b) {
    return a.getBBox().y - b.getBBox().y;
  });

  orderedPaths.forEach(function (path) {
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      opacity: 0.4
    });
  });

  tl.to(orderedPaths, {
    strokeDashoffset: 0,
    duration: 0.11,
    stagger: {
      each: 0.001
    },
    ease: "none",
  }, 1);
}

function setRollover() {
  const exit = document.getElementById("default_exit");
  exit.addEventListener("mouseover", defaultOver);
  exit.addEventListener("mouseout", defaultOut);
}

function defaultOver() {
  gsap.to("#cta", { scale: 1.1, duration: 0.15 });
}

function defaultOut() {
  gsap.to("#cta", { scale: 1, duration: 0.15 });
}

function logDuration() {
  console.log("Duration:", ((new Date() - startTime) / 1000).toFixed(2));
}
