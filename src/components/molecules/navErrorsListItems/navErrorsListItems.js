import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ErrorIcon from '@material-ui/icons/Error';

export default function NavErrorsListItems(props) {
  return (
    <div>
      <ListSubheader inset style={{width:"fit-content"}} className="nav-menu-subtitles">Errors</ListSubheader>
      <ListItem button onClick={() => {
        document.getElementsByClassName("englishSection")[0].style.display = "none";
        document.getElementsByClassName("globalSection")[0].style.display = "none";
        document.getElementsByClassName("errorSection")[0].setAttribute("style", "display:block");
        document.getElementsByClassName("italianSection")[0].style.display = "none";
        document.getElementsByClassName("categoriesSection")[0].style.display = "none";
        if (window.innerWidth < 700) {
          props.toggler();
        }
      }}>
        <ListItemIcon>
          <ErrorIcon className="menu-icon"  />
        </ListItemIcon>
        <ListItemText primary="Errors in pages" />
      </ListItem>
    </div>
  )
}