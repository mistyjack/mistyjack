import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

import { createStyles, makeStyles } from "@material-ui/core";
import MyCard from "../components/MyCard";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      paddingTop: theme.spacing(15),
      flexGrow: 1,
      height: "100vh"
    },
    container: {
      minHeight: "100vh"
    }
  })
);

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Projects = () => {
  const classes = useStyles();

  const projects = [
    { title: "Safewash", subheader: "May 2021 | 1 month", image: "/Safewash.png", description: "", link: "https://www.safewash-virid.vercel.app", avatar: "/asafewash.png" },
    { title: "Turbo Express Delivery", subheader: "February 2021 | 1 month", image: "/turbo.png", description: "", link: "https://www.turboexpressdelivery.com", avatar: "/aturbo.png" },
    { title: "Cali Trade", subheader: "October 2020 | 4 months", image: "/cali.png", description: "", link: "https://www.cali.trade", avatar: "acali.png" },
    { title: "Alex Mouth", subheader: "November 2021 | 1 month", image: "/alexmouth.png", description: "", link: "https://www.mouthalex.com" },
    { title: "Bitcoin Backend Wallet", subheader: "Sep 2020 | 1 month", image: "/bitcoin.png", description: "", link: "https://www.bitcoinbackendwallet.com" },
    { title: "Social Media App", subheader: "July 2020", image: "/tweet.png", description: "", link: "https://longer-tweet.netlify.app/" },
    { title: "Todo List", subheader: "June 2020", image: "/todolist.png", description: "", link: "https://github.com/mistyjack/pirple/tree/master/es6/project1" },
    { title: "Travel Site", subheader: "November 2019 | 1 month", image: "/travel.png", description: "", link: "https://travel-site-web.netlify.app/" }
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  };

  return (
    <div id="projects" className={classes.root + " page-section"}>
      <Swiper slidesPerView={1} pagination={pagination} autoplay navigation>
        {projects.map(project => (
          <SwiperSlide key={project.title}>
            <MyCard item={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
