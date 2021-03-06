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
      <div className="total-views-container">
        <Typography component="h5" className="total-views">
          {props.data.views} <br />
          <span className="total-views-pages">on {props.data.pages} pages</span> <br />
          <span className="total-views-pages">on {createDateToday()}</span>
        </Typography>

      </div>
    </React.Fragment>
  );
}
