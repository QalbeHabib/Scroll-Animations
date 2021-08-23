const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkboxes);

checkboxes();
function checkboxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top; 
    
    // getBoundingClientRect(): Return the size of an element and its position relative to the viewport: with eight properties: left, top, right, bottom, x, y, width, height.

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}



//Refrence Link of :  getBoundingClientRect()

// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

// https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp