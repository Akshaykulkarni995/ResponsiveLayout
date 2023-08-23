import { Box } from "@mui/material";
import BoxItems from "./home/BoxItems";
import HomeTop from "./home/HomeTop";
import ImageItems from "./home/ImageItems";

export interface ItemsProps {
  buttonText: string;
  description?: string;
  imageUrl?: string;
}

const boxItems = {
  title: "Our rock solid services",
  details: [
    {
      description: "BIG ROCKS HERE",
      imageUrl: "",
      buttonText: "WHY SHOULD I CARE?",
    },
    {
      description: "",
      imageUrl: require("../assets/images/stephen-crane.png"),
      buttonText: "ABOUT THE ROCKS",
    },
    {
      description: "BIG ROCKS HERE",
      imageUrl: "",
      buttonText: "AT THE SEASHORE?",
    },
  ],
};

export interface imageDataProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
}

const imageItem = {
  imageUrl: require("../assets/images/stephen-crane.png"),
  title: "MEET OUR ROCKS",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini",
  buttonText: "THEY HAVE PERSONALITIES",
};

const Home = () => {
  return (
    <Box>
      <HomeTop />
      <BoxItems items={boxItems} />
      <ImageItems imageData={imageItem} />
    </Box>
  );
};

export default Home;
