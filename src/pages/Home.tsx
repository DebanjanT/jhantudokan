import CaptionCarousel from "@/components/carousel";
import { Badge, Box, Flex, Heading, Separator, Text } from "@chakra-ui/react";
import video from "@/assets/pps_slomo.mp4";
import ReactPlayer from "react-player";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      <CaptionCarousel />
      <Heading
        className="bangla"
        textAlign={"center"}
        size={{
          base: "xl",
          md: "3xl",
        }}
        fontWeight={"bold"}
        pt={6}
        pb={1}
        color={"green.400"}
      >
        পিন্টু পান দোকানে আপনাকে স্বাগতম
      </Heading>
      <Separator />
      <Text
        fontSize={{
          base: "lg",
          md: "xl",
        }}
        textAlign={"center"}
        px={6}
        py={3}
        className="bangla"
      >
        এখানে চা, রকমারি সিগেরেট, পান এবং তার সাথে উৎকৃষ্ট মানের বিস্কুট, লেস ,
        কুড়কুড়ে, চকলেট, বেকারি কেক ও অন্নান্য বহুপ্রকার স্টেশনারি দ্রব্য
        সর্বনিম্ন দামে পাইবেন
      </Text>
      <Separator />
      <Flex p={6} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Badge colorPalette={"blue"} ml={6}>
            New Arrival
          </Badge>
          <Heading
            color={"green.400"}
            size={{
              base: "3xl",
              md: "5xl",
            }}
            px={6}
          >
            ☕চা
          </Heading>
          <Text
            fontSize={{
              base: "md",
              md: "xl",
            }}
            px={6}
            py={3}
            className="bangla"
          >
            জীবনটা ঠিক যেন এক কাপ চায়ের মতো, <br />
            তার স্বাদ ঠিক তেমনটাই হবে <br />
            যেমনটা আপনি সেটিকে বানাবেন।
          </Text>
        </Box>
        <ReactPlayer
          controls
          url={video}
          loop={true}
          playing={true}
          pip
          muted
        />
      </Flex>
    </div>
  );
};

export default Home;
