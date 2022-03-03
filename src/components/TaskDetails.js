import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import api from "../api/task"
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../components/TaskDetails.css'



const theme = createTheme();

export default function TaskDetails() {



  const handleSubmit = (event) => {
    const data = new FormData(event.currentTarget);
    console.log({
      task_title: data.get('task_title'),
      task_description: data.get('task_description'),
      task_date:data.get('task_date')
    });

    const request = {
        task_title: data.get('task_title'),
        task_description: data.get('task_description'),
        task_date:data.get('task_date')
    }
    
    api.post("/tasks", request)



  };

  return (

    <div className='BoxContainer'>

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Task Manager
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="task_title"
                  label="Task Title"
                  name="task_title"
                  autoComplete="Task"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="task_description"
                  label="Task Description"
                  id="task_description"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="task_date"
                  label=""
                  type="date"
                  id="task_date"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Task
            </Button>
            <Grid container justifyContent="flex-end">
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>

    </div>
  );
}