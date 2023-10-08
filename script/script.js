window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
});

$.fn.extend({
    disableSelection: function () {
        this.each(function () {
            if (typeof this.onselectstart != 'undefined') {
                this.onselectstart = function () { return false; };
            } else if (typeof this.style.MozUserSelect != 'undefined') {
                this.style.MozUserSelect = 'none';
            } else {
                this.onmousedown = function () { return false; };
            }
        });
    }
});

$(document).ready(function () {
    $('label').disableSelection();
});

window.onload = function () {
    document.body.onselectstart = function () {
        return true;
    }
}

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});
document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
}