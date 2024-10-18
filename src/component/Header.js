import { Text, Flex, Button, Em, Heading } from '@radix-ui/themes';

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
                direction="column"
                gap="5">
                <Heading size="9" weight="bold" > 
                    <Text className='kalam-bold'>Alexandre </Text>
                    <Em>Lescot</Em>
                    </Heading>
                <Text as='p'> Hi ! I'm <Em>Alexandre</Em>, a passionate computer science student at <Em>ENSEEIHT</Em> </Text>
                <Flex
                    gap="3">
                <Button variant='surface' style={{"max-width" : "100px"}}>CV 🇫🇷</Button>         
                <Button variant='surface' style={{"max-width" : "100px"}}>CV 🇬🇧</Button>     
                </Flex>    
            </Flex>
            
                <img src={template} className='ImageHeader'/>
            
        </Flex>
    );
}

export default Header