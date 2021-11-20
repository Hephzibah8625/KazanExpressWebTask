document.querySelectorAll('.faq_item').forEach((item) =>
    item.addEventListener('click', () => {
        if (item.classList.contains('_clicked')) {
            item.classList.remove('_clicked');
            document.querySelector('#' + item.id + '_img').src = '/assets/img/open.png';
        }
        else {
            item.classList.add('_clicked');
            document.querySelector('#' + item.id + '_img').src = '/assets/img/close.png';
        }
    })
)