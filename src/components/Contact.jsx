import {
  VStack,
  Container,
  Heading,
  Input,
  Text,
  Button,
  Textarea,
  Box
} from "@chakra-ui/react";

function Contact() {
  return (
    <Container maxW="full" id="contact">
      <Container maxW="container.lg" py={20}>
        <VStack justifyContent="center" alignItems="center" textAlign="center" gap={10}>
          <Box>
            <Heading color="primary.500">Contact Us</Heading>
            <Text color="gray.500" maxW="md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam.
            </Text>
          </Box>
          <VStack spacing={4} w="full" maxW="sm" alignItems="flex-start">
            <Input placeholder="Enter your name" w="full" maxW="sm" />
            <Input placeholder="Enter your email" w="full" maxW="sm" />
            <Textarea
              placeholder="Enter your message"
              w="full"
              maxW="sm"
              resize="none"
            />
            <Button colorScheme="primary" w="full" maxW="sm">
              Submit
            </Button>
          </VStack>
        </VStack>
      </Container>
    </Container>
  );
}

export default Contact;
