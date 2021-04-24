import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Cards from '../../components/Cards'
import SorteoImg from '../../img/sorteosite.png'
import HolipaysImg from '../../img/holipays (2).png'
import CovidImg from '../../img/COVIDINFORMA.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 15,
    minWidth: 375
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const projects = [
  {
    img: SorteoImg,
    name: 'Sorteo',
    description: "Platform that allows social media influencers to host, track and create giveaways/campaigns that randomly selects winners and transparency for followers when signing up.",
    link:"http://ec2-3-86-101-171.compute-1.amazonaws.com:3000/",
    github:"https://github.com/nicouva/mysorteo",
    cardType:"white"
  },
  {
    img: HolipaysImg,
    name: "Happy Holi-PAYS",
    description: "Holiday themed budget app that's ideal for organizing all the user's various holiday needs.",
    link: "https://pure-bayou-01842.herokuapp.com/index.html",
    github: "https://github.com/nicouva/Project-2",
    cardType: 'grey'
  },
  {
    img: CovidImg,
    name: "COVID INFORMA",
    description: "Interactive global map tracking COVID-19 cases in real time.",
    link: "https://nicouva.github.io/Project1-COVID19-Map/#",
    github: "https://github.com/nicouva/Project1-COVID-Map"
  }
]

const Portfolio = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
              {projects.map((data, i) => (
                <Grid key={i} item>
                  <Cards
                    img={data.img}
                    name={data.name}
                    description={data.description}
                    link={data.link}
                    github={data.github}
                    cardType={data.cardType}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default Portfolio