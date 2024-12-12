import { Button, Flex, Image } from "@chakra-ui/react";
import paan from "@/assets/paan.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        shadow={"md"}
        zIndex={99}
        position={"sticky"}
        top={0}
        bg={"green.700"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={6}
        py={3}
      >
        <Flex
          alignItems={"center"}
          gap={1}
          onClick={() => navigate("/")}
          cursor={"pointer"}
        >
          <Image
            src={paan}
            alt="naruto"
            objectFit="cover"
            width={7}
            height={7}
          />

          <p>Pintu Paan Stall</p>
        </Flex>
        <Button
          onClick={() => navigate("/contact")}
          bg={"green.600"}
          variant={"subtle"}
        >
          Contact
        </Button>
      </Flex>
    </>
  );
};

export default Navbar;
