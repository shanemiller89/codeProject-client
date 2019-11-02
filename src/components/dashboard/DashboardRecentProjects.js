/* eslint-disable no-script-url */
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const DashboardRecentProjects = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      Recent Projects
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="javascript:;">
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}

export default DashboardRecentProjects