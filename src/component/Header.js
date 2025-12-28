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
                <Heading size="5" weight="medium" mt="2"> <Text className='kalam-bold'>Projet Professionnel Personnel</Text> </Heading>
                <Flex
                    gap="3">
                    <a href="/Alexandre_Lescot_CV_FR.pdf"><Button variant='surface' style={{ "max-width": "100px" }}>CV 🇫🇷</Button> </a>
                    <a href="/Alexandre_Lescot_CV_EN.pdf"><Button variant='surface' style={{ "max-width": "100px" }}>CV 🇬🇧</Button> </a>
                    <a href="/PPP.pdf">
                        <Button
                            variant="solid"
                            color="blue"
                            style={{ minWidth: "140px" }}
                        >
                            📄 Support PDF
                        </Button>
                    </a>
                </Flex>
            </Flex>

            <img src={template} className='ImageHeader' />

        </Flex>
    );
}

export default Header