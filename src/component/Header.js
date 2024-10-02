import { Flex, Text, Button } from '@radix-ui/themes';

function Header() {
  return (
    <Flex direction="column" gap="2">
      <Text>Alexandre Lescot ePortfolio</Text>
      <Button>Let's go</Button>
    </Flex>
  );
}

export default Header