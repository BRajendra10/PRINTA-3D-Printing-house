const header_info = document.querySelector(".header-info");

function observerFun(eliment, className) {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
            }
        });
    });

    observer.observe(eliment);
}

observerFun(header_info, "translateX");