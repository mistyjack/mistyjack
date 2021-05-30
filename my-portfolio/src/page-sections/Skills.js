import { createStyles, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "100vh",
      position: "relative"
    },
    outerContainer: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)"
    },
    container: {
      maxWidth: "70%",
      margin: "0 auto 3rem"
    },
    topSkills: {
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

const otherSkills = ["Node.JS", "Material-UI", "Bootstrap", "TypeScript", "Git", "Redux", "Jest", "Testing-Library", "MongoDB", "REST APIs", "Docker", "Kubernetes", "Slack", "Trello", "Netlify", "Python", "Bash", "XML", "Webpack", "Heroku", "OAuth", "GIMP", "Inkscape"];

const Skills = () => {
  const classes = useStyles();

  return (
    <div id="skills" className={classes.root + " page-section"}>
      <div className={classes.outerContainer}>
        <Grid spacing={2} className={classes.container} container justify="space-around">
          {topSkills.map(skillItem => (
            <Grid item key={skillItem.skill}>
              <Paper className={classes.topSkills} elevation={1}>
                <Typography variant="h3" gutterButtom>
                  {skillItem.skill}
                </Typography>
                <Typography variant="h4">{skillItem.experience}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Grid spacing={2} className={classes.container} container justify="space-around">
          {otherSkills.map(skillItem => (
            <Grid item key={skillItem}>
              <Paper className={classes.topSkills} elevation={1}>
                <Typography variant="h4" gutterButtom>
                  {skillItem}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Skills;
