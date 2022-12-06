import React, { useContext } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import ThemeContext from '../contexts/ThemeContext';

export default function RadioButtonsGroup() {
  const themeContext = useContext(ThemeContext);

  const handleChange = (event) => {
    themeContext.onThemeChange(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Theme</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="dark"
        name="radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel value="dark" control={<Radio />} label="Dark" />
        <FormControlLabel value="light" control={<Radio />} label="Light" />
      </RadioGroup>
    </FormControl>
  );
}
