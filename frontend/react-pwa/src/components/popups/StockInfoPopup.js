import React from 'react';
import {Card, CardActions, CardContent, 
            Button, ClickAwayListener,
            Grid,
            Typography} from '@material-ui/core';

export const LatestMarketNewsPopup = () => {
    const [open, setOpen] = React.useState(true);

    const handleClosePopup = () => {
        setOpen(false);
    }

    const handleClickAway = () => {
        setOpen(false);
    }

    return (
        <Card>
            <CardContent>
                <Grid align = "center">
                    <Typography>
                        Latest Market News
                    </Typography>
                </Grid>
                <Grid>
                    <Typography paragraph>
                        content goes here...
                    </Typography>
                </Grid>
            </CardContent>
            <CardActions>
                <ClickAwayListener onClickAway = {handleClickAway}/>
                <Grid variant = "contained" alignContent = "right">
                    <Button onClick = {handleClosePopup} variant = "outlined"> 
                        <Link href = "https://reactjs.org">
                            Learn more
                        </Link>
                    </Button>
                </Grid>
            </CardActions>
        </Card>
    )
}

export {open as StockInfoState};