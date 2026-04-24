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



  tl.from(split.words, 0.5, { y: 15, opacity: 0, filter: "blur(7px)", stagger: 0.2, ease: "power2.out" }, 0.5);
  // tl.set([logo, img, bg1, bg2, bg3, bg4, copy1, copy2, copy3, copy4, cta], {force3D: true});
  // tl.set([copy2, copy3, copy4], { xPercent: -120 });
  // tl.set([bg4], { y: 260 });

  // tl.addLabel("frame1", 1)
  //   .to(logo, 1, { width: 121, x: 34.5, y: 3, ease: "power1.inOut" }, "frame1")
  //   .to(img, 1, { width: 275, height: 157, x: 13, y: 11, ease: "power1.inOut" }, "frame1")
  //   .to(bg1, 1, { width: 306, x: -4, y: -42, ease: "power1.inOut" }, "frame1")
  //   .from(copy1, 0.5, { xPercent: -120, ease: "power1.inOut" }, "frame1+=1")
  //   .to(cta, 0.5, { autoAlpha:1, ease: "power1.inOut" }, "frame1+=1.7")
  
  // .addLabel("frame2", "frame1+=3")
  //   .to([bg1, copy1], 0.5, {autoAlpha:0, ease: "power1.inOut" }, "frame2")
  //   .to(bg2, 0.5, {autoAlpha:1, ease: "power1.inOut" }, "frame2")
  //   .to(copy2, 0.5, { xPercent: 0, ease: "power1.inOut" }, "frame2+=0.5")

  // .addLabel("frame3", "frame2+=3")
  //   .to([bg2, copy2], 0.5, {autoAlpha:0, ease: "power1.inOut" }, "frame3")
  //   .to(bg3, 0.5, {autoAlpha:1, ease: "power1.inOut" }, "frame3")
  //   .to(copy3, 0.5, { xPercent: 0, ease: "power1.inOut" }, "frame3+=0.5")

  // .addLabel("frame4", "frame3+=3")
  //   .to([copy3, logo], 0.5, {autoAlpha:0, ease: "power1.inOut" }, "frame4")
  //   .to(bg4, 0.5, { y: 0,ease: "power1.inOut" }, "frame4")
  //   .to(copy4, 0.5, { xPercent: 0, ease: "power1.inOut" }, "frame4+=0.5")
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
