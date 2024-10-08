import { Text, Flex, Box, Section, Container, Heading } from '@radix-ui/themes';

import '../styles/Header.css'
import template from "../assets/template.png"

function Header() {
    return (
        <Flex 
        direction="row" 
        wrap="wrap"
        align="center"
        className='HeaderRoot'
        style={{"justify-content" : 'space-evenly'}}
        >
            <Box>
                <Heading size="8">Alexandre Lescot</Heading>
                <Text>1A FISE ENSEEIHT </Text>                 
            </Box>
            <Box className='ImageHeader'>
                <img src={template}   style={{"min-height" : "750px", "height" : "75dvh"}}/>
            </Box>
        </Flex>
    );
}

export default Header