import React from 'react'
import { makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/core/Menu'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  },
  MuiButtonBase: {
    margin: 5
  }
}))

const Navbar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <ToolBar>

          <Typography variant="h3" className={classes.title}>
            Nicole Uva
          </Typography>

          <Button variant="contained" color="primary">
            <Link to='/reactportfolio'>Home</Link>
          </Button>
          <Button variant="contained" color="primary">
            <Link to="/reactportfolio/portfolio">Portfolio</Link>
          </Button>
          <Button variant="contained" color="primary">
            <Link to="/reactportfolio/contact">Contact</Link>
          </Button>
          <Button variant="contained" color="primary">
            <Link to="/reactportfolio/resume">Resume</Link>
          </Button>
        </ToolBar>
      </AppBar>
    </div>
  )
}

export default Navbar