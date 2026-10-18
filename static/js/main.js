document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".flash").forEach((item) => {
    window.setTimeout(() => {
      item.classList.add("fade-out");
      window.setTimeout(() => item.remove(), 400);
    }, 5000);
  });

  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", () => {
      const submit = form.querySelector('button[type="submit"], input[type="submit"]');
      if (submit && !submit.dataset.noLoading) {
        submit.dataset.originalText = submit.value || submit.textContent;
        submit.disabled = true;
        if (submit.tagName === "INPUT") submit.value = "Please wait…";
        else submit.textContent = "Please wait…";
        window.setTimeout(() => {
          submit.disabled = false;
          if (submit.tagName === "INPUT") submit.value = submit.dataset.originalText;
          else submit.textContent = submit.dataset.originalText;
        }, 4000);
      }
    });
  });
});
