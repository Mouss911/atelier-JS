/* DOM(Document Object Model)-Day 3 */

                                        /* Event Listeners */

/*Common HTML events:onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload.
We can add event listener method to any DOM object. We use **_addEventListener()_** method to
listen different event types on HTML elements. The _addEventListener()_ method takes two arguments,
an event listener and a callback function.*/

//-Click
/*To attach an event listener to an element, first we select the element then we attach
the addEventListener method. The event listener takes event type and callback functions as argument.*/

const button = document.querySelector('button')
button.addEventListener('click', e => {
console.log('e gives the event listener object:', e)
console.log('e.target gives the selected element: ', e.target)
console.log(
    'e.target.textContent gives content of selected element: ',
    e.target.textContent
    )
})

//An event can be also attached directly to the HTML element as inline script.
/*
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <button onclick="clickMe()">Click Me</button>       //-Event
    <script>
      const clickMe = () => {
        alert('We can attach event on HTML element')
      }
    </script>
  </body>
</html>
*/


//-Mouse enter
const button1 = document.querySelector('button')
button1.addEventListener('mouseenter', e => {
    console.log('e gives the event listener object:', e)
    console.log('e.target gives the selected element: ', e.target)
    console.log(
        'e.target.textContent gives content of selected element: ',
        e.target.textContent
    )
})


//-List of events:
/*
- click - when the element clicked
- dblclick - when the element double clicked
- mouseenter - when the mouse point enter to the element
- mouseleave - when the mouse pointer leave the element
- mousemove - when the mouse pointer move on the element
- mouseover - when the mouse pointer move on the element
- mouseout -when the mouse pointer out from the element
- input -when value enter to input field
- change -when value change on input field
- blur -when the element is not focused
- keydown - when a key is down
- keyup - when a key is up
- keypress - when we press any key
- onload - when the browser has finished loading a page
*/


//-Getting value from an input element
/*We usually fill forms and forms accept data. Form fields are created using input HTML element. Let us build a small
application which allow us to calculate body mas index of a person using two input fields, one button and one p tag*/

//-input value
/*
<input type="text" id="mass" placeholder="Mass in Kilogram" />
<input type="text" id="height" placeholder="Height in meters" />
<button>Calculate BMI</button>
*/
const mass = document.querySelector('#mass')
const height = document.querySelector('#height')
const button2 = document.querySelector('button')

let bmi
button2.addEventListener('click', () => {
bmi = mass.value / height.value ** 2
alert(`your bmi is ${bmi.toFixed(2)}`)
console.log(bmi)
})


//-input event and change
//We can use the _change_ or _input_ event type to get data right away from the input field when the field is on focus
/*
<input type="text" placeholder="say something" />
<p></p>
*/
const input = document.querySelector('input')
const p = document.querySelector('p')

input.addEventListener('input', e => {
p.textContent = e.target.value
})


//-blur event
/*In contrast to _input_ or _change_, the _blur_ event occur when the input field is not on focus.*/
input.addEventListener('blur', (e) => {
    p.textContent = 'Field is required'
    p.style.color = 'red'
})


//-keypress, keydow and keyup
/*We can access all the key numbers of the keyboard using different event listener types.
Let us use keypress and get the keyCode of each keyboard keys.*/
document.body.addEventListener('keypress', e => {
    alert(e.keyCode)
})

