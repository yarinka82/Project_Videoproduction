export function initFormularModal() {
  const modal = document.getElementById("formular-modal");
  const closeBtn = modal?.querySelector(".close-button");
  if (!modal || !closeBtn) return;

  // const openModal = () => {
  //   modal.classList.remove("modal-hidden");
  //   requestAnimationFrame(() => modal.classList.add("show"));
  //   history.pushState({}, "", "/formular");
  // };

  // const closeModal = () => {
  //   modal.classList.remove("show");
  //   setTimeout(() => modal.classList.add("modal-hidden"), 300);
  //   history.pushState({}, "", "/html");
  // };

  // if (window.location.pathname === "/formular" || window.location.pathname === "/formular/") {
  //   openModal();
  // }

  // document.querySelectorAll('a[href="/formular"], a[href="/formular/"]').forEach((link) => {
  //   link.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     openModal();
  //   });
  // });

  // closeBtn.addEventListener("click", closeModal);
  // window.addEventListener("click", (e) => {
  //   if (e.target === modal) closeModal();
  // });

  // window.addEventListener("popstate", () => {
  //   if (window.location.pathname === "/formular" || window.location.pathname === "/formular/") {
  //     openModal();
  //   } else {
  //     closeModal();
  //   }
  // });

  
  const BASE_URL = "https://your-backend-url.com"; // change to your backend URL
  const form = document.getElementById("inquiry-form");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const plainData = Object.fromEntries(formData.entries());

      try {

        const formspreeResponse = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (!formspreeResponse.ok) throw new Error("Formspree error");

        alert("✅ Anfrage erfolgreich gesendet!");
        form.reset();
        closeModal();

        fetch(`${BASE_URL}/inquiry/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(plainData),
        })
          .then((res) => {
            if (!res.ok) throw new Error(`Backend responded with ${res.status}`);
            console.log("✅ Anfrage auch an Backend gesendet");
          })
          .catch((err) => {
            console.warn("⚠️ Konnte Anfrage nicht an Backend senden:", err);
          });
      } catch (error) {
        console.error("❌ Fehler beim Senden über Formspree:", error);
        alert("Fehler beim Senden. Bitte versuchen Sie es später erneut.");
      }
    });
  }
}
