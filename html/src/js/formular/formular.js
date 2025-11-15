import { BASE_URL } from '../service.js';

export function initFormularModal() {
  const modal = document.getElementById('formular-modal');
  const closeBtn = modal?.querySelector('.close-button');
  const form = document.getElementById('inquiry-form');
  const body = document.body;

  if (!modal || !closeBtn) return;

  // const openModal = () => {
  //   modal.classList.remove("modal-hidden");
  //   requestAnimationFrame(() => modal.classList.add("show"));
  //   history.pushState({}, "", "/formular");
  // };
  const openModal = () => {
    modal.classList.remove('modal-hidden');
    requestAnimationFrame(() => {
      modal.classList.add('show');
      body.classList.add('show');
    });
    history.pushState({}, '', '#formular');
  };

  // const closeModal = () => {
  //   modal.classList.remove("show");
  //   setTimeout(() => modal.classList.add("modal-hidden"), 300);
  //   history.pushState({}, "", "/html");
  // };

  // if (window.location.pathname === "/formular" || window.location.pathname === "/formular/") {
  //   openModal();
  // }
  const closeModal = () => {
    modal.classList.remove('show');
    body.classList.remove('show');
    setTimeout(() => modal.classList.add('modal-hidden'), 300);
    history.pushState({}, '', window.location.pathname);
  };

  if (window.location.hash === '#formular') openModal();

  // document.querySelectorAll('.formular-link').forEach((link) => {
  //   link.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     openModal();
  //   });
  // });

  // closeBtn.addEventListener('click', closeModal);

  // window.addEventListener('click', (e) => {
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
  window.addEventListener('popstate', () => {
    window.location.hash === '#formular' ? openModal() : closeModal();
  });

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const plainData = Object.fromEntries(formData.entries());

      try {
        const formspreeResponse = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        });

        if (!formspreeResponse.ok) throw new Error('Formspree error');

        alert('✅ Anfrage erfolgreich gesendet!');
        form.reset();
        closeModal();

        console.log(
          '🚀 ~ initFormularModal ~ ${BASE_URL}/inquiry/:',
          `${BASE_URL}/inquiry/`
        );
        fetch(`${BASE_URL}/inquiry/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(plainData),
        }).catch((err) => {
          console.warn('⚠️ Konnte Anfrage nicht an Backend senden:', err);
        });
      } catch (error) {
        console.error('❌ Fehler beim Senden über Formspree:', error);
        alert('Fehler beim Senden. Bitte versuchen Sie es später erneut.');
      }
    });
  }
}
