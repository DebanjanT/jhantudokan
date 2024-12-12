import Navbar from "@/components/Navbar";
import {
  Box,
  Center,
  Container,
  Image,
  Separator,
  Text,
} from "@chakra-ui/react";
import jhantuface from "@/assets/jhantu_face.png";
const Contact = () => {
  return (
    <>
      <Navbar />
      <Container position={"relative"}>
        <Box
          bg={"green.500"}
          width={{
            base: "330px",
            md: "300px",
          }}
          zIndex={-1}
          borderRadius={"50%"}
          blur={"xl"}
          position={"absolute"}
          top={-100}
          left={-100}
          height={{
            base: "350px",
            md: "300px",
          }}
        />
        <Center>
          <Image
            src={jhantuface}
            alt="jhantu"
            dropShadow={"2xl"}
            objectFit={"cover"}
            width={{
              base: "300px",
              md: "400px",
            }}
          />
        </Center>
        <Separator />
        <Text
          className="bangla"
          color={"green.100"}
          textAlign={"center"}
          fontSize={{
            base: "xl",
            md: "2xl",
          }}
        >
          যে কোন প্রয়োজনে যোগাযোগ করুন
        </Text>
        <Separator />
      </Container>
    </>
  );
};

export default Contact;
