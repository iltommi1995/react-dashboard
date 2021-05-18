import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './navAppBar.scss'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    }
  }));

export default function NavAppBar(props) {
    const classes = useStyles();
    return(
        <AppBar
        position="absolute"
        className={clsx(classes.appBar, props.open && classes.appBarShift)}
      >
        <Toolbar className="toolbar">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={props.toggler}
            className={clsx(classes.menuButton, props.open && classes.menuButtonHidden)}
          >
            {/* Icona menu quando è chiuso */}
            <MenuIcon />
          </IconButton>
          {/* Scritta */}
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Owly Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    )
}