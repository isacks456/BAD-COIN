const count = document.getElementById('count');
const circle = document.getElementById('main-btn');
const levelUp = document.getElementById('levelUp');
const boost = document.getElementById('boost');
const btn = document.getElementById('btn');
const profile = document.getElementById('profile');
const scoreProfile = document.getElementById('scoreProfile');
const levelUp1Subtitle = document.getElementById('levelUp-sub_title');
const close = document.getElementById('close');
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

    if (counter === 10) {
        levelUp1Subtitle.textContent = 'SILVER';
        levelUp1Subtitle.style.color  = 'silver'
    };

    if (counter === 20) {
        levelUp1Subtitle.textContent = 'GOLD'
        levelUp1Subtitle.style.color = 'gold'
    };


});

btn.addEventListener('click', () => {
    profile.style.display = 'block';
});

circle.addEventListener('click', () => {
    scoreProfile.textContent = counter;
});

close.addEventListener('click', () => {
    profile.style.display = 'none';
})

