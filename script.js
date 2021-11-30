const buttons = document.querySelectorAll('.button');

buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const x = e.clientX;
        const y = e.clientY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const point = document.createElement('span');
        point.classList.add('wave');
        point.style.top = yInside + 'px';
        point.style.left = xInside + 'px';

        this.appendChild(point);
    })
})