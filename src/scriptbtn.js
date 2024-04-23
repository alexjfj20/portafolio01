const switchButton = document.getElementById('switch11');
switchButton.addEventListener('click',()=> {
    document.body.classList.toggle('dark');
    switchButton.classList.toggle('active')
});


