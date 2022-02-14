import Grid from '@mui/material/Grid';
import {useState} from 'react';

/* CHALLENGE PART A: Change the code below to render the name of the 
  background color when the mouse hovers over our GridBox
   CHALLENGE PART B: conditionally render a component */

export default function GridBox() {

  /* use a state hook to change size of GridBox */
  const [size, setSize] = useState(1);

  /* create function to run when GridBox is clicked */
  const toggleSize = (event) => {
    console.log(event);
    if(event.altKey) {
      setSize(size - 1); // decrease size up to 12
    } else {
      setSize(size + 1); // increase size up to 12
    }
    console.log(`toggleSize() called: size now ${size}`);
  };

  let colorName = <span>orange</span>;
  return (
	  <Grid item xs={size} >
			<div className='item'
           onClick={toggleSize}
           onMouseOver={toggleSize}
      >

      </div>
	  </Grid>
  )
}