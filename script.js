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
        const container = document.querySelector('.container');

        // Set Initial Values for the Grid on page load
        function initValue() {
        const gridSideValue = 16; // number of squares on one side of the grid
        const grid = gridSideValue * gridSideValue;

        container.style.setProperty('--gridSideValue', gridSideValue); // set custom property to be able to modify the grid later
        
        // Insert the Grid in the Container
        let i = 0;
        while (i < grid) {
            const gridElement = document.createElement('div');
            gridElement.className = 'grid-element';
            gridElement.style.outline = '1px solid rgb(0 0 0 / 5%)'
            container.appendChild(gridElement);
            i++
        }

        // Add Mouse Event
        const gridElements = document.querySelectorAll('.grid-element');
        const arrGrid = Array.from(gridElements);

        for (let j = 0; j < arrGrid.length; j++) {
            arrGrid[j].addEventListener('mousedown', (e) => {
                e.preventDefault()
                e.target.style.backgroundColor = 'black';
            }) // Color first cell on mouse down

            arrGrid[j].addEventListener('mouseenter', (e) => {
                if (e.which === 1) {
                e.target.style.backgroundColor = 'black';
                } // Change BG only if mouse is down 
            })
        }

    }

    initValue()



/* 
STEP 4: Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
 */

// Add & Style Change Grid Button
const btn = document.createElement('button');
btn.setAttribute('style', 'padding: 10px 25px; font-size: 1.1rem;');
const btnText = document.createTextNode('Change Grid Style');
btn.appendChild(btnText);
document.body.insertBefore(btn, container);

    // Add Button Functionality
    btn.addEventListener('click', askGridStyle);

function askGridStyle() {
    // Prompt
    const gridSideValue = Number(prompt('Insert a new value for the grid (max: 100)', 16));
    if (gridSideValue > 100) {
        alert('Maximum input is 100');
        return
    }
    
    // Clear Old Grid Before Inserting New One
    const previousGridLength = container.childElementCount;
    for (let i = 0; i < previousGridLength; i++) {
        container.removeChild(container.lastChild);
    }

    // Add New Grid
    const grid = gridSideValue * gridSideValue;
    container.style.setProperty('--gridSideValue', gridSideValue);
    let i = 0;
        while (i < grid) {
            const gridElement = document.createElement('div');
            gridElement.className = 'grid-element';
            gridElement.style.outline = '0.5px solid rgb(0 0 0 / 5%)'
            container.appendChild(gridElement);
            i++
        }

    // Add Mouse Event
    const gridElements = document.querySelectorAll('.grid-element');
    const arrGrid = Array.from(gridElements);

    for (let j = 0; j < arrGrid.length; j++) {
        arrGrid[j].addEventListener('mousedown', (e) => {
            e.preventDefault()
            e.target.style.backgroundColor = 'black';
        }) // Color first cell on mouse click

        arrGrid[j].addEventListener('mouseenter', (e) => {
            if (e.which === 1) {
            e.target.style.backgroundColor = 'black';
            } // Change BG only if mouse is down 
        })
    }

}