import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles({
  root: {
    width: 200,
    height: 500,
  },
  grey: {
    backgroundColor: "#40464f",
    color: "ivory"
  },
  maroon: {
    backgroundColor: "#882222",
    color: "ivory"
  },
  white: {
    backgroundColor: "ivory",
    color: "black"
  },
  media: {
    height: 116,
  },
})

const Cards = (props) => {
  let cardType = ` classes.${props.cardType}`
  const classes = useStyles()

  function newType() {
    switch (props.cardType) {
      case "white":
        return `${classes.root} ${classes.white}`;
      case "grey":
        return `${classes.root} ${classes.grey}`;
      case "maroon":
        return `${classes.root} ${classes.maroon}`;
      default:
        break;
    }
  }

  return (
    <>
      <Card className="card_body">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.img}
            title={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" >
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea >
        <CardActions className="card_actions">
          <Button variant="contained" size="small" color="default" href={props.link}>
            Visit
        </Button>
          <Button variant="contained" size="small" color="default" href={props.github}>
            <GitHubIcon />
            GitHub
        </Button>
        </CardActions>
      </Card>
    </>
  )
}


export default Cards