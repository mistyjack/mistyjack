import { createStyles, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      maxWidth: 600,
      margin: "auto"
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    avatar: {
      backgroundColor: theme.palette.primary.main
    },
    btn: {
      position: "relative",
      textTransform: "none",
      color: theme.palette.primary.main
    }
  })
);

const MyCard = ({ item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" alt={item.title} src={item.avatar ? item.avatar : ""} className={classes.avatar}>
            {item.title[0]}
          </Avatar>
        }
        title={item.title}
        subheader={item.subheader}
      />
      <CardMedia className={classes.media} image={item.image} title={item.title} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions style={{ zIndex: 100000, position: "relative" }} disableSpacing>
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <Button classes={{ root: classes.btn }} size="small" color="primary">
            Visit page
          </Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default MyCard;
