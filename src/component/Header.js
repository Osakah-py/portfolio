import { Flex, Text, Button } from '@radix-ui/themes';

function Header() {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>
    </Flex>
  );
}

export default Header