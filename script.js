
const dwn = document.querySelector('.dwn');
const explore = document.querySelector('.explore');

down.addEventListener('mouseover',function(){
    explore.classList.add('show');
});

explore.addEventListener('mouseleave',function(){
    explore.classList.remove('show');
});
