let toggle = document.getElementById('toggle');
let flexy = document.getElementById('flexy');

toggle.addEventListener('change', (e) => {
    flexy.classList.toggle('show-monthly');
})