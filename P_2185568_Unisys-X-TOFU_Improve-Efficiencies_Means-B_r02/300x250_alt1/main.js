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
const dots = gsap.utils.toArray(".cls-2");
function animate() {
  tl.set(["#main_content"], { autoAlpha: 1, force3D: true });
  // tl.set(".lights", { willChange: "clip-path" });
  gsap.set(dots, { opacity: 0 });

  tl.from(split.words, 0.5, { y: 15, opacity: 0, filter: "blur(7px)", stagger: 0.2, ease: "power2.out" }, 0.5)
  // .fromTo(".lights", { clipPath: "inset(100% 0 0 0)" },{ clipPath: "inset(0% 0 0 0)", duration: 2, ease: "power2.out" }, 0.5);
  

  
  gsap.utils.shuffle(dots);

// one by one show
dots.forEach((dot, i) => {
  gsap.to(dot, {
    delay: i * 0.005,
    keyframes: [
      { opacity: 0.2, duration: 0.03 },
      { opacity: 1, duration: 0.05 },
      { opacity: 0.3, duration: 0.03 },
      { opacity: 1, duration: 0.08 }
    ],
    ease: "power1.out"
  });
});

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
