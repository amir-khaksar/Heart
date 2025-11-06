// Number of floating texts
const N = 100;
const ui = document.getElementById('ui');

for (let i = 1; i <= N; i++) {
    const love = document.createElement('div');
    love.className = 'love';
    love.style.setProperty('--i', i);

    const h = document.createElement('div');
    h.className = 'love_horizontal';

    const v = document.createElement('div');
    v.className = 'love_vertical';

    const word = document.createElement('div');
    word.className = 'love_word';
    word.textContent = 'I love you';

    v.appendChild(word);
    h.appendChild(v);
    love.appendChild(h);
    ui.appendChild(love);
}
