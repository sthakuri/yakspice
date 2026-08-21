// Footer year
document.querySelectorAll("#year").forEach((el) => (el.textContent = new Date().getFullYear()));

// Prayer-flag bunting is now static HTML (see index.html) for resilience without JS.
// The .flag class still gets its flutter animation and colors purely from CSS.

// Reveal-on-scroll
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in"));
}

// Menu page: highlight the active category link while scrolling
const catnav = document.getElementById("catnav");
if (catnav) {
  const links = Array.from(catnav.querySelectorAll("a"));
  const sections = links
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);
  const onScroll = () => {
    let idx = 0;
    sections.forEach((el, i) => {
      if (el.getBoundingClientRect().top < 140) idx = i;
    });
    links.forEach((l, i) => l.classList.toggle("active", i === idx));
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
