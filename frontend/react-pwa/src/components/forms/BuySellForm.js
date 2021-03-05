import React from 'react';
//import {makeStyles} from '@material-ui/core/styles';
import {Card, CardActions, CardContent,
        Button, MenuItem} from '@material-ui/core';
import {lightGreen} from '@material-ui/core/colors';

function BuySnackbar(props) {
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
 
    const isBuyConfirmed = props.isBuyConfirmed;
    setOpenSnackbar(isBuyConfirmed);

    const handleClose = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
    };

    return (
        <Snackbar open = {openSnackbar} autoHideDuration = {4000} onClose = {handleClose}>
            <Alert onClose = {handleClose} severity = "success">
                    Stock bought succesfully!
            </Alert>
        </Snackbar>
    )

}

function SellSnackbar(props) {
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
 
    const isSellConfirmed = props.isSellConfirmed;
    setOpenSnackbar(isSellConfirmed);

    const handleClose = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
    };

    return (
        <Snackbar open = {openSnackbar} autoHideDuration = {4000} onClose = {handleClose}>
            <Alert onClose = {handleClose} severity = "error">
              Stock sold succesfully!
            </Alert>    
        </Snackbar>
    )

}

export const BuyForm  = (props) => {

    const order_types = [
        {
            value: '',
            label: '',
        },
        {
            value: '',
            label: '',
        },
        {
            value: '',
            label: '',
        },
        {
            value: '',
            label: '',
        }
    ]
    const [openBuyCard, setOpenCard] = React.useState(true);

    const [order_type, setOrder_type] = React.useState('');

    const handleOrderTypeChange = (event) => {
        setOrder_type(event.target.value);
    }
    
    const handleCloseBuyCard = () => {
        setOpenCard(false);
    }
    const handleConfirmPurchase = () => {
        //METHOD: POST
        <BuySnackbar isBuyConfirmed = {true}/>
    }

    return (
        <Card>
            <CardContent>
                <form>
                    <label>
                        Bid Price
                    </label>
                    <TextField label = "Get data from database"
                        variant = "outlined" type = "number"/>
                    <label>
                        Ask Price
                    </label>
                    <TextField label = "Get data from database"
                    variant = "outlined" type = "number"/>
                    <label>
                        Price
                    </label>
                    <TextField InputLabelProps = {{
                        shrink: true,
                    }}
                    variant = "outlined" type = "number"/>
                    <label>
                        Volumne
                    </label>
                    <TextField InputLabelProps = {{
                        shrink: true,
                    }}
                        variant = "outlined" type = "number"/>
                    <label>
                        Order type
                    </label>
                    <TextField select value = {order_type}
                        onChange = {handleOrderTypeChange} variant = "outlined">
                            {order_types.map((options) => (
                                <MenuItem key = {options.value} value = {option.value}>
                                    {option.label}
                                </MenuItem>
                            )
                                )}
                    </TextField>
                    <label>
                        Limit Price
                    </label>
                    <TextField variant = "outlined" type = "number"/>
                    <label>
                        Life Time
                    </label>
                    <TextField variant = "outlined" type = "number"/>
                    
                </form>
            </CardContent>
            <CardActions>
                <IconButton onClick = {handleCloseBuyCard}>
                    <CloseIcon/>
                </IconButton>
                <Button variant = "contained" onClick = {handleConfirmPurchase, handleCloseBuyCard}
                            color = {lightGreen}>
                    Confirm Purchase Order
                </Button>
                <Button variant = "contained" onClick = {handleCloseBuyCard}>
                    Cancel
                </Button>
            </CardActions>
        </Card>
    )
}

export const SellForm  = (props) => {

    let order_types = [
        {
            value: '',
            label: '',
        },
        {
            value: '',
            label: '',
        },
        {
            value: '',
            label: '',
        },
        {
            value: '',
            label: '',
        }
    ]

    const [order_type, setOrder_type] = React.useState('');

    const [openSellCard, setOpenCard] = React.useState(true);

    const handleOrderTypeChange = (event) => {
        setOrder_type(event.target.value);
    }

    const handleCloseCard = () => {
        setOpenCard(false); 
    }

    const handleConfirmSell = () => {
        //METHOD: POST
        <SellSnackbar isSellConfirmed= {true}/>
    }
    return (
        <Card>
            <CardContent>
                <form>
                    <label>
                        Bid Price
                    </label>
                    <TextField label = "Get data from database"
                        variant = "outlined" type = "number"/>
                    <label>
                        Ask Price
                    </label>
                    <TextField label = "Get data from database"
                    variant = "outlined" type = "number"/>
                    <label>
                        Price
                    </label>
                    <TextField InputLabelProps = {{
                        shrink: true,
                    }}
                    variant = "outlined" type = "number"/>
                    <label>
                        Volumne
                    </label>
                    <TextField InputLabelProps = {{
                        shrink: true,
                    }}
                        variant = "outlined" type = "number"/>
                    <label>
                        Order type
                    </label>
                    <TextField select value = {order_type}
                        onChange = {handleOrderTypeChange} variant = "outlined">
                            {order_types.map((options) => (
                                <MenuItem key = {options.value} value = {option.value}>
                                    {option.label}
                                </MenuItem>
                            )
                                )}
                    </TextField>
                    <label>
                        Limit Price
                    </label>
                    <TextField variant = "outlined" type = "number"/>
                    <label>
                        Life Time
                    </label>
                    <TextField variant = "outlined" type = "number"/>
                    
                </form>
            </CardContent>
            <CardActions>
                <IconButton onClick = {handleCloseCard}>
                    <CloseIcon/>
                </IconButton>
                <Button variant = "contained" onClick = {handleConfirmSell, handleCloseCard}>
                    Confirm Sell Order
                </Button>
                <Button variant = "contained" onClick = {handleCloseCard}>
                    Cancel
                </Button>
            </CardActions>
        </Card>
    )
}

export {openBuyCard as BuyCardState , openSellCard as SellCardState};