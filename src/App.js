import Grid from '@mui/material/Grid';
import GridBox from './Components/GridBox';

function App() {
    return (
			<Grid container 
						spacing={4} 
						id='container'
			>
				<GridBox />
				<GridBox />
				<GridBox />
				<GridBox />
				<GridBox />
				<GridBox />
			</Grid>
    );
}

export default App;
