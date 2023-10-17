import {
  Container,
  Image,
  Box,
  VStack,
  Text,
  Heading,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

function Hero() {
  return (
    <SimpleGrid columns={[1, 1, 2]} maxW="full" minH="600px">
      <VStack
        w="full"
        h="full"
        top={0}
        left={0}
        zIndex={10}
        color="black"
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        padding={10}
        
      >
        <Heading fontSize={["2xl", "3xl", "4xl"]} pt={["80px", null, 0]} fontWeight="bold">
          A Dedicated Team To Grow Your Health
        </Heading>
        <Text fontSize="xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
          perspiciatis eveniet ad dicta rerum eligendi esse quis nostrum
          voluptas aut.
        </Text>
        <Button>Get Started</Button>
      </VStack>
      <Box className="w-full">
        <Image src="./hero-bg.jpg" h="full" w="full" objectFit="cover" />
      </Box>
    </SimpleGrid>
  );
}

export default Hero;
