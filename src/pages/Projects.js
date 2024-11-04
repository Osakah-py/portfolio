import { useEffect } from 'react';
import { Flex, Box, Text, Heading } from '@radix-ui/themes';

import ProjectPresentation from '../component/ProjectPresentation';

import '../styles/Page.css'

import { projectsContent } from '../data/projectsContent';

function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <Flex
        direction="column"
        gap="9">
            <Flex className='Title'
                direction="column"
                gap="3">
                <Heading as='h1' size="9"> Projects </Heading>
                <Text>
                    From simple programs to complex web interfaces, during my two years at ENSEEIHT I had
                    the opportunity to work on a bunch of different computer science projects. You will 
                    find all of them on this page. 
                </Text>
                <Text> 
                As I'm also a film fan, I've had the opportunity to take part in several audiovisual projects. 
                I joined my school's TVn7 audiovisual association to improve my skills in this area.
                </Text>
            </Flex>
            {projectsContent.map((proj, index) => 
                <ProjectPresentation
                    name={proj.name}
                    type={proj.type}
                    image={proj.image}
                    text1={proj.text1}
                    text2={proj.text2}
                    index={index} />)}
        </Flex>
    )

}

export default Projects