import { Text, Flex, Box, Section, Container } from '@radix-ui/themes';

function Header() {
    return (
        <Flex direction="column" gap="2">
            <Box
                py="8"
                style={{ backgroundColor: 'var(--gray-a2)', borderRadius: 'var(--radius-3)', width:'100vw', height:'100vw'}}
            >
                    <Section size="2" />
                    <Container size="1" >
                <Text>Alexandre Lescot </Text>
                </ Container>       
                
            </Box>
        </Flex>
    );
}

export default Header