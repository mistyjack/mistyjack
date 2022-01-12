import styles from "./Home.module.css";
import clsx from "clsx";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import TestimonialItem from "./TestimonialItem";
import { useContext, useEffect, useRef } from "react";
import { ContextState, ActionKind } from "../types/CommonProps";
import { MyContext } from "../../../pages/_app";

SwiperCore.use([Autoplay, Pagination]);

const testimonials_content = [
  {
    avatar:
      "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/agbaj_1__eN_qjo18r.jpeg?updatedAt=1641977821777",
    content:
      "Working with Mustafa was quite an interesting one as he is really understanding and gets to deliver more than expected, He is an enthusiastic developer and I would work with him again.",
    name: "CEO Agbaj Stores",
  },
  {
    avatar:
      "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/munir1_ITkucfm1xv.jpg?updatedAt=1641978336769",
    content:
      "I've known Mustafa for a long time and in that time he has never not delivered. He's the most intelligent, efficient and industrious person I know and his inclusion in a project simplifies it by an enormous degree due to his professionalism. Mustafa is such a good team player that he always cover for his lacking colleagues and gets the work done anyway. He has great leadership skills and exhibits it without arrogance and with empathy.",
    name: "Yusuf Munir",
  },
  {
    avatar:
      "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/feer_5BGU_V61cD.png?updatedAt=1641978337310",
    content:
      "I'm always impressed with the services. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    name: "Sandra Misty",
  },
];

const Testimonials = () => {
  const sectionArea = useRef<HTMLElement | null>(null);
  const myState = useContext<ContextState | null>(MyContext);

  return (
    <section
      ref={sectionArea}
      className={clsx(styles.testimonials_background, "page-section")}
      id="testimonials"
    >
      <Container>
        <Box
          sx={{
            textAlign: "center",
            py: 10,
            color: (theme) =>
              theme.palette.getContrastText(theme.palette.primary.light),
          }}
        >
          <Box sx={{ mb: 10, maxWidth: 570, mx: "auto" }}>
            <Typography variant="h2" gutterBottom>
              Testimonials
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 770, mx: "auto" }}>
            <Swiper autoplay pagination={{ clickable: true }}>
              {testimonials_content.map((item, index) => (
                <SwiperSlide key={index}>
                  <TestimonialItem
                    avatar={item.avatar}
                    content={item.content}
                    name={item.name}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Testimonials;
