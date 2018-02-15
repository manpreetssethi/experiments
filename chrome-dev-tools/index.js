let defaultHeadingColor = 'black';

/* Color changer (Attribute modification) */
const handleColorChange = (e) => {
  e.preventDefault();
  const color = document.querySelector('input[name="color"]').value;
  if (color) {
    updateHeadingColor(color);
    defaultHeadingColor = color;
  }
  return false;
};

const updateHeadingColor = (color) => {
  const headings = [].slice.call(document.querySelectorAll('h1'));
  headings.forEach(({style}) => style.color = color);
  return true;
};
/* Color changer (Attribute modification) */


/* Add Text (Subtree modification) */
const handleAddText = (e) => {
  e.preventDefault();
  const text = document.querySelector('input[name="text"]').value;
  if (text) {
    addHeading(text);
  }
  return false;
};

const addHeading = (text) => {
  console.count(text);
  const heading = document.createElement('h1');
  heading.innerHTML = text;
  heading.style.color = defaultHeadingColor;
  document.querySelector('#headings').appendChild(heading);
  return true;
};
/* Add Text (Subtree modification) */

/* Delete Text (Node removal) */
const handleDeleteText = (e) => {
  e.preventDefault();
  const q = document.querySelector('input[name="q"]').value;
  const headings = [].slice.call(document.querySelectorAll('h1'));
  const heading = headings.find(element => element.innerHTML == q);
  if (heading) {
    removeHeading(heading);
  }
}
const removeHeading = (heading) => {
  heading.remove();
  return true;
};
/* Delete Text (Node removal) */


/* Show iFrame */
const showIframe = () => {
  const iframe = document.querySelector('iframe');
  iframe.style.display = 'block';
  iframe.src = 'https://wepresent.wetransfer.com';
  iframe.onload = () => console.timeEnd('loading_WePresent');
  console.time('loading_WePresent');
  document.body.appendChild(iframe);
};
/* Show iFrame */