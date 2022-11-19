import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createSvgIcon } from '@mui/material/utils';
import Paper from '@mui/material/Paper';
// import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import OutlinedInput from '@mui/material/OutlinedInput';
import BookingAvailability from './BookingAvailability';


export default function ServiceSetting() {
  

  const [formats, setFormats] = React.useState(() => ['monday','tuesday','wednesday','thursday','friday']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };
  const [state, setState] = React.useState({
      checkin: true,
      // healthcheck: false,
      // checkout: true,
    });
  
    const handleChangeCheckin = (event) => {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      });
    };
  
    // const { checkin, healthcheck, checkout } = state;
    const { checkin } = state;
    // const error = [checkin, healthcheck, checkout].filter((v) => v).length !== 2;




  // const [multipleSlots, setMultipleSlots] = React.useState('Unlimited');

  // const handleChangeMultipleSlots = (event) => {
  //   setMultipleSlots(event.target.value);
  // };

  // const [days, setDays] = React.useState('');
  // const handleChangeDays = (event) => {
  //   setDays(event.target.value);
  // };

  // const [hours, setHours] = React.useState('');
  // const handleChangeHours = (event) => {
  //   setHours(event.target.value);
  // };

  // const [mins, setMins] = React.useState('');
  // const handleChangeMins = (event) => {
  //   setMins(event.target.value);
  // };

  // const [sameDayBooking, setSameDayBooking] = React.useState(true);
  // const handleChangeSameDayBooking = (event) => {
  //   setSameDayBooking(event.target.checked)
  // }

  // const [advanceDayBooking, setAdvanceDayBooking] = React.useState(true);
  // const handleChangeAdvanceDayBooking = (event) => {
  //   setAdvanceDayBooking(event.target.checked)
  // }

  // const [multipleBooking, setMultipleBooking] = React.useState(true);
  // const handleChangeMultipleBooking = (event) => {
  //   setMultipleBooking(event.target.checked)
  // }

  // const [daysAdvance, setDaysAdvance] = React.useState(1);
  // const handleChangeDaysAdvance = (event) => {
  //   setDaysAdvance(event.target.value);
  // };

  const [bookingSchedule, setBookingSchedule] = React.useState('7:00 AM');
  const handleChangeBookingSchedule = (event) => {
    setBookingSchedule(event.target.value);
  };

  const [latestBookingSchedule, setLatestBookingSchedule] = React.useState('7:00 AM');
  const handleChangeLatestBookingSchedule = (event) => {
    setLatestBookingSchedule(event.target.value);
  };

  const [serviceFee, setServiceFee] = React.useState('Paid');
  const handleChangeServiceFee = (event) => {
    setServiceFee(event.target.value);
  };

  // const [checkinTime, setCheckinTime] = React.useState('0');

  // const handleChangeCheckinTime = (event) => {
  //   setCheckinTime(event.target.value);
  // };

  // const [phoneNumber, setPhoneNumber] = React.useState('');

  // const handleChangeNumber = (event) => {
  //   setPhoneNumber(event.target.value);
  // };
  return (
    <React.Fragment>

      <Paper variant="outlined" sx={{ my: { xs: 3, md: 5 }, p: { xs: 2, md: 3 }}}>
        <Box>
          <Typography component="b1" variant="b1"  sx={{color: 'black',ml:3,mt:2}} gutterBottom>Booking Availability</Typography>
          <Box>
          <ToggleButtonGroup
              value={formats}
              onChange={handleFormat}
              aria-label="text formatting"
              size='large'
              sx={{ml:3,mt:2}}
            >
              <ToggleButton value="monday" aria-label="monday">
                M
              </ToggleButton>
              <ToggleButton value="tuesday" aria-label="tuesday">
                T
              </ToggleButton>
              <ToggleButton value="wednesday" aria-label="wednesday">
                W
              </ToggleButton>
              <ToggleButton value="thursday" aria-label="thursday">
                Th
              </ToggleButton>
              <ToggleButton value="friday" aria-label="friday">
                F
              </ToggleButton>
              <ToggleButton value="saturday" aria-label="saturday">
                S
              </ToggleButton>
              <ToggleButton value="sunday" aria-label="sunday">
                Su
              </ToggleButton>
          </ToggleButtonGroup>
          </Box>
        </Box>
        <Box sx={{ml:3, mt:2}}>
            <Typography component="b1" variant="b1"  sx={{color: 'black',display:'block'}} gutterBottom>
              Set booking schedule
            </Typography>
            {/* <Typography sx={{color:'black',ml:3,display:'inline'}}>Monday</Typography>
            <FormControl sx={{ my:2, ml: 3.5, minWidth: 250, display:'inline' }}>
                
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth-label"
                  value={bookingSchedule}
                  onChange={handleChangeBookingSchedule}
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
            </FormControl> */}
            <Box>
            <BookingAvailability/>
            <BookingAvailability/>
            <BookingAvailability/>
            <BookingAvailability/>
            <BookingAvailability/>
            <BookingAvailability/>
            <BookingAvailability/>
            </Box>

            
            
        </Box>

        {/* <Box>
          <FormControl sx={{ mt: 2, ml:3 }} component="fieldset" variant="standard">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox checked={sameDayBooking} onChange={handleChangeSameDayBooking} name="checkin" />
                    }
                    label="Allow same day booking"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={advanceDayBooking} onChange={handleChangeAdvanceDayBooking} name="healthcheck" />
                    }
                    label="Allow advance booking"
                  />
                </FormGroup>
          </FormControl>          
        </Box>

        {advanceDayBooking ? (<Box>
          <Paper variant="outlined" sx={{ mr:10, ml: 10, my: { md: 0, lg: 2 }, p: { md: 2, lg: 3 }, backgroundColor:'#FAFAFA'}}>
            <Typography sx={{color:'black',pb:1, ml: 3}}>How advance can employees book?</Typography>
            <FormControl sx={{ my:2, ml: 3.5, minWidth: 250 }}>
            <InputLabel id="demo-simple-select-autowidth-label">days</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth-label"
              value={daysAdvance}
              onChange={handleChangeDaysAdvance}
              label="days"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
            
          </Paper>        
        </Box>) : null}       
        

        <Box>
        <FormControl sx={{ ml: 3 }} component="fieldset" variant="standard">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox checked={multipleBooking} onChange={handleChangeMultipleBooking} name="multiple booking" />
                    }
                    label="Allow multiple booking"
                  />
                </FormGroup>
                <Typography component="subtitle1" variant="subtitle1"  sx={{color: 'grey',ml:4,mt:-2}} gutterBottom>Employees can book more than one slot at a time</Typography>
          </FormControl>            
        </Box>

        {multipleBooking ? (
        <Box>
        <Paper variant="outlined" sx={{ mr:10, ml: 10, my: { md: 0, lg: 2 }, p: { md: 2, lg: 3 }, backgroundColor:'#FAFAFA'}}>
            
            <FormControl sx={{ml:3}}>
            <FormLabel sx={{color:'black'}}>How many slots can employees book?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={multipleSlots}
              onChange={handleChangeMultipleSlots}
            >
              <FormControlLabel value="Unlimited" control={<Radio />} label="Unlimited" />
              <FormControlLabel value="Limited" control={<Radio />} label="Limited" />
            </RadioGroup>
          </FormControl>
        </Paper>
        </Box>) 
        : null}         
         */}

      </Paper>

      <Paper variant="outlined"  sx={{ my: { md: 3, lg: 5 }, p: { md: 2, lg: 3 }}}>
          <Typography sx={{ml:3}}>Check-in options</Typography>
          <FormControl sx={{ml:3, display:'block'}}>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={serviceFee}
              onChange={handleChangeServiceFee}
            >
              <FormControlLabel value="noCheckin" control={<Radio />} label="No check-in needed" />
              <FormControlLabel value="requireCheckin" control={<Radio />} label="Require check-in only" />
              <FormControlLabel value="requireCheckInAndOut" control={<Radio />} label="Require check-in and check-out" />
            </RadioGroup>
          </FormControl>
          
          { serviceFee === "requireCheckInAndOut" ?  (
            <Paper variant="outlined" sx={{ mr:10, ml: 10, my: { md: 3, lg: 5 }, p: { md: 2, lg: 3 }, backgroundColor:'#FAFAFA'}}>
            <Box>
            <FormControlLabel
                    control={
                      <Checkbox checked={checkin} onChange={handleChangeCheckin} name="checkin" />
                    }
                    label="Require check-in"
                  />
            <Typography component="b1" variant="b1"  sx={{color: 'black'}} gutterBottom>
              Latest check-in time 
            </Typography>
            </Box>
            {/* <FormControl sx={{mt:2}}> 
              <InputLabel htmlFor="component-outlined">Time</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={checkinTime}
                onChange={handleChangeCheckinTime}
                label="Time"
              />
            </FormControl> */}
            <FormControl sx={{ my:3, ml: 3.5, minWidth: 250, display:'inline' }}>
                {/* <InputLabel id="demo-simple-select-autowidth-label">days</InputLabel> */}
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth-label"
                  value={latestBookingSchedule}
                  onChange={handleChangeBookingSchedule}
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
            <Typography component="subtitle1" variant="subtitle1"  sx={{color: 'grey',display: 'block'}} gutterBottom>
                Employees must check in by {bookingSchedule}. If not checked in before this time, booking will be forfeited.
            </Typography>
            {/* <Box sx={{mt:2}}>
            <Typography component="b1" variant="b1"  sx={{color: 'black'}} gutterBottom>
              GCash number
            </Typography>
            <Typography component="subtitle1" variant="subtitle1"  sx={{color: 'grey', display:'block'}} gutterBottom>
              Enter GCash account where payments will be sent
            </Typography>
            </Box>
            <FormControl sx={{mt:2}}>
              <InputLabel htmlFor="component-outlined">Enter Number</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={phoneNumber}
                onChange={handleChangeNumber}
                label="Phone Number"
              />
            </FormControl> */}
          </Paper>) : null }
      </Paper>


      {/* <Paper variant="outlined" sx={{ my: { xs: 3, md: 5 }, p: { xs: 2, md: 3 }}}>
        <Box sx={{ display: 'flex'}}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <Typography  sx={{color:'black'}}>Check-in & check-out</Typography>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox checked={checkin} onChange={handleChangeCheckin} name="checkin" />
                    }
                    label="Require check-in"
                  />
                  
                  <Typography component="subtitle1" variant="subtitle1"  sx={{color: 'grey',ml:4,mt:-2}} gutterBottom>Employees need to scan QR code upon arrival to check-in (default)</Typography>
                 
                  <FormControlLabel
                    control={
                      <Checkbox checked={healthcheck} onChange={handleChangeCheckin} name="healthcheck" />
                    }
                    label="Require health check"
                  />
                  <Typography component="subtitle1" variant="subtitle1"  sx={{color: 'grey', ml:4,mt:-2}} gutterBottom>Employees need to answer health check form before booking</Typography>
                  <FormControlLabel
                    control={
                      <Checkbox checked={checkout} onChange={handleChangeCheckin} name="checkout" />
                    }
                    label="Require check-out"
                  />
                 <Typography component="subtitle1" variant="subtitle1"  sx={{color: 'grey',ml:4, mt:-2}} gutterBottom>Employees need to scan QR code before leaving to check-out (default)</Typography>
                </FormGroup>
            </FormControl>
        </Box>
      </Paper> */}

      {/* <Paper variant="outlined" sx={{ my: { md: 3, lg: 5 }, p: { md: 2, lg: 3 }}}>
          
            <Typography sx={{color:'black',ml:3}}>How close to the slot schedule can employees cancel</Typography>
            <Box>
            <FormControl sx={{ my:2, ml: 3.5, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-autowidth-label">days</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth-label"
                value={days}
                onChange={handleChangeDays}
                label="days"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ my:2, ml: 3.5, minWidth: 250}}>
              <InputLabel id="demo-simple-select-autowidth-label">hours</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth-label"
                value={hours}
                onChange={handleChangeHours}
                label="hours"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>
                <MenuItem value={12}>12</MenuItem>
                <MenuItem value={13}>13</MenuItem>
                <MenuItem value={14}>14</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={16}>16</MenuItem>
                <MenuItem value={17}>17</MenuItem>
                <MenuItem value={18}>18</MenuItem>
                <MenuItem value={19}>19</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={21}>21</MenuItem>
                <MenuItem value={22}>22</MenuItem>
                <MenuItem value={23}>23</MenuItem>
              
              </Select>
            </FormControl>
            <FormControl sx={{ my:2, ml: 3.5, minWidth: 250}}>
            <InputLabel id="demo-simple-select-autowidth-label">mins</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth-label"
              value={mins}
              onChange={handleChangeMins}
              label="mins"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={35}>35</MenuItem>
              <MenuItem value={40}>40</MenuItem>
              <MenuItem value={45}>45</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={55}>55</MenuItem>
            </Select>
            </FormControl>
            </Box>
         
      </Paper> */}

    </React.Fragment>
  );
}