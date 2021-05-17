import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Language } from '@material-ui/icons';

export default function navPagesStasListItems(props) {
  return (
    <div>
      <ListSubheader inset style={{width:"fit-content"}}>Errors Panel</ListSubheader>
      <ListItem button onClick={() => {
        document.getElementsByClassName("globalSection")[0].style.display = "";
        document.getElementsByClassName("italianSection")[0].style.display = "none";
        document.getElementsByClassName("englishSection")[0].style.display = "none";
        document.getElementsByClassName("errorSection")[0].style.display = "none";
        document.getElementsByClassName("categoriesSection")[0].style.display = "none";
        if (window.innerWidth < 700) {
          props.toggler();
        }
      }}>
        <ListItemIcon>
          <Language />
        </ListItemIcon>
        <ListItemText primary="Global" />
      </ListItem>
      <ListItem button onClick={() => {
        document.getElementsByClassName("globalSection")[0].style.display = "none";
        document.getElementsByClassName("englishSection")[0].style.display = "none";
        document.getElementsByClassName("errorSection")[0].style.display = "none";
        document.getElementsByClassName("categoriesSection")[0].style.display = "none";
        document.getElementsByClassName("italianSection")[0].setAttribute("style", "display:block");
        if (window.innerWidth < 700) {
          props.toggler();
        }
      }}>
        <ListItemIcon>
          <img src="/static/images/italy_icon.png" width="25px" height="16px" alt="italy flag" />
        </ListItemIcon>
        <ListItemText primary="Italian Pages" />
      </ListItem>
      <ListItem button onClick={() => {
        document.getElementsByClassName("englishSection")[0].setAttribute("style", "display:block");
        document.getElementsByClassName("globalSection")[0].style.display = "none";
        document.getElementsByClassName("errorSection")[0].style.display = "none";
        document.getElementsByClassName("italianSection")[0].style.display = "none";
        document.getElementsByClassName("categoriesSection")[0].style.display = "none";
        if (window.innerWidth < 700) {
          props.toggler();
        }
      }}>
        <ListItemIcon>
          <img src="/static/images/english_icon.png" width="25px" height="16px" alt="uk flag" />
        </ListItemIcon>
        <ListItemText primary="English Pages" />
      </ListItem>
    </div>
  )
}

