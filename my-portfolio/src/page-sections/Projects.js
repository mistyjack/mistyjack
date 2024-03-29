import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

import { createStyles, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import MyCard from "../components/MyCard";
import IconButton from "@material-ui/core/IconButton";
import BuildIcon from "@material-ui/icons/Build";
import Zoom from "react-reveal/Zoom";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      paddingTop: theme.spacing(15),
      flexGrow: 1,
      minHeight: "100vh"
    },
    container: {
      minHeight: "100vh"
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

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Projects = () => {
  const classes = useStyles();

  const projects = [
    { title: "BigA Ecommerce", subheader: "October 2021 | 3 months", image: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/biga_landing_Jo1mxyd1LS.png?updatedAt=1635155116468", description: "", link: "https://www.biga.africa", avatar: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/biga_logo_mkb5t60hO1he.svg?updatedAt=1635155247383" },
    { title: "Safewash", subheader: "May 2021 | 1 month", image: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/Safewash_v_0tltDYw.png", description: "", link: "https://bqglobalsolutions.com", avatar: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/asafewash_Ftcdn2RYR.png" },
    { title: "Turbo Express Delivery", subheader: "February 2021 | 1 month", image: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/turbo_F-aPLrLqW.png", description: "", link: "https://www.turboexpressdelivery.com", avatar: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/aturbo_OZbppx3DUKn.png" },
    { title: "Cali Trade", subheader: "October 2020 | 4 months", image: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/cali_dcacvR8fjwbl.png", description: "", link: "https://www.cali.trade", avatar: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/acali_zy0MQKLGH.png" },
    { title: "Alex Mouth", subheader: "November 2021 | 1 month", image: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/alexmouth_QnLI8JEbhT.png", description: "", link: "https://www.mouthalex.com" },
    { title: "Bitcoin Backend Wallet", subheader: "Sep 2020 | 1 month", image: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/bitcoin_aNnnbTh2w.png", description: "", link: "https://www.bitcoinbackendwallet.com" },
    { title: "Social Media App", subheader: "July 2020", image: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/tweet_cmP_VhJbeGv.png", description: "", link: "https://longer-tweet.netlify.app/" },
    { title: "Todo List", subheader: "June 2020", image: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/todolist_IapcEQldjknS.png", description: "", link: "https://github.com/mistyjack/pirple/tree/master/es6/project1" },
    { title: "Travel Site", subheader: "November 2019 | 1 month", image: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/travel_4MBWx0qKX.png", description: "", link: "https://travel-site-web.netlify.app/" }
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  };

  return (
    <div id="projects" className={classes.root + " page-section"}>
      <Zoom>
        <Typography className={classes.heading + " headline"} color="secondary" variant="h2">
          <IconButton edge="start" color="inherit" aria-label="Build">
            <span className="material-icons" aria-hidden="true">
              Build Icon
            </span>
            <BuildIcon className={classes.icon} />
          </IconButton>
          My Recent Works
        </Typography>
      </Zoom>

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
