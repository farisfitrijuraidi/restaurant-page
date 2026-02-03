const loadHome = () => {
    const content = document.querySelector('#content');

    const createP = (text) => {
        const p = document.createElement('p');
        p.textContent = text;
        p.classList.add('title');
        return p;
    };

    const div1 = document.createElement('div');
    const p1 = document.createElement('p');
    div1.classList.add('card', 'one');
    p1.classList.add('title-top');
    p1.textContent = 'All Food Breakfast';
    div1.appendChild(p1);
    content.appendChild(div1);

    const div2 = document.createElement('div');
    div2.classList.add('card', 'two');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    span1.textContent = 'Nasi Lemak';
    span2.textContent = 'Roti Canai';
    span3.textContent = 'Roti Bakar';
    div2.append('Start your day with the authentic taste of Malaysia. From aromatic ', span1 , ' to crispy ', span2 , ' and classic ', span3 , ' we bring the warmth of a traditional Malaysian morning straight to your table.');
    content.appendChild(div2);

    const div3 = document.createElement('div');
    div3.classList.add('card', 'three');
    div3.appendChild(createP('Opening Hours'));
    const subDiv = document.createElement('div');
    subDiv.classList.add('hours');
    const p2 = document.createElement('p');
    p2.textContent = 'Monday - Friday';
    const p3 = document.createElement('p');
    p3.textContent = '8AM - 12PM';
    div3.appendChild(p2);
    div3.appendChild(p3);
    const subDiv2 = document.createElement('div');
    subDiv2.classList.add('hours');
    const p4 = document.createElement('p');
    p4.textContent = 'Monday - Friday';
    const p5 = document.createElement('p');
    p5.textContent = '8AM - 12PM';
    div3.appendChild(p4);
    div3.appendChild(p5);
    content.appendChild(div3);

    const div4 = document.createElement('div');
    div4.classList.add('card', 'four');
    div4.appendChild(createP('Location'));
    const p6 = document.createElement('p');
    p6.textContent = '123 Forest Drive, Forestville, Maine';
    div4.appendChild(p6);
    content.appendChild(div4);
}
    
export {loadHome};
    