import * as React from 'react';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box'



const BookingAvailability = props => {

  const [bookingScheduleStart, setBookingScheduleStart] = React.useState('7:00 AM');
  const handleChangeBookingScheduleStart = (event) => {
    setBookingScheduleStart(event.target.value);
  };

  const [bookingScheduleEnd, setBookingScheduleEnd] = React.useState('6:00 PM');
  const handleChangeBookingScheduleEnd = (event) => {
    setBookingScheduleEnd(event.target.value);
  };



    return(
        <Box sx={{mb:3,display:'flex',flexDirection:"row", alignItems: 'center', alignContent: 'stretch' }}>
              
          <Box sx={{width:100}}>
          <Typography sx={{color:'black',ml:3}}>{props.day}</Typography>
          </Box>
          <FormControl sx={{my:2, ml: 3.5, alignItems:'center'}}>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth-label"
                      value={bookingScheduleStart}
                      onChange={handleChangeBookingScheduleStart}
                      // label=""
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'7:00 AM'}>7:00 AM</MenuItem>
                      <MenuItem value={'7:30 AM'}>7:30 AM</MenuItem>
                      <MenuItem value={'8:00 AM'}>8:00 AM</MenuItem>
                      <MenuItem value={'8:30 AM'}>8:30 AM</MenuItem>
                      <MenuItem value={'9:00 AM'}>9:00 AM</MenuItem>
                      <MenuItem value={'9:30 AM'}>9:30 AM</MenuItem>
                      <MenuItem value={'10:00 AM'}>10:00 AM</MenuItem>
                      <MenuItem value={'10:30 AM'}>10:30 AM</MenuItem>
                      <MenuItem value={'11:00 AM'}>11:00 AM</MenuItem>
                      <MenuItem value={'11:30 AM'}>11:30 AM</MenuItem>
                      <MenuItem value={'12:00 NN'}>12:00 NN</MenuItem>
                    </Select>
          </FormControl>
          <Typography sx={{color:'black',ml:3}}>-</Typography>
          <FormControl sx={{my:2, ml: 3.5, alignItems:'center'}}>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth-label"
                      value={bookingScheduleEnd}
                      onChange={handleChangeBookingScheduleEnd}
                      // label=""
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'1:00 PM'}>1:00 PM</MenuItem>
                      <MenuItem value={'1:30 PM'}>1:30 PM</MenuItem>
                      <MenuItem value={'2:00 PM'}>2:00 PM</MenuItem>
                      <MenuItem value={'2:30 PM'}>2:30 PM</MenuItem>
                      <MenuItem value={'3:00 PM'}>3:00 PM</MenuItem>
                      <MenuItem value={'3:30 PM'}>3:30 PM</MenuItem>
                      <MenuItem value={'4:00 PM'}>4:00 PM</MenuItem>
                      <MenuItem value={'4:30 PM'}>4:30 PM</MenuItem>
                      <MenuItem value={'5:00 PM'}>5:00 PM</MenuItem>
                      <MenuItem value={'5:30 PM'}>5:30 PM</MenuItem>
                      <MenuItem value={'6:00 PM'}>6:00 PM</MenuItem>
                    </Select>
          </FormControl>   
        </Box>
    );
}

export default BookingAvailability;