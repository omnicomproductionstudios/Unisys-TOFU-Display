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
  tl.set(".lights", { willChange: "opacity, filter, transform" });


  tl.from(split.words, 0.5, { y: 15, opacity: 0, filter: "blur(7px)", stagger: 0.2, ease: "power2.out" }, 0.5)
  .add(lightTurnOn(".lights-4", 0.82), 0.55)
  .add(lightTurnOn(".lights-1", 0.72), 0.82)
  .add(lightTurnOn(".lights-8", 0.9), 1.02)
  .add(lightTurnOn(".lights-6", 0.76), 1.28)
  .add(lightTurnOn(".lights-3", 0.88), 1.53)
  .add(lightTurnOn(".lights-10", 0.78), 1.8)
  .add(lightTurnOn(".lights-2", 0.84), 2.04)
  .add(lightTurnOn(".lights-7", 0.8), 2.27)
  .add(lightTurnOn(".lights-5", 0.86), 2.54)
  .add(lightTurnOn(".lights-9", 0.74), 2.82);
}

function lightTurnOn(target, finalOpacity) {
  const pulseOpacity = Math.min(finalOpacity + 0.16, 1);

  return gsap.timeline()
    .to(target, {
      opacity: pulseOpacity,
      filter: "brightness(1.55) saturate(1.2) blur(0.4px)",
      scale: 1,
      duration: 0.18,
      ease: "power2.out",
    })
    .to(target, {
      opacity: finalOpacity * 0.72,
      filter: "brightness(0.92) saturate(1.05) blur(0.9px)",
      duration: 0.12,
      ease: "power1.inOut",
    })
    .to(target, {
      opacity: pulseOpacity * 0.94,
      filter: "brightness(1.28) saturate(1.12) blur(0.2px)",
      duration: 0.1,
      ease: "power1.out",
    })
    .to(target, {
      opacity: finalOpacity,
      filter: "brightness(1.02) saturate(1) blur(0px)",
      duration: 0.28,
      ease: "power2.out",
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
