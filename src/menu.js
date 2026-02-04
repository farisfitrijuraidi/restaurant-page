const loadMenu = () => {
    const content = document.querySelector('#content');

    const createP = (text) => {
        const p = document.createElement('p');
        p.textContent = text;
        p.classList.add('title');
        return p;
    };

    const createPfood = (text) => {
        const p = document.createElement('p');
        p.textContent = text;
        return p;
    };

    const div1 = document.createElement('div');
    const p1 = document.createElement('p');
    div1.classList.add('card', 'menu', 'five');
    p1.classList.add('title-top');
    p1.textContent = 'Menu';
    div1.appendChild(p1);
    content.appendChild(div1);

    const div2 = document.createElement('div');
    div2.classList.add('card', 'menu','six');
    div2.appendChild(createP('Main Dishes'));
    div2.appendChild(createPfood('Nasi Lemak - RM 5'));
    div2.appendChild(createPfood('Roti Canai - RM 2'));
    content.appendChild(div2);

    const div3 = document.createElement('div');
    div3.classList.add('card', 'menu','seven');
    div3.appendChild(createP('Beverages'));
    div3.appendChild(createPfood('Teh O - RM 2'));
    div3.appendChild(createPfood('Kopi O - RM 2'));
    div3.appendChild(createPfood('Milo O - RM 2'));
    content.appendChild(div3);

    const div4 = document.createElement('div');
    div4.classList.add('card', 'menu', 'eight');
    div4.appendChild(createP('Side Dishes'));
    div4.appendChild(createPfood('Telur Separuh Masak - RM 1.50'));
    div4.appendChild(createPfood('Roti Bakar - RM 3.50'));
    div4.appendChild(createPfood('Lempeng - RM 3'));
    content.appendChild(div4);
}
    
export {loadMenu};
    