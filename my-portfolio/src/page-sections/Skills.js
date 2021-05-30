import { createStyles, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      minHeight: "100vh"
    },
    outerContainer: {
      minHeight: "70vh",
      [theme.breakpoints.up("sm")]: {
        paddingTop: theme.spacing(25)
      }
    },
    container: {
      maxWidth: "90%",
      margin: "auto",
      [theme.breakpoints.up("md")]: {
        maxWidth: "55%"
      }
    },
    skills: {
      padding: theme.spacing(1, 3),
      textAlign: "center"
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
      <Grid container direction="row" className={classes.outerContainer}>
        <Grid spacing={2} className={classes.container} item container justify="space-around">
          {topSkills.map(skillItem => (
            <Grid item key={skillItem.skill}>
              <Paper className={classes.skills} elevation={1}>
                <Typography variant="h3">{skillItem.skill}</Typography>
                <Typography variant="h4">{skillItem.experience}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Grid spacing={2} className={classes.container} item container justify="space-around">
          {otherSkills.map(skillItem => (
            <Grid item key={skillItem}>
              <Paper className={classes.skills} elevation={1}>
                <Typography variant="h4">{skillItem}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
