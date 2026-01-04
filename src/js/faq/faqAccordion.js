export function faqAccordion(e) {
  const toggle = e.target.closest('.faq-accordion-toggle');
  if (!toggle) return;

  const clickedAccordion = toggle.closest('.faq-accordion');
  const content = clickedAccordion.querySelector('.faq-accordion-content');
  const isOpen = clickedAccordion.classList.contains('open');

  document.querySelectorAll('.faq-accordion').forEach((acc) => {
    acc.classList.remove('open');
    acc.querySelector('.faq-accordion-content').style.maxHeight = null;
  });

  if (!isOpen) {
    clickedAccordion.classList.add('open');
    content.style.maxHeight = content.scrollHeight + 'px';
  }
}


