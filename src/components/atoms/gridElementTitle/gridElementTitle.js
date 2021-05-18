import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import './gridElementTitle.scss'

export default function GridElementTitle(props) {
  return (
    <Typography component="h3" variant="h6" color="primary" className="grid-element-title" gutterBottom>
      {props.children}
    </Typography>
  );
}