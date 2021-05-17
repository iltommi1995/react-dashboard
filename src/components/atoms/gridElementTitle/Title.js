import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import './title.css'

function Title(props) {
  return (
    <Typography component="h2" variant="h6" color="primary" className="grid-element-title" gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;