import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import CategoryIcon from '@material-ui/icons/Category';

export default function NavCategoriesListItems(props) {
  return (
    <div>
      <ListSubheader inset style={{width:"fit-content"}}>Categories Panel</ListSubheader>
      <ListItem button onClick={() => {
        document.getElementsByClassName("englishSection")[0].style.display = "none";
        document.getElementsByClassName("globalSection")[0].style.display = "none";
        document.getElementsByClassName("errorSection")[0].style.display = "none";
        document.getElementsByClassName("italianSection")[0].style.display = "none";
        document.getElementsByClassName("categoriesSection")[0].setAttribute("style", "display:block");
        if (window.innerWidth < 700) {
          props.toggler();
        }
      }}>
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Categories stats" />
      </ListItem>
    </div>
  )
}