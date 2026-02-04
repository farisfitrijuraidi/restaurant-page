const loadContact = () => {
    const content = document.querySelector('#content');

    const createPContact = (text) => {
        const p = document.createElement('p');
        p.textContent = text;
        return p;
    };

    const div1 = document.createElement('div');
    const p1 = document.createElement('p');
    div1.classList.add('card', 'nine');
    p1.classList.add('title-top');
    p1.textContent = 'Contact Us!';
    div1.appendChild(p1);
    content.appendChild(div1);

    const div2 = document.createElement('div');
    div2.classList.add('card', 'ten');
    div2.appendChild(createPContact('Ali'));
    div2.appendChild(createPContact('012-3456789'));
    content.appendChild(div2);

    const div3 = document.createElement('div');
    div3.classList.add('card', 'eleven');
    div3.appendChild(createPContact('Abu'));
    div3.appendChild(createPContact('012-3456789'));
    content.appendChild(div3);

    const div4 = document.createElement('div');
    div4.classList.add('card', 'twelve');
    div4.appendChild(createPContact('Ahmad'));
    div4.appendChild(createPContact('012-3456789'));
    content.appendChild(div4);
   
}
    
export {loadContact};
    