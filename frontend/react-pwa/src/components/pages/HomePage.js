import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, Typography, SearchIcon,
            HomeIcon, AccountCircleIcon,
            ImportContactTwoToneIcon, Tab, Tabs, AppBar 
            , IconButton, ClickAwayListener } from '@material-ui/core';
import StockInfoPopup from StockInfoPopup;
import { lightGreen, red } from '@material-ui/core/colors';

import {BuyCardState, SellCardState, BuyForm, SellForm} from '../forms/BuySellForm';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,

    vertical_tabs: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
    borderRight: `1px solid ${theme.palette.divider}`,
    },

    bottomNavBar: {
        width: 500,
      },
    

    },
  }));


function TopNavBar () {
    const classes = useStyles();

    const AccountDropDown = (props) => {
        const [open, setOpen] = React.useState(false);

        const handleClick = () => {
            setOpen((prev) => !prev);
        };

        const handelClickAway = () => {
            setOpen(false);
        }
        
        return (
            <ClickAwayListener onClickAway = {handelClickAway}>
                <IconButton onClick = {handleClick}>
                    <AccountCircleIcon/>
                </IconButton>
                {open ? (
                    <div>
                        This is the dropdown text.
                    </div>
                ) : null}
            </ClickAwayListener>

        )
    };

    return (
        <Grid>
        <AppBar position = "static">
            <Toolbar>
                <Typography variant = "h6" className={classes.title}>
                    Current Holdings
                </Typography>
                <AccountDropDown/>
            </Toolbar>
        </AppBar>    
        </Grid>
    )
}

function ListStockHoldings() {
    const [openInfo, setOpenInfo] = React.useState(false);

    const handleClick = () => {
        setOpenInfo((prev) = !prev)
    }

    const handleClickAway = () => {
        setOpenInfo(false)
    }

    const [visibleBuy, setVisibleBuy] = React.useState(false);

    setVisibleBuy(BuyCardState)

    const handleOpenBuy = () => {
        setVisibleBuy(true);
    }

    const [visibleSell, setVisibleSell] = React.useState(false);

    setVisibleSell(SellCardState);

    const handleOpenSell = () => {
        setVisibleSell(true);
    }

    const BuyClose = () => {
        const buyState = getOpenBuyState();
        setVisibleBuy(buyState); 
    }

    const SellClose = () => {
        const sellState = getOpeState();
        setVisibleSell(sellState);
    }

    return (
        <Grid container>
            <ClickAwayListener onClickAway = {handleClickAway}>
                <IconButton onClick = {handleClick} aria-label = "more info">
                    <ImportContactTwoToneIcon/> //bookIcon
                </IconButton>
                {open ? (
                    <StockInfoPopup/>
                ) : null}
            </ClickAwayListener>
            
            <Button color = {lightGreen} variant = "contained" onClick = {handleOpenBuy}>
                Buy
            </Button>
            {BuyClose}
            {SellClose}
            {visibleBuy ? <BuyForm/>
            : null}
            <Button color = {red} variant = "contained" onClick = {handleOpenSell}>
                Sell
            </Button>
            {visibleSell ? <SellForm/>
            : null}
        </Grid>
    )
}

function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    }

    return (
        <div className={classes.vertical_tabs}>
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                className={classes.vertical_tabs}
            >
                <Tab label="Latest Results" />
                <Tab label="Market News"/>
                <Tab label="Upcoming Events" />
                <Tab label="SENS" />

            </Tabs>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
      </div>
    )
}

function BottomNavBar () {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation 
            value = {value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction to = "/WatchlistPage" label="Watchlist" icon={< SearchIcon/>} />
          </BottomNavigation>
    );
}

export const HomePage = (props) => {


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <TopNavBar/>
                <Grid>
                    {ListStockHoldingsArray == 0 ? (
                    <Typography color = "textSecondary">
                        <h6> Currently no stocks in holding</h6>
                        <p> (Stocks added from watchlist will appear here) </p>
                     </Typography>
                    ) : <ListStockHoldings/>
                    }
                </Grid>
                <Grid>
                    <VerticalTabs/>
                </Grid>
                <BottomNavBar/>
            </Grid>
        </div>
    )
}
