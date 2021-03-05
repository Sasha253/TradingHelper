import React from "react";
import {Typography, 
        makeStyles,
        InputLabel,
        InputAdornment,
        FormControl,
        TextField,
        Input} from '@material-ui/core';

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
                <Typography variant = "h6" gutterBottom>
                    Sign up
                </Typography>
            </Grid>    

            <Grid item xs = {12}>
            <form noValidate autoComplete = "off">
                <TextField id = "stanard-basic" label = "First Name" />
                <TextField id = "stanard-basic" label = "Last Name" />
                <TextField id = "stanard-basic" label = "Your Email" />
                <FormPassword/>
                <FromPassword/> //both passwords must match
                
            </form>

            <Typography variant = "body1">
                By tapping "Sign Up and Accept", you acknowledge that you have read the 
                <a href = ""> Privacy Policy</a> and agree to the <a href = ""> Terms of Service</a>
            </Typography>
            </Grid>

            <Grid item xs = {12} align = "center">
                <Buttton 
                //check all data is valid
                to = "/HomePage"
                variant = "contained" 
                color = "secondary"> 
                    Sign up & Accept
                </Buttton>
            </Grid>
        </Grid>

    );
}
