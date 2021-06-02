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
import Zoom from "react-reveal/Zoom";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      minHeight: "100vh",
      position: "relative",
      padding: theme.spacing(15, 0)
    },
    container: {
      margin: "auto",
      padding: theme.spacing(3),
      width: "100%",
      textAlign: "center",
      backgroundColor: theme.palette.common.white,
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
      marginTop: theme.spacing(2),
      color: theme.palette.primary.main
    },
    heading: {
      textAlign: "center",
      paddingBottom: theme.spacing(7)
    },
    icon: {
      fontSize: 55
    }
  })
);

const Contact = () => {
  const classes = useStyles();

  return (
    <div id="get-in-touch" className={classes.root + " page-section"}>
      <Zoom>
        <Typography className={classes.heading + " headline"} color="secondary" variant="h2">
          <IconButton edge="start" color="inherit" aria-label="Mail">
            <span className="material-icons" aria-hidden="true">
              Mail Icon
            </span>
            <MailIcon className={classes.icon} />
          </IconButton>
          Get in Touch
        </Typography>
      </Zoom>
      <Paper className={classes.container} elevation={1}>
        <Grid container direction="row" justify="space-around" alignItems="center">
          <Grid item>
            <Avatar className={classes.passport} width={1320} height={1368} alt="Mustafa" src="https://ik.imagekit.io/7wpxe2myx/Mistyjack/passport_zOtmXzmmMW.png" />
          </Grid>
          <Grid item>
            <Zoom>
              <Typography className={classes.mainHead} variant="h3" gutterBottom>
                Mustafa Oladepo
              </Typography>
            </Zoom>
            <Zoom>
              <Typography variant="h4" gutterBottom>
                Osun, Nigeria
              </Typography>
            </Zoom>
            <a href="mailto:moladepo@outlook.com">
              <IconButton className={classes.iconBtn} edge="start" color="inherit" aria-label="mail">
                <span className="material-icons" aria-hidden="true">
                  Mail Icon
                </span>
                {IconPack.email}
              </IconButton>
            </a>
            <a href="https://wa.me/qr/56MY64WYPTSIL1">
              <IconButton className={classes.iconBtn} edge="start" color="inherit" aria-label="whatsapp">
                <span className="material-icons" aria-hidden="true">
                  Whatsapp Icon
                </span>
                {IconPack.whatsapp}
              </IconButton>
            </a>
            <a href="https://github.com/mistyjack">
              <IconButton className={classes.iconBtn} edge="start" color="inherit" aria-label="github">
                <span className="material-icons" aria-hidden="true">
                  Github Icon
                </span>
                {IconPack.github}
              </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/mustafa-oladepo-51660772/">
              <IconButton className={classes.iconBtn} edge="start" color="inherit" aria-label="linkedin">
                <span className="material-icons" aria-hidden="true">
                  LinkedIn Icon
                </span>
                {IconPack.linkedIn}
              </IconButton>
            </a>
          </Grid>
        </Grid>
        <Divider className={classes.divide} />
        <Zoom>
          <Grid container direction="row" justify="space-around" alignItems="center">
            <Grid item>
              <a href="tel:+2349056005401">
                <Typography variant="h5">
                  <IconButton className={classes.iconBtn} edge="start" color="inherit" aria-label="phone">
                    <span className="material-icons" aria-hidden="true">
                      Phone Icon
                    </span>
                    <PhoneIcon />
                  </IconButton>
                  +234 905 699 5401
                </Typography>
              </a>
            </Grid>
            <Grid item>
              <a href="mailto:moladepo@outlook.com">
                <Typography variant="h5">
                  <IconButton className={classes.iconBtn} edge="start" color="inherit" aria-label="email">
                    <span className="material-icons" aria-hidden="true">
                      Mail Icon
                    </span>
                    <MailIcon />
                  </IconButton>
                  moladepo@outlook.com
                </Typography>
              </a>
            </Grid>
          </Grid>
        </Zoom>
      </Paper>
    </div>
  );
};

export default Contact;
