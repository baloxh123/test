import {
  Container,
  Text,
  Heading,
  VStack,
  HStack,
  Image,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";

function About() {
  return (
    <Container maxW="full" id="about">
      <Container maxW="container.lg" py={20}>
        <SimpleGrid columns={[1, 1, 1]} spacing={10}>
          <Box w="full" h="full" rounded="lg" overflow="hidden">
            <Image src="./about-bg.jpg" w="full" h="full" objectFit="cover" />
          </Box>
          <VStack gap={6} alignItems="flex-start">
            <Box>
              <Heading color="primary.500">ABOUT US</Heading>
              <Text fontSize="lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo con Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatu.
              </Text>
            </Box>
            <Box>
              <Heading fontSize="2xl" color="primary.500">
                01
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </Text>
            </Box>
            <Box>
              <Heading fontSize="2xl" color="primary.500">
                02
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </Text>
            </Box>
          </VStack>
        </SimpleGrid>
      </Container>
    </Container>
  );
}

export default About;
