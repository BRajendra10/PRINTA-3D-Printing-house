const info_eliment = document.querySelectorAll(".info-eliment");
const header_section_eli = document.querySelectorAll(".header-section-el");

gsap.registerPlugin(ScrollTrigger);

info_eliment.forEach((el, i) => {
    gsap.fromTo(el,
        { x: -250 },
        { x: 0, duration: i + 1, ease: "back.out()" }
    )
})

header_section_eli.forEach((el, i) => {
    gsap.to(el, {
        height: "5rem",
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none play none"
        }
    });
})
