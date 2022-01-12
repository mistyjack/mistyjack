import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import useMediaQuery from "@mui/material/useMediaQuery";

const itemData = [
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/biga-search_iphone12minired_portrait_CpWf0a_9i.png?updatedAt=1642017883866",
    title: "Market Search",
    link: "https://www.biga.africa/market",
  },
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/market_imac2013_left_eWnQMJ45x.png?updatedAt=1642017844904",
    title: "Market",
    link: "https://www.biga.africa/market",
  },
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/market-search_imac2013_left_S5x6AbLN3h7.png?updatedAt=1642017843404",
    title: "Market",
    link: "https://www.biga.africa/market",
  },
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/tecblu-mob_iphone12minired_portrait_ufwWZdTLJbc.png?updatedAt=1642017867911",
    title: "Tecblu",
    link: "https://tec-blu-demo.vercel.app",
  },
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/safewash_dell-xps15-front_FBWKQjO8D.png?updatedAt=1642020390965",
    title: "Safewash",
    link: "https://bqglobalsolutions.com",
  },
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/market_imac2013_front_c6NOukh1MA4.png?updatedAt=1642017859679",
    title: "BigA Market",
    link: "https://www.biga.africa/user/profile",
  },
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/farmer-dashboard_dell-xps15-front_cDhHf2bMse.png?updatedAt=1642020379870",
    title: "Farmer Dashboard",
    link: "https://www.biga.africa/scout/auth/signin",
  },
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/biga-promo_dell-xps13-front_RxphQ2Vel.png?updatedAt=1642017846680",
    title: "BigA",
    link: "https://www.biga.africa",
  },
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/market_imac2013_right_eCGz251GU.png?updatedAt=1642017845510",
    title: "Market",
    link: "https://www.biga.africa/market",
  },
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/Online_shopping_for_farm_produce_-_Big_A_dell-xps13-front_icEagVRQtM.png?updatedAt=1642017856333",
    title: "BigA",
    link: "https://www.biga.africa",
  },
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/safewash3_dell-xps15-front_vsNiL67vei9.png?updatedAt=1642020391869",
    title: "Safewash",
    link: "https://bqglobalsolutions.com",
  },
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/market-search_imac2013_front_CudObLNF-.png?updatedAt=1642017851808",
    title: "Market",
    link: "https://www.biga.africa/market",
  },
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/safewash-mob1_iphone12miniblack_portrait_k6XNRzURoH.png?updatedAt=1642018056546",
    title: "Safewash Mobile",
    link: "https://www.bqglobalsolutions.com",
  },
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/safewash1_dell-xps15-front_znT1QDAzs.png?updatedAt=1642020391772",
    title: "Safewash",
    link: "https://bqglobalsolutions.com",
  },
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/biga-mobile-menu_iphone12minired_portrait_wFwPspA9v.png?updatedAt=1642017864997",
    title: "User Menu",
    link: "https://www.biga.africa/user/profile",
  },
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/biga-search2_iphone12minired_portrait_s0XrI3f6L8.png?updatedAt=1642017883750",
    title: "Market Search",
    link: "https://www.biga.africa/market",
  },
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/safewash-mob_iphone12miniblack_portrait_OQq-D7RiF.png?updatedAt=1642018053350",
    title: "Safewash Mobile",
    link: "https://www.bqglobalsolutions.com",
  },
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/portfolio_iphone12miniblue_portrait_2Cje9bN3Q3.png?updatedAt=1642017853356",
    title: "My Profile Menu",
    link: "https://www.misty.ng",
  },
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/farmer-signin_dell-xps15-front_pswGhTyKhI.png?updatedAt=1642020393061",
    title: "Farmer Login",
    link: "https://www.biga.africa/scout/auth/signin",
  },
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/market-search_imac2013_right_FWNQDWht4.png?updatedAt=1642017843515",
    title: "Market",
    link: "https://www.biga.africa/market",
  },
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/safewash2_dell-xps15-front_DgrbJKqM5.png?updatedAt=1642020389025",
    title: "Safewash",
    link: "https://bqglobalsolutions.com",
  },
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/Home_TecBlu_dell-xps13-front_0-AFHNhreZY.png?updatedAt=1642017808185",
    title: "Tecblu",
    link: "https://tec-blu-demo.vercel.app",
  },
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/biga-market-mob_iphone12miniblue_portrait_XXeYU9B3i.png?updatedAt=1642017874749",
    title: "BigA Market",
    link: "https://www.biga.africa/market",
  },
  {
    img: "https://ik.imagekit.io/7wpxe2myx/Mistyjack/v2/projects/biga-filter_iphone12miniblue_portrait_ZUIXBh2M5.png?updatedAt=1642017857451",
    title: "Mobile Filter",
    link: "https://www.biga.africa/market",
  },
];

const PortfolioItem = () => {
  const matches = useMediaQuery("(min-width: 600px)");

  return (
    <ImageList variant="masonry" cols={matches ? 3 : 1} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            sx={{ textAlign: "center" }}
            position="below"
            title={
              <a target="_blank" rel="noopener noreferrer" href={item.link}>
                {item.title}
              </a>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default PortfolioItem;
