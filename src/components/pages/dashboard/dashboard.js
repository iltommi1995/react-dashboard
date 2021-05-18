import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import "./dashboard.scss"
import CentralContent from '../../organisms/centralContent/centralContent';
import NavBar from '../../organisms/navBar/navBar';


export default function Dashboard() {
  const [open, setOpen] = React.useState(window.innerWidth <= 700 ? false : true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box className="container-box">
      <CssBaseline />

      {/* NAV BAR */}
      <NavBar toggler={toggleDrawer} open={open} />

      {/* CENTRAL CONTENT */}
      <CentralContent />
    </Box>
  );
}
