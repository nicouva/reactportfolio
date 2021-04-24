import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({

  root: {
    minWidth: 375,
    '& > *': {
      margin: theme.spacing(1),
      // width: '25ch',
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 300,
  }
}));

const Contact = () => {

  return (
    <>
      <CssBaseline/>
      <Container maxWidth="sm">
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h2" component="h2">
              Contact Nicole
            </Typography>
            <Typography className={classes.title} gutterBottom>
              <MailOutlineIcon /> nicouva@gmail.com 
            </Typography>
            <Typography className={classes.title} gutterBottom>
              <Link href="https://github.com/nicouva">
                <GitHubIcon /> NicoUva
              </Link>
            </Typography>
            <Typography className={classes.title} gutterBottom>
              <Link href="https://www.linkedin.com/in/nicole-uva4/">
                <LinkedInIcon /> linkedin.com/in/nicole-uva4 
              </Link>
            </Typography>

            <Typography variant="h4" component="h2">
              Please fill out this form: 
            </Typography>
          </CardContent>
          <Form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="name" />
            <TextField id="standard-basic" label="email" />
            <TextField id="messageText" label="message" multiline rows={4} variant="outlined" fullWidth />
            <Button variant="contained" color="primary">
              Submit
</Button>
          </Form>
        </Card>
      </Container>
    
    </>

  )
}

export default Contact 