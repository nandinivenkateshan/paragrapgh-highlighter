import React, { useState } from 'react';

function App() {

  const [val, setVal] = useState({x1: '',y1:'',x2: '',y2:''})

  const handleChange = e => {
    e.persist()
    setVal(val => ({
      ...val, [e.target.name]: e.target.value 
    }))
  }
const handleSubmit = e => {
  e.preventDefault()
  const div  = document.createElement('div')
  const form = document.querySelector('form')
  const coords = form.getBoundingClientRect()
  console.log(coords)
  div.style.background = 'yellow';
  div.style.position = 'absolute'
  div.style.zIndex = '-1'
  // div.style.top = val.x1 + 'px'
  // div.style.left =  val.y1 + 'px'
  // div.style.right =  val.x2 + 'px'
  // div.style.bottom = val.y2 + 'px'
  div.style.top = '12px'
  div.style.left =  '12px'
  div.style.right =  '-12px'
  div.style.bottom = '-12px'
  document.body.append(div)
  setVal({x1:'', y1:'',x2:'',y2:''})
}

  return (
    <div>
      <form onSubmit={handleSubmit} id='form'>
        <label htmlFor='x1'>x1</label>
        <input type='number' id='x1' name='x1' value={val.x1} onChange={handleChange} />

        <label htmlFor='y1'>y1</label>
        <input type='number' id='y1'  name='y1' value={val.y1} onChange={handleChange} />
        
        <label htmlFor='x2'>x2</label>
        <input type='number' id='x2'  name='x2' value={val.x2} onChange={handleChange}/>

        <label htmlFor='y2'>y2</label>
        <input type='number' id='y2'  name='y2' value={val.y2} onChange={handleChange} />

        <button type='submit'>Submit</button>
      </form>
      <p>
      To move elements around we should be familiar with coordinates.

Most JavaScript methods deal with one of two coordinate systems:

Relative to the window – similar to position:fixed,
calculated from the window top/left edge.
we’ll denote these coordinates as clientX/clientY,
the reasoning for such name will become clear later, when we study event properties.
Relative to the document – similar to position:absolute in the document root, 
calculated from the document top/left edge.
we’ll denote them pageX/pageY.
When the page is scrolled to the very beginning, 
so that the top/left corner of the window is exactly the document top/left corner, 
these coordinates equal each other. But after the document shifts,
 window-relative coordinates of elements change, as elements move across the window, 
 while document-relative coordinates remain the same.

On this picture we take a point in the document and
 demonstrate its coordinates before the scroll (left) and after it (right):
      </p>
      <p>
      To move elements around we should be familiar with coordinates.

Most JavaScript methods deal with one of two coordinate systems:

Relative to the window – similar to position:fixed,
calculated from the window top/left edge.
we’ll denote these coordinates as clientX/clientY,
the reasoning for such name will become clear later, when we study event properties.
Relative to the document – similar to position:absolute in the document root, 
calculated from the document top/left edge.
we’ll denote them pageX/pageY.
When the page is scrolled to the very beginning, 
so that the top/left corner of the window is exactly the document top/left corner, 
these coordinates equal each other. But after the document shifts,
 window-relative coordinates of elements change, as elements move across the window, 
 while document-relative coordinates remain the same.

On this picture we take a point in the document and
 demonstrate its coordinates before the scroll (left) and after it (right):
      </p>
      <p>
      To move elements around we should be familiar with coordinates.

Most JavaScript methods deal with one of two coordinate systems:

Relative to the window – similar to position:fixed,
calculated from the window top/left edge.
we’ll denote these coordinates as clientX/clientY,
the reasoning for such name will become clear later, when we study event properties.
Relative to the document – similar to position:absolute in the document root, 
calculated from the document top/left edge.
we’ll denote them pageX/pageY.
When the page is scrolled to the very beginning, 
so that the top/left corner of the window is exactly the document top/left corner, 
these coordinates equal each other. But after the document shifts,
 window-relative coordinates of elements change, as elements move across the window, 
 while document-relative coordinates remain the same.

On this picture we take a point in the document and
 demonstrate its coordinates before the scroll (left) and after it (right):
      </p>
      <p>
      To move elements around we should be familiar with coordinates.

Most JavaScript methods deal with one of two coordinate systems:

Relative to the window – similar to position:fixed,
calculated from the window top/left edge.
we’ll denote these coordinates as clientX/clientY,
the reasoning for such name will become clear later, when we study event properties.
Relative to the document – similar to position:absolute in the document root, 
calculated from the document top/left edge.
we’ll denote them pageX/pageY.
When the page is scrolled to the very beginning, 
so that the top/left corner of the window is exactly the document top/left corner, 
these coordinates equal each other. But after the document shifts,
 window-relative coordinates of elements change, as elements move across the window, 
 while document-relative coordinates remain the same.

On this picture we take a point in the document and
 demonstrate its coordinates before the scroll (left) and after it (right):
      </p>
      <p>
      To move elements around we should be familiar with coordinates.

Most JavaScript methods deal with one of two coordinate systems:

Relative to the window – similar to position:fixed,
calculated from the window top/left edge.
we’ll denote these coordinates as clientX/clientY,
the reasoning for such name will become clear later, when we study event properties.
Relative to the document – similar to position:absolute in the document root, 
calculated from the document top/left edge.
we’ll denote them pageX/pageY.
When the page is scrolled to the very beginning, 
so that the top/left corner of the window is exactly the document top/left corner, 
these coordinates equal each other. But after the document shifts,
 window-relative coordinates of elements change, as elements move across the window, 
 while document-relative coordinates remain the same.

On this picture we take a point in the document and
 demonstrate its coordinates before the scroll (left) and after it (right):
      </p>
      <p>
      To move elements around we should be familiar with coordinates.

Most JavaScript methods deal with one of two coordinate systems:

Relative to the window – similar to position:fixed,
calculated from the window top/left edge.
we’ll denote these coordinates as clientX/clientY,
the reasoning for such name will become clear later, when we study event properties.
Relative to the document – similar to position:absolute in the document root, 
calculated from the document top/left edge.
we’ll denote them pageX/pageY.
When the page is scrolled to the very beginning, 
so that the top/left corner of the window is exactly the document top/left corner, 
these coordinates equal each other. But after the document shifts,
 window-relative coordinates of elements change, as elements move across the window, 
 while document-relative coordinates remain the same.

On this picture we take a point in the document and
 demonstrate its coordinates before the scroll (left) and after it (right):
      </p>
      <p>
      To move elements around we should be familiar with coordinates.

Most JavaScript methods deal with one of two coordinate systems:

Relative to the window – similar to position:fixed,
calculated from the window top/left edge.
we’ll denote these coordinates as clientX/clientY,
the reasoning for such name will become clear later, when we study event properties.
Relative to the document – similar to position:absolute in the document root, 
calculated from the document top/left edge.
we’ll denote them pageX/pageY.
When the page is scrolled to the very beginning, 
so that the top/left corner of the window is exactly the document top/left corner, 
these coordinates equal each other. But after the document shifts,
 window-relative coordinates of elements change, as elements move across the window, 
 while document-relative coordinates remain the same.

On this picture we take a point in the document and
 demonstrate its coordinates before the scroll (left) and after it (right):
      </p>
      <p>
      To move elements around we should be familiar with coordinates.

Most JavaScript methods deal with one of two coordinate systems:

Relative to the window – similar to position:fixed,
calculated from the window top/left edge.
we’ll denote these coordinates as clientX/clientY,
the reasoning for such name will become clear later, when we study event properties.
Relative to the document – similar to position:absolute in the document root, 
calculated from the document top/left edge.
we’ll denote them pageX/pageY.
When the page is scrolled to the very beginning, 
so that the top/left corner of the window is exactly the document top/left corner, 
these coordinates equal each other. But after the document shifts,
 window-relative coordinates of elements change, as elements move across the window, 
 while document-relative coordinates remain the same.

On this picture we take a point in the document and
 demonstrate its coordinates before the scroll (left) and after it (right):
      </p>
      <p>
      To move elements around we should be familiar with coordinates.

Most JavaScript methods deal with one of two coordinate systems:

Relative to the window – similar to position:fixed,
calculated from the window top/left edge.
we’ll denote these coordinates as clientX/clientY,
the reasoning for such name will become clear later, when we study event properties.
Relative to the document – similar to position:absolute in the document root, 
calculated from the document top/left edge.
we’ll denote them pageX/pageY.
When the page is scrolled to the very beginning, 
so that the top/left corner of the window is exactly the document top/left corner, 
these coordinates equal each other. But after the document shifts,
 window-relative coordinates of elements change, as elements move across the window, 
 while document-relative coordinates remain the same.

On this picture we take a point in the document and
 demonstrate its coordinates before the scroll (left) and after it (right):
      </p>
      <p>
      To move elements around we should be familiar with coordinates.

Most JavaScript methods deal with one of two coordinate systems:

Relative to the window – similar to position:fixed,
calculated from the window top/left edge.
we’ll denote these coordinates as clientX/clientY,
the reasoning for such name will become clear later, when we study event properties.
Relative to the document – similar to position:absolute in the document root, 
calculated from the document top/left edge.
we’ll denote them pageX/pageY.
When the page is scrolled to the very beginning, 
so that the top/left corner of the window is exactly the document top/left corner, 
these coordinates equal each other. But after the document shifts,
 window-relative coordinates of elements change, as elements move across the window, 
 while document-relative coordinates remain the same.

On this picture we take a point in the document and
 demonstrate its coordinates before the scroll (left) and after it (right):
      </p>
      <p>
      To move elements around we should be familiar with coordinates.

Most JavaScript methods deal with one of two coordinate systems:

Relative to the window – similar to position:fixed,
calculated from the window top/left edge.
we’ll denote these coordinates as clientX/clientY,
the reasoning for such name will become clear later, when we study event properties.
Relative to the document – similar to position:absolute in the document root, 
calculated from the document top/left edge.
we’ll denote them pageX/pageY.
When the page is scrolled to the very beginning, 
so that the top/left corner of the window is exactly the document top/left corner, 
these coordinates equal each other. But after the document shifts,
 window-relative coordinates of elements change, as elements move across the window, 
 while document-relative coordinates remain the same.

On this picture we take a point in the document and
 demonstrate its coordinates before the scroll (left) and after it (right):
      </p>
      <p>
      To move elements around we should be familiar with coordinates.

Most JavaScript methods deal with one of two coordinate systems:

Relative to the window – similar to position:fixed,
calculated from the window top/left edge.
we’ll denote these coordinates as clientX/clientY,
the reasoning for such name will become clear later, when we study event properties.
Relative to the document – similar to position:absolute in the document root, 
calculated from the document top/left edge.
we’ll denote them pageX/pageY.
When the page is scrolled to the very beginning, 
so that the top/left corner of the window is exactly the document top/left corner, 
these coordinates equal each other. But after the document shifts,
 window-relative coordinates of elements change, as elements move across the window, 
 while document-relative coordinates remain the same.

On this picture we take a point in the document and
 demonstrate its coordinates before the scroll (left) and after it (right):
      </p>
    </div>
  );
}

export default App;
