let extra = document.querySelector('.extra');
let pop = document.querySelector('.for-u');

extra.addEventListener('click', function(){
    pop.classList.add('u-on')

    let cls = document.querySelector('.cls').addEventListener('click', ()=>{
        pop.classList.remove('u-on')
    })
});
