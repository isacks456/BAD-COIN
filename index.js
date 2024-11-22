const count = document.getElementById('count');
const circle = document.getElementById('main-btn');
const levelUp = document.getElementById('levelUp');
const boost = document.getElementById('boost');
let counter = 0;

circle.addEventListener('click', () => {
    counter++;
    count.textContent = counter;
    console.log(count.textContent);


    if (counter === 10) {
        levelUp.textContent = 'SILVER';
        levelUp.style.color  = 'silver'
    };

    if (counter === 20) {
        levelUp.textContent = 'GOLD'
        levelUp.style.color = 'gold'
    };
});

