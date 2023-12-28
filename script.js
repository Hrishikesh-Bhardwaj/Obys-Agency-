var tl = gsap.timeline();
tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});
tl.from("#line1-part1", {
  opacity: 0,
  onStart: function () {
    var h5Timer = document.querySelector("#line1-part1 h5");
    var count = 0;
    setInterval(function () {
      if (count < 100) {
        h5Timer.innerHTML = count++;
      } else {
        h5Timer.innerHTML = count;
      }
    }, 33);
  },
});
tl.to(".line h2", {
  animationName: "anime",
  opacity: 1,
});
tl.to("#loader", {
  opacity: 0,
  duration: 0.2,
  delay: 4,
});

tl.from("#page1", {
  delay: 0.2,
  duration: 0.5,
  y: 1400,
  opacity: 0,
  ease: Power4,
});
tl.to("#loader", {
  display: "none",
});