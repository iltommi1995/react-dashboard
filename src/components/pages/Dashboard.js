import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import "./dashboard.css"
import CentralContent from '../organisms/centralContent/centralContent';
import NavBar from '../organisms/navBar/navBar';


export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box className="containerBox">
      <CssBaseline />

      {/* NAV BAR */}
      <NavBar toggler={toggleDrawer} open={open} />

      {/* CENTRAL CONTENT */}
      <CentralContent />
    </Box>
  );
}
