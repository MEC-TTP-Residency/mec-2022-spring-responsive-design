import Grid from '@mui/material/Grid';
import {useState} from 'react';

export default function GridBox() {

  /* use a state hook to change size of GridBox */
  const [size, setSize] = useState(1);

  /* create function to run when GridBox is clicked */
  const toggleSize = (event) => {
    console.log(event.altKey);
    if(event.altKey) {
      setSize(size - 1); // decrease size up to 12
    } else {
      setSize(size + 1) ; // increase size up to 12
    }
    console.log(`toggleSize() called: size now ${size}`);
  };

  return (
	  <Grid item xs={size} >
			<div className='item'
           onClick={toggleSize}
      >
      </div>
	  </Grid>
  )
}