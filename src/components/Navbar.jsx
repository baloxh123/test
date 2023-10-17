import {
  Container,
  Box,
  Image,
  Text,
  Link,
  Button,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { Menu, Search } from "lucide-react";
import NavMenu from "./NavMenu";

function Navbar() {
  return (
    <Container bg="gray.50" maxW="full" position="absolute">
      <Container maxW="container.lg">
        <HStack w="full" justifyContent="space-between" alignItems="center" py={4}>
          <HStack alignItems="center">
            <Image src="./medical-kit.svg" w={26} />
            <Text fontWeight="bold">Med World</Text>
          </HStack>
          <HStack fontWeight="bold" gap={5} color="gray.600">
            <Link display={["none", "none", "block"]} href="/#about">About Us</Link>
            <Link display={["none", "none", "block"]} href="/#services">Services</Link>
            <Link display={["none", "none", "block"]} href="/#contact">Contact Us</Link>
            <Button size="sm">Login</Button>
            <Button size="sm">Sign Up</Button>
            <NavMenu />
          </HStack>
        </HStack>
      </Container>
    </Container>
  );
}

export default Navbar;
