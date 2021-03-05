import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import SignUpPage from "../forms/SignUpForm";
import LoginPage from "../forms/LoginForm";
import HomePage from "./HomePage";

import { Grid, Button, SvgIcon } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch, 
    Route,
    Link, 
    //Redirect,
} from "react-router-dom";

const useStyles = makeStyles((theme ) => ({
    button: {
        margin: theme.spacing(1)
    }
}))

function CreateLoginPageIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d = "Documnets/SvgIcons" />
        </SvgIcon>
    )
}

function RenderLoginPage() {
    const classes = useStyles();

    return (
        <div>
        <Grid container className = {classes.button}>
            <Grid>
                <CreateLoginPageIcon/>
            </Grid>

            <Grid item xs={12} align="center">
                <Button color="primary"
                 variant = "contained" 
                 to="/SignUp" 
                 component={Link}>
                Sign Up
                </Button>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="secondary" variant = "contained" to="/Login" component={Link}>
                Log In
                </Button>
            </Grid>
        </Grid>
        </div>   
    )
}

export default function CreateLoginPage()  {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path = "/">
                        <RenderLoginPage/>
                    </Route>
                    <Route path = "/Login" component = {LoginPage} />
                    <Route path = "/SignUp" component = {SignUpPage} />
                    <Rout path = "/HomePage" component = {HomePage} />
                </Switch>
            </Router>
        </div>
    )
}
