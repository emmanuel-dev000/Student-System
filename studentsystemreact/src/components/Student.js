import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from "@mui/material";

export default function StudentTextFields() {
    const paperStyle = {
        padding: "50px 20px",
        width: 200,
        margin: "20px auto",
    };
  return (
    <Container>
        
        <Paper elevation={ 3 } style={ paperStyle }>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" label="Student Name" variant="outlined" />
            <TextField id="outlined-basic" label="Student Address" variant="outlined" />
            </Box>
        </Paper>
    </Container>
  );
}