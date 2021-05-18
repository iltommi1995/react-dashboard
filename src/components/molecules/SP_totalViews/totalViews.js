import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import GridElementTitle from '../../atoms/gridElementTitle/gridElementTitle';

import './totalViews.scss'


function createDateToday() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '-' + dd + '-' + yyyy;
  return today;
}

export default function TotalViews(props) {
  return (
    <React.Fragment>
      <GridElementTitle>Total views</GridElementTitle>
      <Typography component="h5" className="total-views">
        {props.data.views} <br/>
        <span className="total-views-pages">on {props.data.pages} pages</span>
      </Typography>
      <Typography color="textSecondary" sx={{ flex: 1 }}>
        on {createDateToday()}
      </Typography>
    </React.Fragment>
  );
}
