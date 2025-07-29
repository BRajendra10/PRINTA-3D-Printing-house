const info_eliment = document.querySelectorAll(".info-eliment");
const main_sec_info = document.querySelectorAll(".main-sec-info");
const header_section_eli = document.querySelectorAll(".header-section-el");
const section_badge = document.querySelectorAll("#section-badge");
const section_3_image = document.querySelectorAll("#section-3-image");

function slideFromLeft(lists) {
    const leftObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                gsap.from(entry.target,
                    { x: -300, duration: 0.7, ease: "power2.out()"}
                )

                leftObserver.unobserve(entry.target);
            }
        })
    })

    lists.forEach((el, i) => {
        leftObserver.observe(el);
    })
}

function slideFromTop(lists) {
    const topObserve = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                gsap.from(entry.target,
                    { top: "-5%", duration: 0.7 }
                )

                topObserve.unobserve(entry.target);
            }
        })
    })

    lists.forEach((el) => {
        topObserve.observe(el);
    })
}

slideFromLeft(info_eliment);
slideFromLeft(main_sec_info);

slideFromTop(section_badge);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            gsap.to(entry.target, {
                height: "3.3rem",
                stagger: 0.5,
                ease: "power2.out",
            });
        }
    })
})

header_section_eli.forEach((el) => {
    observer.observe(el);
})