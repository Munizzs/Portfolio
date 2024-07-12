document.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 60) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});
