let button = document.getElementById('theme')
let body = document.body

button.addEventListener('click', function () {
    body.classList.toggle('dark')
})