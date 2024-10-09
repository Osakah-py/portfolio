import { Text, Flex, Box, Button, Em, Heading } from '@radix-ui/themes';

import '../styles/Header.css'
import template from "../assets/template.png"

function Header() {
    return (
        <Flex 
        direction="row" 
        wrap="wrap"
        align="center"
        justify="center"
        gap="8"
        className='HeaderRoot'
        >
            <Flex
                direction="column">
                <Heading size="9" weight="bold" > 
                    <Text className='kalam-bold'>Alexandre </Text>
                    <Em>Lescot</Em>
                    </Heading>
                <Text as='p'> Hi ! I'm <Em>Alexandre</Em>, a Computer science student at <Em>ENSEEIHT</Em> </Text>
                <Button variant='surface' style={{"margin" : "10px 50px"}}>CV</Button>         
            </Flex>
            <Box className='ImageHeader' p="0">
                <img src={template}   style={{"min-height" : "750px", "height" : "75dvh"}}/>
            </Box>
        </Flex>
    );
}

export default Header