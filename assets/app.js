(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Replace placeholders centrally (optional convenience)
  const COMPANY = {
    email: "REPLACE_WITH_EMAIL",
    linkedin: "https://www.linkedin.com/company/REPLACE_WITH_LINKEDIN",
  };

  function setLink(id, href, text) {
    const el = document.getElementById(id);
    if (!el) return;
    el.href = href;
    el.textContent = text;
  }

  // Email links
  const emailHref = "mailto:" + COMPANY.email;
  setLink("emailLink", emailHref, COMPANY.email);
  setLink("emailLink2", emailHref, COMPANY.email);

  // LinkedIn links
  setLink("linkedinLink", COMPANY.linkedin, "LinkedIn");
  setLink("linkedinLink2", COMPANY.linkedin, "LinkedIn");

  // Mobile menu
  const btn = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  if (btn && menu) {
    btn.addEventListener("click", () => {
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!isOpen));
      menu.classList.toggle("mobile", !isOpen);
    });
  }

  // mailto form
  const form = document.getElementById("mailtoForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "");
      const from = String(data.get("from") || "");
      const message = String(data.get("message") || "");

      const subject = encodeURIComponent("[ATTA Games] Website Contact");
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${from}\n\nMessage:\n${message}\n`
      );

      window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    });
  }
})();
