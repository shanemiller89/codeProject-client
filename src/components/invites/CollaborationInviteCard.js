import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Avatar, Chip } from "@material-ui/core";
import Code from "@material-ui/icons/Code";

const useStyles = makeStyles({
  card: {
    margin: "1em auto",
    maxWidth: 1200
  },
  media: {
    height: 140
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  header: {
    margin: 10,
    display: "flex",
    justifyContent: "space-between"
  },
  owner: {
    margin: 10,
    display: "flex",
    alignItems: "center"
  }
});

const CollaborationInviteCard = props => {
  const classes = useStyles();

  const handleAccept = () => {
    const accepted = {
      accept: true
    }
    props.acceptInvite(accepted, props.invite.id)
  }


  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.header}>
          <Typography gutterBottom variant="h3" component="h2">
            {props.invite.project.title}
          </Typography>
          <Chip
            color="primary"
            size="medium"
            label={props.invite.project.technologies[0].technology}
            icon={<Code />}
          />
        </div>
        <div className={classes.owner}>
          <Avatar
            className={classes.avatar}
            src={props.invite.owner.profile_image}
          />
          <Typography gutterBottom variant="h5" component="h2">
            {props.invite.owner.user.username}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.invite.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" color="secondary">
          Decline
        </Button>
        <Button onClick={handleAccept} size="large" color="primary">
          Accept
        </Button>
      </CardActions>
    </Card>
  );
};

export default CollaborationInviteCard;
