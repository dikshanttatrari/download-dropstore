const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

var mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
  var loadTl = gsap.timeline();

  loadTl.to("#name1", {
    top: "25%",
    left: "15%",
    duration: 1.5,
    ease: "power2.out",
  });

  loadTl.to(
    "#name2",
    {
      top: "45%",
      left: "10%",
      duration: 1.5,
      ease: "power2.out",
    },
    "-=1.5"
  );
});

mm.add("(max-width: 480px)", () => {
  var loadTlMobile = gsap.timeline();
  loadTlMobile.to(
    "#name1",
    {
      top: "42%",
      left: "10%",
      duration: 1.5,
      ease: "power2.out",
    },
    ""
  );

  loadTlMobile.to(
    "#name2",
    {
      top: "49%",
      left: "-2%",
      duration: 1.5,
      ease: "power2.out",
    },
    "-=1.5"
  );
});

// Scroll animations
ScrollTrigger.matchMedia({
  "(min-width: 768px)": function () {
    var scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,
      },
    });

    scrollTl.to(
      "#name1",
      {
        top: "25%",
        left: "-20%",
        duration: 2.5,
        scale: 1.5,
      },
      "text"
    );

    scrollTl.to(
      "#name2",
      {
        top: "45%",
        left: "40%",
        duration: 2.5,
        scale: 1.5,
      },
      "text"
    );

    scrollTl.to(
      "#ss1",
      {
        opacity: 0,
        left: "20%",
        rotate: "190deg",
        top: "110%",
        duration: 5,
        ease: "power2.out",
      },
      "text"
    );

    scrollTl.from(
      "#ss2",
      {
        opacity: 0,
        left: "50%",
        rotate: "-90deg",
        top: "50%",
        duration: 5,
        ease: "power2.in",
      },
      "ssFadeOut"
    );

    scrollTl.from(
      "#heading1",
      {
        opacity: 0,
        y: 50,
        duration: 2.5,
        ease: "power2.out",
      },
      "contentAnimation"
    );

    scrollTl.from(
      "#para1",
      {
        opacity: 0,
        y: 50,
        duration: 2.5,
        ease: "power2.out",
      },
      "contentAnimation+=0.3"
    );

    scrollTl.from(
      "#download-box",
      {
        opacity: 0,
        scale: 0.8,
        duration: 2.5,
        ease: "back.out(1.7)",
        stagger: 0.2,
      },
      "contentAnimation+=0.6"
    );
  },

  "(max-width: 480px)": function () {
    var scrollTlMobile = gsap.timeline({
      scrollTrigger: {
        trigger: ".two",
        start: "0% 100%",
        end: "50% 50%",
        scrub: true,
      },
    });

    scrollTlMobile.to(
      "#name",
      {
        scale: 1.5,
        ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        duration: 2.5,
      },
      "text"
    );

    scrollTlMobile.to(
      "#name1",
      {
        top: "42%",
        left: "-30%",
        duration: 2.5,
        scale: 1.5,
        ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
      "text"
    );

    scrollTlMobile.to(
      "#name2",
      {
        top: "49%",
        left: "30%",
        duration: 2.5,
        scale: 1.5,
        ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
      "text"
    );

    scrollTlMobile.to(
      "#ss1",
      {
        opacity: 0,
        left: "10%",
        rotate: "90deg",
        top: "50%",
        duration: 5,
        ease: "power2.out",
      },
      "text"
    );

    scrollTlMobile.from(
      "#ss2",
      {
        opacity: 0,
        left: "40%",
        rotate: "-90deg",
        top: "60%",
        duration: 5,
        ease: "power2.in",
      },
      "ssFadeOut"
    );

    scrollTlMobile.from(
      "#heading1",
      {
        opacity: 0,
        y: 30,
        duration: 2.5,
        ease: "power2.out",
      },
      "contentAnimation"
    );

    scrollTlMobile.from(
      "#para1",
      {
        opacity: 0,
        y: 30,
        duration: 2.5,
        ease: "power2.out",
      },
      "contentAnimation+=0.3"
    );

    scrollTlMobile.from(
      "#download-box",
      {
        opacity: 0,
        scale: 0.9,
        duration: 2.5,
        ease: "back.out(1.2)",
        stagger: 0.2,
      },
      "contentAnimation+=0.5"
    );
  },
});
