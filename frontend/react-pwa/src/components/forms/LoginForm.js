import React from "react";
import {Typography, Link, 
        makeStyles,
        InputLabel,
        InputAdornment,
        FormControl,
        TextField,
        Input} from '@material-ui/core';

import { IconButton, ArrowBackIosIcon} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({

    button: {
        borderRadius: '40%',
    },
}));


export default function SignUpPage(props) {
    const classes = useStyles();

    function FormPassword () {
        
        const handleClickShowPassword = () => {

            const [values, setValues] = React.useState({
                password: '',
                showPassword: false,
            });
            setValues({ ...values, showPassword: !values.showPassword });
          };

        return (

        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <Input
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  //onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        )
    } 

    return (

        <Grid container spacing = {2}>    
            <Grid item xs = {12}>
                <IconButton color = "secondary" to = "/" component = {Link}>
                    <ArrowBackIosIcon/>
                </IconButton>
            </Grid>
            <Grid item xs = {12} align = "center">
                <Typography>
                    Log in
                </Typography>
            </Grid>
            <Grid item xs = {12}>
            <form className = {classes.root} noValidate autoComplete = "off">
                <TextField id = "stanard-basic" label = "Username" />
                <FormPassword/> 
            </form>
            </Grid>

            <Grid item xs = {12} align = "center">
                <Buttton 
                //check if details are valid
                to = "/HomePage"
                className = {classes.button} 
                variant = "contained" 
                color = "secondary"> 
                    Log in
                </Buttton>
            </Grid>
        </Grid>

    );
}
