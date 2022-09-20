import styles from "./Home.module.css";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialItem from "./TestimonialItem";

SwiperCore.use([Autoplay, Pagination]);

const testimonials_content = [
  {
    avatar:
      "https://ik.imagekit.io/7wpxe2myx/Mistyjack/MrObi_PqZhyuExR.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1663712817140",
    content:
      "Mustafa Oladepo is a positive-minded, energetic, and reliable asset to have in a team. His skills span from front-end to full stack including; implementing front-end designs using the most recent and compatible tech stack, APIs implementation and development, and AWS infrastructure management. His growth, quick learning, and eagerness to take up tasks while collaborating with team members and external stakeholders to deliver tasks efficiently and timely make him outstanding. He has shown to be up-to-date on emerging technologies. I am sure Mustafa will be a great asset to any team. Happy to recommend him.",
    name: "Obinna Madugba",
    position: "Manager, Business Process Technologies",
    link: "https://www.linkedin.com/in/obinnamadugba"
  },
  {
    avatar:
      "https://ik.imagekit.io/7wpxe2myx/Mistyjack/Abdullah_p7hep4cJ4j.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1663712817006",
    content:
      "Mustafa is an highly skilled Software Engineer with experience in different programming languages and tools. With reserved personality and strong work ethics while working together as teammates, he has repeatedly proved reliable, knowledgeable, solution-driven, a valuable contributor and most importantly, time conscious.",
    name: "Abdullah Oladipo",
    position: "Former Co-worker, Business Process Technologies",
    link: "https://www.linkedin.com/in/abdulloooh"
  },
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
      className={styles.testimonials_background}
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
                    position={item.position ? item.position : undefined}
                    link={item.link ? item.link : undefined}
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
