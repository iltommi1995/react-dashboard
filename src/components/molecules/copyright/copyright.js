import React from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import './copyright.css'

export default function Copyright(props) {
    return (
      <Typography variant="body2" color="textSecondary" align="center" {...props} className="copyright-custom">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Owly
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }