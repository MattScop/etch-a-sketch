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
        const outerContainer = document.querySelector('.outer-container');
        const container = document.querySelector('.container');
        const buttonsContainer = document.querySelector('.buttons-container');
        const smallButtonsContainer = document.querySelector('.small-buttons-container');
        

        // Set Initial Values for the Grid on page load
        function initValue() {
        const gridSideValue = 32; // number of squares on one side of the grid
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

        // Add Mouse Events for the grid tiles
        const gridElements = document.querySelectorAll('.grid-element');
        const arrGrid = Array.from(gridElements);

        for (let j = 0; j < arrGrid.length; j++) {
            // Color first cell on mouse down
            arrGrid[j].addEventListener('mousedown', (e) => {
                e.preventDefault();

                // if RGB button is active
                if (buttonRGB.classList.contains('rgbActive')) {
                    if (e.target.style.backgroundColor !== '') {
                        return // do not change the color if it has already been changed
                    } else {
                        e.target.style.backgroundColor = `rgb(${RGBvalue()} ${RGBvalue()} ${RGBvalue()}`;
                    }
                } 

                //if SHADOW button is active
                else if (buttonShadow.classList.contains('shadowActive')) {   
                    // if the event has already been fired, increase shadow value by 10%
                     if (e.target.classList.contains('shadowAdded')) {
                         const previousShadowValue = e.target.style.getPropertyValue('--addShadow');
                         const TEN = 10;
                        //  increase up to 100% the value
                        if (parseInt(previousShadowValue) === 100) {
                            e.target.style.setProperty('--addShadow', `${previousShadowValue}`);
                        } else {
                            const currentShadowValue = `${parseInt(previousShadowValue) + TEN}%`;
                            e.target.style.setProperty('--addShadow', `${currentShadowValue}`);
                        }
                     } else {
                         e.target.style.setProperty('--addShadow', `10%`);
                         e.target.classList.add('shadowAdded'); // add class to target condition
                     }
                } 

                //if DEL button is active
                else if (buttonDelete.classList.contains('delActive')) { 
                    e.target.style.backgroundColor = '';
                    e.target.style.setProperty('--addShadow', `0%`);
                } 
                
                else {
                    e.target.style.backgroundColor = 'black';
                }

            })

            // Change tiles BG only when hovering while mouse left btn is down 
            arrGrid[j].addEventListener('mouseenter', (e) => {
                if (e.which === 1) {

                        // if RGB button is active
                    if (buttonRGB.classList.contains('rgbActive')) {
                        if (e.target.style.backgroundColor !== '') {
                            return // do not change the color if it has already been changed
                        } else {
                            e.target.style.backgroundColor = `rgb(${RGBvalue()} ${RGBvalue()} ${RGBvalue()}`;
                        }
                    } 
                    
                    //if SHADOW button is active
                    else if (buttonShadow.classList.contains('shadowActive')) {   
                        // if the event has already been fired, increase shadow value by 10%
                         if (e.target.classList.contains('shadowAdded')) {
                             const previousShadowValue = e.target.style.getPropertyValue('--addShadow');
                             const TEN = 10;
                            //  increase up to 100% the value
                            if (parseInt(previousShadowValue) === 100) {
                                e.target.style.setProperty('--addShadow', `${previousShadowValue}`);
                            } else {
                                const currentShadowValue = `${parseInt(previousShadowValue) + TEN}%`;
                                e.target.style.setProperty('--addShadow', `${currentShadowValue}`);
                            }
                         } else {
                             e.target.style.setProperty('--addShadow', `10%`);
                             e.target.classList.add('shadowAdded'); // add class to target condition
                         }
                    } 

                    //if DEL button is active
                    else if (buttonDelete.classList.contains('delActive')) { 
                        e.target.style.backgroundColor = '';
                        e.target.style.setProperty('--addShadow', `0%`);
                    }
                    
                    else {
                        e.target.style.backgroundColor = 'black';
                    }

                }
            })
        }

    }

    initValue()

/* 
STEP 4: Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
 */

// Add & Style Change Grid Button
const btnSmall = document.createElement('button');
const btnMedium = document.createElement('button');
const btnBig = document.createElement('button');
btnSmall.className = 'gridStyleButton small';
btnMedium.className = 'gridStyleButton medium';
btnBig.className = 'gridStyleButton big';
const btnTextSmall = document.createTextNode('Small Grid');
const btnTextMedium = document.createTextNode('Medium Grid');
const btnTextBig = document.createTextNode('Big Grid');

btnSmall.appendChild(btnTextSmall);
btnMedium.appendChild(btnTextMedium);
btnBig.appendChild(btnTextBig);
buttonsContainer.appendChild(btnSmall);
buttonsContainer.appendChild(btnMedium);
buttonsContainer.appendChild(btnBig);

    // Add Grid Button Functionality
    btnSmall.addEventListener('click', smallGridStyle);
    btnMedium.addEventListener('click', mediumGridStyle);
    btnBig.addEventListener('click', bigGridStyle);

    function smallGridStyle() {
        /* 
        REMOVED PROMPT AND ADDED BUTTONS FOR GRID
        // // Prompt
        // const gridSideValue = Number(prompt('Insert a new value for the grid (max: 100)', 16));
        // if (gridSideValue > 100) {
        //     alert('Maximum input is 100');
        //     return
        // }
         */
        
        // Clear Old Grid Before Inserting New One
        const previousGridLength = container.childElementCount;
        for (let i = 0; i < previousGridLength; i++) {
            container.removeChild(container.lastChild);
        }
    
        // Add New Grid
        const gridSideValue = 32;
        const grid = gridSideValue * gridSideValue;
        container.style.setProperty('--gridSideValue', gridSideValue);
        let i = 0;
            while (i < grid) {
                const gridElement = document.createElement('div');
                gridElement.className = 'grid-element';
                gridElement.style.outline = '1px solid rgb(0 0 0 / 5%)'
                container.appendChild(gridElement);
                i++
            }
        
        // Add Mouse Events for the grid tiles
        const gridElements = document.querySelectorAll('.grid-element');
        const arrGrid = Array.from(gridElements);

        for (let j = 0; j < arrGrid.length; j++) {
            // Color first cell on mouse down
            arrGrid[j].addEventListener('mousedown', (e) => {
                e.preventDefault();

                // if RGB button is active
                if (buttonRGB.classList.contains('rgbActive')) {
                    if (e.target.style.backgroundColor !== '') {
                        return // do not change the color if it has already been changed
                    } else {
                        e.target.style.backgroundColor = `rgb(${RGBvalue()} ${RGBvalue()} ${RGBvalue()}`;
                    }
                } 

                //if SHADOW button is active
                else if (buttonShadow.classList.contains('shadowActive')) {   
                    // if the event has already been fired, increase shadow value by 10%
                     if (e.target.classList.contains('shadowAdded')) {
                         const previousShadowValue = e.target.style.getPropertyValue('--addShadow');
                         const TEN = 10;
                        //  increase up to 100% the value
                        if (parseInt(previousShadowValue) === 100) {
                            e.target.style.setProperty('--addShadow', `${previousShadowValue}`);
                        } else {
                            const currentShadowValue = `${parseInt(previousShadowValue) + TEN}%`;
                            e.target.style.setProperty('--addShadow', `${currentShadowValue}`);
                        }
                     } else {
                         e.target.style.setProperty('--addShadow', `10%`);
                         e.target.classList.add('shadowAdded'); // add class to target condition
                     }
                } 

                //if DEL button is active
                else if (buttonDelete.classList.contains('delActive')) { 
                    e.target.style.backgroundColor = '';
                    e.target.style.setProperty('--addShadow', `0%`);
                } 
                
                else {
                    e.target.style.backgroundColor = 'black';
                }

            })

            // Change tiles BG only when hovering while mouse left btn is down 
            arrGrid[j].addEventListener('mouseenter', (e) => {
                if (e.which === 1) {

                        // if RGB button is active
                    if (buttonRGB.classList.contains('rgbActive')) {
                        if (e.target.style.backgroundColor !== '') {
                            return // do not change the color if it has already been changed
                        } else {
                            e.target.style.backgroundColor = `rgb(${RGBvalue()} ${RGBvalue()} ${RGBvalue()}`;
                        }
                    } 

                    //if SHADOW button is active
                    else if (buttonShadow.classList.contains('shadowActive')) {   
                        // if the event has already been fired, increase shadow value by 10%
                         if (e.target.classList.contains('shadowAdded')) {
                             const previousShadowValue = e.target.style.getPropertyValue('--addShadow');
                             const TEN = 10;
                            //  increase up to 100% the value
                            if (parseInt(previousShadowValue) === 100) {
                                e.target.style.setProperty('--addShadow', `${previousShadowValue}`);
                            } else {
                                const currentShadowValue = `${parseInt(previousShadowValue) + TEN}%`;
                                e.target.style.setProperty('--addShadow', `${currentShadowValue}`);
                            }
                         } else {
                             e.target.style.setProperty('--addShadow', `10%`);
                             e.target.classList.add('shadowAdded'); // add class to target condition
                         }
                    } 

                    //if DEL button is active
                    else if (buttonDelete.classList.contains('delActive')) { 
                        e.target.style.backgroundColor = '';
                        e.target.style.setProperty('--addShadow', `0%`);
                    }
                    
                    else {
                        e.target.style.backgroundColor = 'black';
                    }

                }
            })
        }
    
    }

    function mediumGridStyle() {
        // Clear Old Grid Before Inserting New One
        const previousGridLength = container.childElementCount;
        for (let i = 0; i < previousGridLength; i++) {
            container.removeChild(container.lastChild);
        }
    
        // Add New Grid
        const gridSideValue = 64;
        const grid = gridSideValue * gridSideValue;
        container.style.setProperty('--gridSideValue', gridSideValue);
        let i = 0;
            while (i < grid) {
                const gridElement = document.createElement('div');
                gridElement.className = 'grid-element';
                gridElement.style.outline = '1px solid rgb(0 0 0 / 5%)'
                container.appendChild(gridElement);
                i++
            }
        
        // Add Mouse Events for the grid tiles
        const gridElements = document.querySelectorAll('.grid-element');
        const arrGrid = Array.from(gridElements);

        for (let j = 0; j < arrGrid.length; j++) {
            // Color first cell on mouse down
            arrGrid[j].addEventListener('mousedown', (e) => {
                e.preventDefault();

                // if RGB button is active
                if (buttonRGB.classList.contains('rgbActive')) {
                    if (e.target.style.backgroundColor !== '') {
                        return // do not change the color if it has already been changed
                    } else {
                        e.target.style.backgroundColor = `rgb(${RGBvalue()} ${RGBvalue()} ${RGBvalue()}`;
                    }
                } 

                //if SHADOW button is active
                else if (buttonShadow.classList.contains('shadowActive')) {   
                    // if the event has already been fired, increase shadow value by 10%
                     if (e.target.classList.contains('shadowAdded')) {
                         const previousShadowValue = e.target.style.getPropertyValue('--addShadow');
                         const TEN = 10;
                        //  increase up to 100% the value
                        if (parseInt(previousShadowValue) === 100) {
                            e.target.style.setProperty('--addShadow', `${previousShadowValue}`);
                        } else {
                            const currentShadowValue = `${parseInt(previousShadowValue) + TEN}%`;
                            e.target.style.setProperty('--addShadow', `${currentShadowValue}`);
                        }
                     } else {
                         e.target.style.setProperty('--addShadow', `10%`);
                         e.target.classList.add('shadowAdded'); // add class to target condition
                     }
                } 

                //if DEL button is active
                else if (buttonDelete.classList.contains('delActive')) { 
                    e.target.style.backgroundColor = '';
                    e.target.style.setProperty('--addShadow', `0%`);
                } 
                
                else {
                    e.target.style.backgroundColor = 'black';
                }

            })

            // Change tiles BG only when hovering while mouse left btn is down 
            arrGrid[j].addEventListener('mouseenter', (e) => {
                if (e.which === 1) {

                        // if RGB button is active
                    if (buttonRGB.classList.contains('rgbActive')) {
                        if (e.target.style.backgroundColor !== '') {
                            return // do not change the color if it has already been changed
                        } else {
                            e.target.style.backgroundColor = `rgb(${RGBvalue()} ${RGBvalue()} ${RGBvalue()}`;
                        }
                    } 
                    
                    //if SHADOW button is active
                    else if (buttonShadow.classList.contains('shadowActive')) {   
                        // if the event has already been fired, increase shadow value by 10%
                         if (e.target.classList.contains('shadowAdded')) {
                             const previousShadowValue = e.target.style.getPropertyValue('--addShadow');
                             const TEN = 10;
                            //  increase up to 100% the value
                            if (parseInt(previousShadowValue) === 100) {
                                e.target.style.setProperty('--addShadow', `${previousShadowValue}`);
                            } else {
                                const currentShadowValue = `${parseInt(previousShadowValue) + TEN}%`;
                                e.target.style.setProperty('--addShadow', `${currentShadowValue}`);
                            }
                         } else {
                             e.target.style.setProperty('--addShadow', `10%`);
                             e.target.classList.add('shadowAdded'); // add class to target condition
                         }
                    }

                    //if DEL button is active
                    else if (buttonDelete.classList.contains('delActive')) { 
                        e.target.style.backgroundColor = '';
                        e.target.style.setProperty('--addShadow', `0%`);
                    } 
                    
                    else {
                        e.target.style.backgroundColor = 'black';
                    }

                }
            })
        }
    
    }

    function bigGridStyle() {
        // Clear Old Grid Before Inserting New One
        const previousGridLength = container.childElementCount;
        for (let i = 0; i < previousGridLength; i++) {
            container.removeChild(container.lastChild);
        }
    
        // Add New Grid
        const gridSideValue = 100;
        const grid = gridSideValue * gridSideValue;
        container.style.setProperty('--gridSideValue', gridSideValue);
        let i = 0;
            while (i < grid) {
                const gridElement = document.createElement('div');
                gridElement.className = 'grid-element';
                gridElement.style.outline = '1px solid rgb(0 0 0 / 5%)'
                container.appendChild(gridElement);
                i++
            }
        
        // Add Mouse Events for the grid tiles
        const gridElements = document.querySelectorAll('.grid-element');
        const arrGrid = Array.from(gridElements);

        for (let j = 0; j < arrGrid.length; j++) {
            // Color first cell on mouse down
            arrGrid[j].addEventListener('mousedown', (e) => {
                e.preventDefault();

                // if RGB button is active
                if (buttonRGB.classList.contains('rgbActive')) {
                    if (e.target.style.backgroundColor !== '') {
                        return // do not change the color if it has already been changed
                    } else {
                        e.target.style.backgroundColor = `rgb(${RGBvalue()} ${RGBvalue()} ${RGBvalue()}`;
                    }
                } 

                //if SHADOW button is active
                else if (buttonShadow.classList.contains('shadowActive')) {   
                    // if the event has already been fired, increase shadow value by 10%
                     if (e.target.classList.contains('shadowAdded')) {
                         const previousShadowValue = e.target.style.getPropertyValue('--addShadow');
                         const TEN = 10;
                        //  increase up to 100% the value
                        if (parseInt(previousShadowValue) === 100) {
                            e.target.style.setProperty('--addShadow', `${previousShadowValue}`);
                        } else {
                            const currentShadowValue = `${parseInt(previousShadowValue) + TEN}%`;
                            e.target.style.setProperty('--addShadow', `${currentShadowValue}`);
                        }
                     } else {
                         e.target.style.setProperty('--addShadow', `10%`);
                         e.target.classList.add('shadowAdded'); // add class to target condition
                     }
                } 

                //if DEL button is active
                else if (buttonDelete.classList.contains('delActive')) { 
                    e.target.style.backgroundColor = '';
                    e.target.style.setProperty('--addShadow', `0%`);
                } 
                
                else {
                    e.target.style.backgroundColor = 'black';
                }

            })

            // Change tiles BG only when hovering while mouse left btn is down 
            arrGrid[j].addEventListener('mouseenter', (e) => {
                if (e.which === 1) {

                        // if RGB button is active
                    if (buttonRGB.classList.contains('rgbActive')) {
                        if (e.target.style.backgroundColor !== '') {
                            return // do not change the color if it has already been changed
                        } else {
                            e.target.style.backgroundColor = `rgb(${RGBvalue()} ${RGBvalue()} ${RGBvalue()}`;
                        }
                    } 

                    //if SHADOW button is active
                    else if (buttonShadow.classList.contains('shadowActive')) {   
                        // if the event has already been fired, increase shadow value by 10%
                         if (e.target.classList.contains('shadowAdded')) {
                             const previousShadowValue = e.target.style.getPropertyValue('--addShadow');
                             const TEN = 10;
                            //  increase up to 100% the value
                            if (parseInt(previousShadowValue) === 100) {
                                e.target.style.setProperty('--addShadow', `${previousShadowValue}`);
                            } else {
                                const currentShadowValue = `${parseInt(previousShadowValue) + TEN}%`;
                                e.target.style.setProperty('--addShadow', `${currentShadowValue}`);
                            }
                         } else {
                             e.target.style.setProperty('--addShadow', `10%`);
                             e.target.classList.add('shadowAdded'); // add class to target condition
                         }
                    } 

                    //if DEL button is active
                    else if (buttonDelete.classList.contains('delActive')) { 
                        e.target.style.backgroundColor = '';
                        e.target.style.setProperty('--addShadow', `0%`);
                    } 
                    
                    else {
                        e.target.style.backgroundColor = 'black';
                    }

                }
            })
        }
    
    }

// Add clear button functionality
const btnClear = document.createElement('button');
btnClear.className = 'gridStyleButton clear';
const btnClearText = document.createTextNode('Clear');
btnClear.appendChild(btnClearText);
smallButtonsContainer.appendChild(btnClear);

btnClear.addEventListener('click', () => {
    const gridElements = document.querySelectorAll('.grid-element');
    gridElements.forEach(gridElement => {
        gridElement.style.backgroundColor = '';
        gridElement.style.setProperty('--addShadow', `0%`);
    })
})

/* 
Add rgb button
-   store random values from 0 to 255 into variable using math floor and math random.
-   set the color of the background to an rgb using the variable
*/
const btnRGB = document.createElement('button');
btnRGB.className = 'gridStyleButton RGB';
const btnRGBText = document.createTextNode('RGB');
btnRGB.appendChild(btnRGBText);
smallButtonsContainer.appendChild(btnRGB);
const buttonRGB = document.querySelector('.gridStyleButton.RGB');

    // Add RGB values
    let RGBvalue = () => Math.floor(Math.random() * 255);

    // Add class on click
    buttonRGB.addEventListener('click', () => {
        buttonRGB.classList.toggle('rgbActive');
        // "unclick" shadowButton and del button if rgb button is clicked
        if (buttonShadow.classList.contains('shadowActive')) {
            buttonShadow.classList.remove('shadowActive')
        }
        if (buttonDelete.classList.contains('delActive')) {
            buttonDelete.classList.remove('delActive')
        }
    })

/* 
Add shadow button
-   use css variables to store the value and to grab it with the cssstyledeclaration method
*/
const btnShadow = document.createElement('button');
btnShadow.className = 'gridStyleButton shadow';
const btnShadowText = document.createTextNode('Shadow');
btnShadow.appendChild(btnShadowText);
smallButtonsContainer.appendChild(btnShadow);
const buttonShadow = document.querySelector('.gridStyleButton.shadow')

    // Add class on click
    buttonShadow.addEventListener('click', () => {
        buttonShadow.classList.toggle('shadowActive');
        // "unclick" buttonRGB and del button if shadow button is clicked
        if (buttonRGB.classList.contains('rgbActive')) {
            buttonRGB.classList.remove('rgbActive')
        }
        if (buttonDelete.classList.contains('delActive')) {
            buttonDelete.classList.remove('delActive')
        }
    })

// Add DEL button
const btnDEL = document.createElement('button');
btnDEL.className = 'gridStyleButton del';
const btnDELText = document.createTextNode('DEL');
btnDEL.appendChild(btnDELText);
smallButtonsContainer.appendChild(btnDEL);
const buttonDelete = document.querySelector('.gridStyleButton.del')

    // Add class on click
    btnDEL.addEventListener('click', () => {
        btnDEL.classList.toggle('delActive');
        // "unclick" both buttonRGB and shadow button if del button is clicked
        if (buttonRGB.classList.contains('rgbActive')) {
            buttonRGB.classList.remove('rgbActive')
        }
        if (buttonShadow.classList.contains('shadowActive')) {
            buttonShadow.classList.remove('shadowActive')
        }
    })