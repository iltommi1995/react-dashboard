import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import './navDrawer.css'
import NavErrorsListItems from '../navErrorsListItems/navErrorsListItems';
import NavCategoriesListItems from '../navCategoriesListItems/navCategoriesListItems';
import NavPagesStasListItems from '../navPagesStatsListItems/navPagesStasListItems';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      overflowX: 'hidden'
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }
  }));

export default function NavDrawer(props) {
    const classes = useStyles();
    const [ww, setWw] = React.useState(window.innerWidth);
    const reportWindowSize = () => {
        setWw(window.innerWidth);
        let open = props.open;
        if(open === true && ww <= 700)
            props.toggler();
    };
    window.addEventListener('resize', reportWindowSize);

    return(
        <Drawer
        variant={ww < 700 ? "temporary" : "permanent"}
        className="navDrawerCustom"
        classes={{
          paper: clsx(classes.drawerPaper, !props.open && classes.drawerPaperClose),
        }}
        open={props.open}
      >
        {/* Icona per chiudere menu */}
        <div className="toolbarIcon">
          <IconButton onClick={props.toggler}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <NavPagesStasListItems toggler={props.toggler} />
        </List>
        <Divider />
        <List>
          <NavErrorsListItems toggler={props.toggler} />
        </List>
        <Divider />
        <List>
          <NavCategoriesListItems toggler={props.toggler} />
        </List>
      </Drawer>
    )
}