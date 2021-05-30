import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

import { createStyles, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MyCard from "../components/MyCard";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "100vh"
    },
    container: {
      minHeight: "100vh"
    }
  })
);

SwiperCore.use([Pagination, Navigation]);

const Projects = () => {
  const classes = useStyles();

  const projects = [
    { title: "Safewash", subheader: "May 2021 | 1 month", image: "/Safewash.png", description: "", link: "https://www.safewash-virid.vercel.app" },
    { title: "Turbo Express Delivery", subheader: "February 2021 | 1 month", image: "/turbo.png", description: "", link: "https://www.turboexpressdelivery.com" },
    { title: "Cali Trade", subheader: "October 2020 | 4 months", image: "/cali.png", description: "", link: "https://www.cali.trade" },
    { title: "Alex Mouth", subheader: "November 2021 | 1 month", image: "/alexmouth.png", description: "", link: "https://www.mouthalex.com" },
    { title: "Bitcoin Backend Wallet", subheader: "Sep 2020 | 1 month", image: "/bitcoin.png", description: "", link: "https://www.bitcoinbackendwallet.com" },
    { title: "Social Media App", subheader: "July 2020", image: "/tweet.png", description: "", link: "https://longer-tweet.netlify.app/" },
    { title: "Todo List", subheader: "June 2020", image: "/todolist.png", description: "", link: "https://github.com/mistyjack/pirple/tree/master/es6/project1" },
    { title: "Travel Site", subheader: "November 2019 | 1 month", image: "/travel.png", description: "", link: "https://travel-site-web.netlify.app/" }
  ];

  const myPagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  };

  return (
    <div id="projects" className={classes.root + " page-section"}>
      <Grid className={classes.container} container direction="column" justify="center">
        <Grid item>
          <Swiper slidesPerView={"auto"} centeredSlides={true} spaceBetween={30} pagination={myPagination} navigation={true} className="mySwiper">
            {projects.map(project => (
              <SwiperSlide key={project.title}>
                <MyCard item={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
