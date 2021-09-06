import React from 'react'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'react-router-dom';

import StockLogo from '../stockLogo1.png';

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100vw',
      position: 'absolute',
    },

    title: {
      textDecoration: 'none',
      fontFamily: 'Poppins',
      fontSize: '28px',
      color: '#3D6B45',
      fontWeight: 'bold',
      paddingRight: '30px',
    },

    detail: {
        textDecoration: 'none',
        fontFamily: 'Poppins',
        fontSize: '15px',
        color: '#000000',
        paddingRight: '30px',
      },


    bar: {
            padding: '5px',
            paddingLeft: '30px',
            paddingRight: '50px',
            justifyContent: 'space-between',
            
    },
    contactButton: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '28px',
        textTransform: 'capitalize',
        backgroundColor: 'white',
        borderRadius: '24px',
        padding: '5px',
        width: '163px',
        height: '50px',
        textDecoration: 'none',
        boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.25)', 
        color: '#3D6B45',

        '&:hover': {
          backgroundColor: '#EDF5EF',
      },
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
      },
      appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
      },
  }));



export default function Header() {

    const theme = useTheme();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };

    return (
        <div className={classes.root}>

            <Hidden only={['xs', 'sm']}>
                <AppBar position="relative" elevation={0} style={{background: 'white'}}>
                <Toolbar className={classes.bar}> 
                    <Link to="/" style={{float: 'right'}}>       
                        <img src={StockLogo} style={{width:'70px'}} />
                    </Link>

                    <div style={{paddingRight: '10px', paddingLeft: '10px', display: 'flex', flexDirection:'row', alignItems:'center'}}>
                    <Link to="/" className={classes.title}>       
                            Stocks In English
                    </Link>

                    <Link to="/" className={classes.detail}>       
                        Home
                    </Link>

                    <Link to="/about" className={classes.detail}>       
                        About
                    </Link>

                    <Link to="/datatable" className={classes.detail}>       
                        View Data
                    </Link>
                    </div> 

                    <a href="https://www.linkedin.com/in/prestonblackburncheme" target="_blank" style={{textDecoration: 'none'}}>
                    <Button className={classes.contactButton}>
                        Contact
                    </Button>
                    </a>

                </Toolbar>
                </AppBar>
            </Hidden>



        <Hidden only={['md','lg','xl']}>
            <AppBar elevation={0} style={{background:  'white'}}
            position="fixed"
            className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
            })}
        >
            <Toolbar  className={classes.bar}>
                <Link to="/" style={{float: 'right'}}>       
                        <img src={StockLogo} style={{width:'70px'}} />
                    </Link>
            <IconButton
                color="default"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                className={clsx(open && classes.hide)}
            >
                <MenuIcon />
            </IconButton>
            </Toolbar>
        </AppBar>

        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            </div>
            <Divider />
            <List>
                <ListItem button>
                <ListItemText >
                    <Link to="/" className={classes.detail}>       
                        Home
                    </Link>
                </ListItemText>
                </ListItem>
                <ListItem button>
                <ListItemText >
                    <Link to="/about" className={classes.detail}>       
                        About
                    </Link>
                </ListItemText>
                </ListItem>
                <ListItem button>
                <ListItemText >
                    <Link to="/datatable" className={classes.detail}>       
                        View Data
                    </Link>
                </ListItemText>
                </ListItem>
                <ListItem button>
                <ListItemText >
                    <a href="https://www.linkedin.com/in/prestonblackburncheme" target="_blank" style={{textDecoration: 'none'}}>
                        <Button className={classes.contactButton}>
                            Contact
                        </Button>
                    </a>
                </ListItemText>
                </ListItem>
            </List>
            <Divider />

        </Drawer>
        </Hidden>
            
        </div>
    )
}
