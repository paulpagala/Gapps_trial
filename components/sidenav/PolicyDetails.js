import * as React from 'react';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';
// import FormatBoldIcon from '@mui/icons-material/FormatBold';
// import FormatItalicIcon from '@mui/icons-material/FormatItalic';
// import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
// import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
// // import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import { createSvgIcon } from '@mui/material/utils';
import Paper from '@mui/material/Paper';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
// import AddSlots from '../addSlots';
import { Link } from '@mui/material';
import Input from '@mui/material/Input';

import Switch from '@mui/material/Switch';
import { useState,useEffect } from "react";
// import { DropzoneArea } from '../../node_modules/react-mui-dropzone/dist/index.js';
// import Dropzone from 'react-dropzone'
// import {useDropzone} from 'react-dropzone'



export default function PolicyDetails() {
  const [addParking, setAddParking] = React.useState('');

  const handleChangeAddParking = (event) => {
    setAddParking(event.target.value);
  };

  const [parkingArea, setParkingArea] = React.useState('');

  const handleChangeParkingArea = (event) => {
    setParkingArea(event.target.value);
  };

  const [changeAddress, setChangeAddress] = React.useState('');

  const handleChangeAddress = (event) => {
    setChangeAddress(event.target.value);
  };

  const [areaFloor, setAreaFloor] = React.useState('');

  const handleChangeAreaFloor = (event) => {
    setAreaFloor(event.target.value);
  };

  const [numberOfSlots, setNumberOfSlots] = React.useState();
  const handleChangeNumberOfSlots = (event) => {
    setNumberOfSlots(event.target.value);
  };


  const [state, setState] = React.useState({
    slots: false,
  });

  const handleChangeSlots = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { slots } = state;


 const arr = [];
 const copyArr = [...arr];

 
 for (let i = 0; i < parseInt(numberOfSlots); i++) {
  copyArr.push({id:i , desc:[]});
 }
  const [data,setData] = useState(copyArr)
  const onchangeInput = (val, index) => {
    let temp = data;
    temp[index] = val.target.value;
    setData(temp);
    // console.log(temp);
  };


  let element = copyArr.map((value, index) =>
  
      <Box key={index+1} sx={{mb:3,display:'flex',flexDirection:"column", alignItems: 'left', alignContent: 'stretch', ml:2 }}>
      <Typography variant="subtitle1" sx={{color: 'black'}} gutterBottom>Slot name {index+1}</Typography>
        <TextField
          id="outlined-parkingName"
          // label=""
          // value={data}
          onChange={(val)=>{onchangeInput(val, index)}}
          variant="outlined"
          sx={{backgroundColor:'white', width:326}}
          placeholder="Enter Slot Name"
          
      />
      </Box>
      
  );

  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);
  
  // handle drag events
  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  // triggers when file is dropped
  const handleDrop = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
    }
  };
  
  // triggers when file is selected with click
  const handleChange = function(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
    }
  };
  
// triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  const [minimizeParking, setMinimizeParking] = React.useState(true);

  const handleChangeMinimizeParking = (event) => {
    setMinimizeParking(event.target.checked);
  };

  const [minimizeParkingSlots, setMinimizeParkingSlots] = React.useState(true);

  const handleChangeMinimizeParkingSlots = (event) => {
    setMinimizeParkingSlots(event.target.checked);
  }

// //  console.log(copyArr)
//  console.log(numberOfSlots)
// console.log(typeof areaFloor)

// const [files, setFiles] = useState([]);
// const {getRootProps, getInputProps} = useDropzone({
//   accept: 'image/*',
//   onDrop: acceptedFiles => {
//     setFiles(acceptedFiles.map(file => Object.assign(file, {
//       preview: URL.createObjectURL(file)
//     })));
//   }
// });
// const thumbs = files.map(file => (
//   <div style={thumb} key={file.name}>
//     <div style={thumbInner}>
//       <img
//         src={file.preview}
//         style={img}
//       />
//     </div>
//   </div>
// ));

// useEffect(() => {
//   // Make sure to revoke the data uris to avoid memory leaks
//   files.forEach(file => URL.revokeObjectURL(file.preview));
// }, [files]);

  return (
    <React.Fragment>
    <Paper variant="outlined"  sx={{ my: { md: 3, lg: 5 }, p: { md: 2, lg: 3 }}}>
          <Box>
          <Typography sx={{ml:3, fontWeight: 'bold' }}>Parking areas & slots</Typography>
          <Typography sx={{ml:3, mt:2}}>Select how you will add your parking areas</Typography>
          </Box>
          <FormControl sx={{ml:3, display:'block'}}>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={addParking}
              onChange={handleChangeAddParking}
            >
              <FormControlLabel value="list" control={<Radio />} label="List Manually" />
              <FormControlLabel value="bulk" control={<Radio />} label="Upload bulk list" />
            </RadioGroup>
          </FormControl>
    </Paper>

  
    {/* { serviceFee === "Paid" ?  (<Paper variant="outlined" sx={{ mr:10, ml: 10, my: { md: 3, lg: 5 }, p: { md: 2, lg: 3 }, backgroundColor:'#FAFAFA'}}> */}
    { addParking === "list" && minimizeParking ?  
        (
        <div>
              <Switch
              checked={minimizeParking}
              onChange={handleChangeMinimizeParking}
              inputProps={{ 'aria-label': 'controlled' }}
              sx={{ml:138}}
            />
        <Paper variant="outlined" sx={{ my: { md: 0 , lg: 0 }, p: { md: 2, lg: 3 }}}>
          <Box sx={{ml:3}}>
            <Typography variant="subtitle1"  sx={{color: 'black'}} gutterBottom> Parking area name </Typography>
            <TextField
                id="outlined-address"
                // label="Address (optional)"
                value={parkingArea}
                onChange={handleChangeParkingArea}
                variant="outlined"
                sx={{width:500}}
                placeholder="Enter parking area name"
            />
          </Box>
          <Box sx={{ml:3, mt:2}}>
            <Typography variant="subtitle1"  sx={{color: 'black'}} gutterBottom> Address <em>(optional)</em></Typography>
            <TextField
                id="outlined-parkingarea"
                // label="Address (optional)"
                value={changeAddress}
                onChange={handleChangeAddress}
                variant="outlined"
                sx={{width:900}}
                placeholder="Enter address"
            />
          </Box>
          <Switch
                checked={minimizeParkingSlots}
                onChange={handleChangeMinimizeParkingSlots}
                inputProps={{ 'aria-label': 'controlled' }}
                sx={{ml:128}}
              />
            {minimizeParkingSlots ? (<Paper variant="outlined" sx={{ mr:3, ml: 3, my: { md: 0, lg: 0 }, p: { md: 2, lg: 3 }, backgroundColor:'#FAFAFA'}}>
            <Typography variant="subtitle1"  sx={{color: 'black'}} gutterBottom>Area Floor</Typography>
            <TextField
                  id="outlined-AreaFloor"
                  // label="Area Floor"
                  value={areaFloor}
                  onChange={handleChangeAreaFloor}
                  variant="outlined"
                  placeholder="E.g. P1"
                 
              />
          
            <Typography variant="subtitle1"  sx={{color: 'black'}} gutterBottom>Number of slots</Typography>
            <TextField
              id="outlined-number"
              label="Number of Slots"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={numberOfSlots}
              onChange={handleChangeNumberOfSlots}
            />
            <br/>
            <FormControlLabel
                        control={
                          <Checkbox checked={slots} onChange={handleChangeSlots} name="slots" />
                        }
                        label="Add name to slots"
                      />
             
            {slots ? (
            <Paper variant="outlined" sx={{ mr:5, ml: 5, my: { md: 1, lg: 3 }, p: { md: 2, lg: 3 }, backgroundColor:'#EFEFEF'}}>
              {element}
            </Paper>) 
            : 
            null}
          </Paper>) : null}
          
        </Paper>
        </div>
        ) 
    : null
    }



    {addParking === 'bulk' ? 
        ( 
        <Paper variant="outlined" sx={{ my: { md: 3, lg: 5 }, p: { md: 2, lg: 3 }}}>
        <Typography component="b1" variant="b1"  sx={{color: 'black'}} gutterBottom>
        Upload list of available parking areas
        </Typography>
        <Typography component="subtitle1" variant="subtitle1"  sx={{color: 'grey',display: 'block'}} gutterBottom>
          Missed the parking areas list template we shared?
        </Typography>
        <Link href='google.com'>Download template</Link>
        <Paper variant="outlined" sx={{ mr:10, ml: 10, my: { md: 3, lg: 5 }, p: { md: 2, lg: 3 }, backgroundColor:'#FAFAFA'}}>
            {/* <Typography sx={{ml:3, mt:2}}>File uploaded</Typography> */}
            {/* <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
            <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
            <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
              <div>
                <p>Drag your file to upload or</p>
                <button className="upload-button" onClick={onButtonClick}>Select file from computer</button>
              </div> 
            </label> */}
            {/* { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> } */}
          {/* </form> */}
          {/* <DropzoneArea onChange={(files) => console.log('Files:', files)}/> */}
          {/* <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
              {({getRootProps, getInputProps}) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drop your file here to upload or select file from computer</p>
                  </div>
                </section>
              )}
            </Dropzone> */}



        </Paper>
        </Paper>) 
      : null
    }
         
    </React.Fragment>
  );
}