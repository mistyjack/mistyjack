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
    avatar: "/person.jpg",
    content:
      "I'm always impressed with the services. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    name: "Sandra Misty",
  },
  {
    avatar: "/person.jpg",
    content:
      "I'm always impressed with the services. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    name: "Sandra Misty",
  },
  {
    avatar: "/person.jpg",
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
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
