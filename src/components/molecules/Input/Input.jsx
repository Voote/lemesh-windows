import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const InputSingle = ({ labelName }) => (
  <Box component="form" sx={{ m: 1, width: '85vw' }} noValidate autoComplete="off">
    <TextField id="simple-input" label={labelName} variant="outlined" fullWidth />
  </Box>
);

export const InputMultiple = () => (
  <Box component="form" sx={{ m: 1, width: '85vw' }} noValidate autoComplete="off">
    <TextField
      id="multiple-input"
      label="Message"
      variant="outlined"
      size="small"
      fullWidth
      multiline
      rows={4}
    />
  </Box>
);
