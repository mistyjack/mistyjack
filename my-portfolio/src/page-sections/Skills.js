import { createStyles, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CodeIcon from "@material-ui/icons/Code";
import IconButton from "@material-ui/core/IconButton";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      minHeight: "100vh",
      paddingTop: theme.spacing(15)
    },
    container: {
      maxWidth: "90%",
      margin: "auto",
      [theme.breakpoints.up("md")]: {
        maxWidth: "55%"
      }
    },
    containerWithMargin: {
      paddingBottom: theme.spacing(5)
    },
    skills: {
      padding: theme.spacing(1, 3),
      textAlign: "center",
      backgroundColor: theme.palette.secondary.main
    },
    heading: {
      textAlign: "center",
      paddingBottom: theme.spacing(7)
    },
    icon: {
      fontSize: 60
    }
  })
);

const topSkills = [
  { skill: "JavaScript", experience: "5 years" },
  { skill: "HTML", experience: "5 years" },
  { skill: "CSS", experience: "5 years" },
  { skill: "React.js", experience: "3 years" },
  { skill: "Next.js", experience: "6 months" }
];

const otherSkills = ["Node.JS", "Material-UI", "Bootstrap", "TypeScript", "Git", "BitGo SDK", "Redux", "Jest", "Testing-Library", "MongoDB", "REST APIs", "Docker", "Kubernetes", "Slack", "Trello", "Netlify", "Python", "Bash", "XML", "Webpack", "Heroku", "OAuth", "GIMP", "Inkscape"];

const Skills = () => {
  const classes = useStyles();

  return (
    <div id="skills" className={classes.root + " page-section"}>
      <Zoom>
        <Typography className={classes.heading + " headline"} color="secondary" variant="h2">
          <IconButton edge="start" color="inherit" aria-label="code">
            <span className="material-icons" aria-hidden="true">
              Code Icon
            </span>
            <CodeIcon className={classes.icon} />
          </IconButton>
          My Skills
        </Typography>
      </Zoom>
      <Grid spacing={2} className={classes.container + " " + classes.containerWithMargin} container justify="space-around">
        {topSkills.map(skillItem => (
          <Grid item key={skillItem.skill}>
            <Fade right>
              <Paper className={classes.skills} elevation={1}>
                <Typography variant="h3">{skillItem.skill}</Typography>
                <Typography variant="h4">{skillItem.experience}</Typography>
              </Paper>
            </Fade>
          </Grid>
        ))}
      </Grid>

      <Grid spacing={2} className={classes.container} item container justify="space-around">
        {otherSkills.map(skillItem => (
          <Grid item key={skillItem}>
            <Fade left>
              <Paper className={classes.skills} elevation={1}>
                <Typography variant="h4">{skillItem}</Typography>
              </Paper>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Skills;
