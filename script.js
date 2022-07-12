/* 
Create a webpage with a 16x16 grid of square divs.
Create the divs using JavaScript. 
Don’t try making them by hand with copy and pasting in your HTML file! 
*/

    // create 16x16 grid div and append them to container

        // ----------METHOD A: FLOAT/CLEAR---------
        // float everything to the left. On child 16 and multiples of 16, clear left
        /* const container = document.querySelector('.container');
        container.style.width = '100vw';
        container.style.height = '100vh';
        container.style.backgroundColor = 'yellow';

        let i = 0;
        while (i < 256) {
            const div = document.createElement('div');
            container.appendChild(div);
            div.setAttribute('style', 'outline: 1px solid red; width: calc(100%/16); height: calc(100%/16); float: left');
            if (i % 16 === 0) {
                container.childNodes[i].style.clear = 'left';
            }
            i++
        }    */ 

        // ---------METHOD B: INLINE/BLOCK---------
        /* const container = document.querySelector('.container');
        container.style.width = '100vw';
        container.style.height = '100vh';
        container.style.backgroundColor = 'yellow';
        container.style.fontSize = '0'; // hack to remove margins from inline-block elements

        let i = 0;
        while (i < 256) {
            const div = document.createElement('div');
            container.appendChild(div);
            div.setAttribute('style', 'outline: 1px solid red; width: calc(100%/16); height: calc(100%/16); display: inline-block;');
            i++
        }
        const divEven = document.querySelectorAll('div:nth-child(even)');
        divEven.forEach((div) => {
            div.style.backgroundColor = 'black';
        }) */

        // ---------METHOD C: FLEXBOX---------
        /* const container = document.querySelector('.container');
        container.style.width = '100vw';
        container.style.height = '100vh';
        container.style.backgroundColor = 'yellow';
        container.style.setProperty('display', 'flex');
        container.style.setProperty('flex-wrap', 'wrap');

        let i = 0;
        while (i < 256) {
            const div = document.createElement('div');
            container.appendChild(div);
            div.style.setProperty('flex', '0 0 calc(100%/16)');
            div.style.setProperty('height', 'calc(100%/16');
            div.style.setProperty('outline', '1px solid red ');
            i++
        } */

        // ---------METHOD D: GRID---------
        /* const container = document.querySelector('.container');
        container.style.width = '100vw';
        container.style.height = '100vh';
        container.style.backgroundColor = 'yellow';
        container.style.setProperty('display', 'grid');
        container.style.setProperty('grid-template-columns', 'repeat(16, 1fr)');
        
        let i = 0;
        while (i < 256) {
            const div = document.createElement('div');
            container.appendChild(div);
            div.style.setProperty('outline', '1px solid red ');
            i++
        } */