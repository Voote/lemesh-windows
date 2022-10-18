import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SingleTextfield = styled(TextField)({
  '& label.Mui-focused': {
    color: '#C8AE72',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'red', //dunno
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#B78F68',
    },
    '&:hover fieldset': {
      borderColor: '#B78F68',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#C8AE72',
    },
  },
});

export const InputSingle = ({ labelName }) => (
  <Box component="form" sx={{ m: 1, width: '85vw' }} noValidate autoComplete="off">
    <SingleTextfield
      id="simple-input"
      label={labelName}
      variant="outlined"
      fullWidth
    />
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
