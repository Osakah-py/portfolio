import { Flex, Box, Text, Heading } from '@radix-ui/themes';

import ProjectPresentation from '../component/ProjectPresentation';

import '../styles/Page.css'

function Projects() {
    return (
        <Flex
        direction="column"
        gap="9">
            <Flex className='Title'
                direction="column"
                gap="3">
                <Heading as='h1' size="9"> Projects </Heading>
                <Text>From simple programs to complex web interfaces, during my two years at ENSEEIHT I had
                    the opportunity to work on a bunch of different computer science projects. You will 
                    find all of them on this page. </Text>
            </Flex>
            <ProjectPresentation />
        </Flex>
    )

}

export default Projects