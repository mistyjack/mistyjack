import { createStyles, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      position: "relative",
      minHeight: "100vh"
    },
    textContent: {
      width: "100%",
      padding: theme.spacing(0, 4),
      textAlign: "center",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)"
    },
    redText: {
      color: theme.palette.common.red
    }
  })
);

const Landing = () => {
  const classes = useStyles();

  return (
    <div id="home" className={classes.root + " page-section"}>
      <div className={classes.textContent}>
        <Zoom in={true}>
          <Typography className="headline" color="secondary" variant="h2" gutterBottom>
            Hi there!
          </Typography>
        </Zoom>

        <Zoom in={true} style={{ transitionDelay: true ? "500ms" : "0ms" }}>
          <Typography className="headline" color="secondary" variant="h2" gutterBottom>
            I am <strong>Mustafa</strong>
          </Typography>
        </Zoom>

        <Zoom in={true} style={{ transitionDelay: true ? "1000ms" : "0ms" }}>
          <Typography className="headline" color="secondary" variant="h2" gutterBottom>
            A <strong>Fullstack JavaScript</strong>
            <br /> Web Developer
          </Typography>
        </Zoom>
      </div>
    </div>
  );
};

export default Landing;
