import * as React from 'react';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box'



const AddSlots = props => {

    const [parkingName, setParkingName] = React.useState(() => []);

    const handleChangeParkingName = (event, newParkingName) => {
      setParkingName(newParkingName);
    };


    return(
        <Box sx={{mb:3,display:'flex',flexDirection:"row", alignItems: 'center', alignContent: 'stretch' }}>
          <Typography variant="subtitle1"  sx={{color: 'black'}} gutterBottom>Slot name 1</Typography>
            <TextField
              id="outlined-parkingName"
              label="Enter Slot Name"
              value={parkingName}
              onChange={handleChangeParkingName}
              variant="outlined"
              sx={{backgroundColor:'white', width:326}}
          />
        </Box>
    );
}

export default AddSlots;