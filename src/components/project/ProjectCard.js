import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ProjectCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {/* <CardActionArea> */}
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.project.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              {props.project.overview}
          </Typography>
          <br/>
          <Typography variant="body2"  component="h4">
              Language:
          </Typography>
          
        </CardContent>
      {/* </CardActionArea> */}
      <CardActions>
        <Button size="small" color="primary">
          Detail Page
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard