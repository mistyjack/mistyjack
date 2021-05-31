import { createStyles, makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import IconPack from "../components/Icons";
import Divider from "@material-ui/core/Divider";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "100vh",
      position: "relative",
      paddingTop: "10rem"
    },
    container: {
      margin: "auto",
      padding: theme.spacing(3),
      width: "100%",
      textAlign: "center",
      backgroundColor: theme.palette.secondary.main,
      [theme.breakpoints.up("sm")]: {
        width: "50%"
      },
      [theme.breakpoints.up("md")]: {
        width: 500
      }
    },
    passport: {
      width: theme.spacing(20),
      height: theme.spacing(20)
    },
    divide: {
      margin: theme.spacing(2, 0),
      backgroundColor: theme.palette.primary.main
    },
    iconBtn: {
      color: theme.palette.primary.main
    },
    mainHead: {
      marginTop: theme.spacing(2)
    }
  })
);

const Contact = () => {
  const classes = useStyles();

  return (
    <div id="get-in-touch" className={classes.root + " page-section"}>
      <Paper className={classes.container} elevation={1}>
        <Grid container direction="row" justify="space-around" alignItems="center">
          <Grid item>
            <Avatar className={classes.passport} alt="Mustafa" src="/passport.png" />
          </Grid>
          <Grid item>
            <Typography className={classes.mainHead} variant="h3" gutterBottom>
              Mustafa Oladepo
            </Typography>
            <Typography variant="h4" gutterBottom>
              Osun, Nigeria
            </Typography>
            <a href="mailto:moladepo@outlook.com">
              <IconButton className={classes.iconBtn}>{IconPack.email}</IconButton>
            </a>
            <a href="https://wa.me/qr/56MY64WYPTSIL1">
              <IconButton className={classes.iconBtn}>{IconPack.whatsapp}</IconButton>
            </a>
            <a href="https://github.com/mistyjack">
              <IconButton className={classes.iconBtn}>{IconPack.github}</IconButton>
            </a>
            <a href="https://www.linkedin.com/in/mustafa-oladepo-51660772/">
              <IconButton className={classes.iconBtn}>{IconPack.linkedIn}</IconButton>
            </a>
          </Grid>
        </Grid>
        <Divider className={classes.divide} />
        <Grid container direction="row" justify="space-around" alignItems="center">
          <Grid item>
            <a href="tel:+2349056005401">
              <Typography variant="h6">
                <IconButton className={classes.iconBtn}>
                  <PhoneIcon />
                </IconButton>
                (905) 699-5401
              </Typography>
            </a>
          </Grid>
          <Grid item>
            <a href="mailto:moladepo@outlook.com">
              <Typography variant="h6">
                <IconButton className={classes.iconBtn}>
                  <MailIcon />
                </IconButton>
                moladepo@outlook.com
              </Typography>
            </a>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Contact;
