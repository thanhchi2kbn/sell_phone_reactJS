import React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControl } from '@mui/material';

export default function RadioBtn() {
    return (
        <div>
            <FormControl>
                <FormLabel style={{fontWeight:"bold", marginTop:"20px"}} id="demo-row-radio-buttons-group-label">Hình Thức</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue="S" // Set giá trị mặc định cho radio button "S"
                >
                    <FormControlLabel value="S" control={<Radio />} label="S" />
                    <FormControlLabel value="A" control={<Radio />} label="A" />
                    <FormControlLabel value="B" control={<Radio />} label="B" />
                </RadioGroup>
            </FormControl>
        </div>
    );
}
