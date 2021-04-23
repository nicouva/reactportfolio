
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Myself from '../../img/myself.jpg'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import classes from '*.module.css';

const useStyles = makeStyles({
  root: {
    minWidth: 375,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 300,
  }
});

const Home = () => {
  
  return (
    <React.Fragment>
      <CssBaseline maxWidth="sm">
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h2" component="h2">
              Nicole Uva
            </Typography>
            <Typography className={classes.title} gutterBottom>
              phone: 239-440-5075
            </Typography>
            <Typography className={classes.title} gutterBottom>
              email: nicouva@gmail.com 
            </Typography>
            <CardMedia 
            className={classes.media}
            image={Myself} />

            <Typography variant="body1" component="p">
              Hello! My name is Nicole. I was born in New York and raised in New England and Florida. After many years in Florida, I found my way to New York City. As a person who loves to travel and challenge herself, I studied International Relations and Modern Languages with an emphasis on East Asian Studies in Eckerd College ultimately getting a MA from Webster University in International Relations and Global Affairs. After working for President Obama's reelection campaign, I began a career in Hospitality in New York City.
              <br />
              I worked for Patina Restaurant Group, a premier hospitality conglomerate. I successfully executed countless of celebrity events, corporate catering in Macy's and Rockefeller Center in midtown Manhattan.
              <br />
              While I love hospitality, I have always wanted to learn web development and sought a way to combine my experience and background into a more creative outlet. After considerable research and even more commitment, I enrolled in UCI's full-time intensive Full Stack Web Development Bootcamp. My empathetic nature, coupled with many years in hospitality and politics has prepared me for the successful completion of the bootcamp and obtained a Certificate in Full Stack Web Development.
              <br />
              I'm not afraid of hard work, in fact I thrive under pressure and stress. I'm looking forward to utilizing my skill set to begin a long and rewarding career as a Web Developer.
              <br />
              Let's work together.
            </Typography>

          </CardContent>
        </Card>
      </CssBaseline>
    </React.Fragment>
  )
}

export default Home 