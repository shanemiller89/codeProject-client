import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Code from '@material-ui/icons/Code';




import './projects.css'
import { flexbox } from '@material-ui/system';

const useStyles = makeStyles({
  card: {
    maxWidth: 445,

  },
  media: {
    height: 300,
    objectFit: "scale-down",
    textAlign: "center"
  },
});

const ProjectCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {/* <CardActionArea> */}
        {/* <CardMedia
          className={classes.media}
          image={props.project.project_image}
          title={props.project.title}
        /> */}
        <div style={{display: "flex", justifyContent: "center"}}>
        <img src={props.project.project_image} alt={props.project.title} className={classes.media}/>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {props.project.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{maxHeight: 75, overflow: "hidden", textOverflow: "ellipsis"}}>
              {props.project.overview}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          ...
          </Typography>
          <br/>
          <Typography variant="h5"  component="h4">
              Language: <Chip color="primary" size="small" label={props.project.technologies[0].technology} icon={<Code />} />

              
              {/* <span className="primaryLanguage">{props.project.technologies[0].technology}</span> */}
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