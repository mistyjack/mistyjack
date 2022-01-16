import styles from "./Home.module.css";
import clsx from "clsx";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import TestimonialItem from "./TestimonialItem";

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
      "Mustafa's learning spirit is one I cherish and hope to imitate. His art of dispensing what he knows without a fault is really unique. He's dedicated to offering his full abilities and attention to an almost perfect degree. Absolutely a nice guy to work with in terms of being considerate with me as a student, understanding with co-workers and positive attitude to things in general.",
    name: "Firdaus Lawal",
  },
];

const Testimonials = () => {
  return (
    <section
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
            <Swiper autoplay pagination={{ clickable: true }} loop={true}>
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
