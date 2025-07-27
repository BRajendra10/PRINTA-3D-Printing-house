const info_eliment = document.querySelectorAll(".info-eliment");
const main_sec_info = document.querySelectorAll(".main-sec-info");
const header_section_eli = document.querySelectorAll(".header-section-el");

function slideFromLeft(lists) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                gsap.from(entry.target,
                    { x: -300, duration: 1.5, ease: "back.out()" }
                )

                observer.unobserve(entry.target);
            }
        })
    })

    lists.forEach((el, i) => {
        observer.observe(el);
    })
}

slideFromLeft(info_eliment);
slideFromLeft(main_sec_info);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            gsap.to(entry.target, {
                height: "3.3rem",
                duration: 0.7,
                ease: "power2.out",
            });
        }
    })
})

header_section_eli.forEach((el) => {
    observer.observe(el);
})