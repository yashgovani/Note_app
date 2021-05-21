import {
  Container,
  Grid,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const Home = (props) => {
  const classes = useStyles();

  const Addnotes = () => {
    props.history.push('/addnotes');
  };

  const Shownotes = () => {
    props.history.push('/notes');
  };
  return (
    <React.Fragment>
      <main>
        <div className={classes.heroContent}></div>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Album layout
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary" onClick={Addnotes}>
                  Add Notes
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary" onClick={Shownotes}>
                  Show Notes
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default Home;
