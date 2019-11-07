import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Code from "@material-ui/icons/Code";
import DeveloperBoard from "@material-ui/icons/DeveloperBoard";

import "./projects.css";
import { flexbox } from "@material-ui/system";

const useStyles = makeStyles({
  card: {
    maxWidth: 445,
    marginRight: "-10em"
  },
  media: {
    height: 300,
    objectFit: "scale-down",
    textAlign: "center"
  }
});

const ProjectCard = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {props.project.project_image === "" ? (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <DeveloperBoard
              fontSize="large"
              style={{ color: "#ca3e47", fontSize: "21em" }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}></div>
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={props.project.project_image}
            alt={props.project.title}
            className={classes.media}
          />
        </div>
      )}
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
          {props.project.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{
            maxHeight: 75,
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
        >
          {props.project.overview}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          ...
        </Typography>
        <br />
        <Typography variant="h6" component="h4">
          Primary Technology:{" "}
          <Chip
            color="primary"
            size="small"
            label={props.project.technologies[0].technology}
            icon={<Code />}
          />
          {/* <span className="primaryLanguage">{props.project.technologies[0].technology}</span> */}
        </Typography>
      </CardContent>
      {/* </CardActionArea> */}
      <CardActions>
        <Link style={{textDecoration: "none"}} to={`/project/${props.project.id}`}>
          <Button size="large" color="secondary">
            Project Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
