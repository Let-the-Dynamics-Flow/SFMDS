document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  const codeBtn = document.getElementById("code-btn");
  const codeNotice = document.getElementById("code-notice");
  if (codeBtn && codeNotice) {
    codeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      codeNotice.classList.remove("hidden");
    });
  }

  const copyBtn = document.querySelector(".copy-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const text = document.querySelector(".bibtex pre").innerText;
      navigator.clipboard.writeText(text).then(() => {
        const original = copyBtn.textContent;
        copyBtn.textContent = "Copied!";
        setTimeout(() => (copyBtn.textContent = original), 1500);
      });
    });
  }
});
