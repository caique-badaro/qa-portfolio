document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-list > div');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            faqItems.forEach(faq => {
                faq.classList.remove('cb_faq--open');
                faq.classList.add('cb_faq--default');
            });
            item.classList.remove('cb_faq--default');
            item.classList.add('cb_faq--open');
        });
    });
});
