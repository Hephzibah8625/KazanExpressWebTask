
let acc = document.getElementsByClassName("faq_item");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        this.classList.toggle("_active");
        let content = this.children[1];
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        }
        else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

        if (this.classList.contains('_active')) {
            document.querySelector('#' + this.id + '_img').src = 'assets/img/close.png';
        }
        else {
            document.querySelector('#' + this.id + '_img').src = 'assets/img/open.png';
        }
    })
}