import person01 from '../assets/person01.jpg';
import person02 from '../assets/person02.jpg';
import person03 from '../assets/person03.jpg';
//there's no person04 - Buzz Lightyear was dropped
import person05 from '../assets/person05.jpg';
import person06 from '../assets/person06.jpg';

import person07 from '../assets/person07.jpg';
import person08 from '../assets/person08.jpg'
import person09 from '../assets/person09.jpg';
import person10 from '../assets/person10.jpg';
import person11 from '../assets/person11.jpg';

export const swiperObj = [
    {
        id: 1,
        name: 'Dora Popa',
        jobTitle: 'Discipline Lead',
        description: 'I love testing',
        img: person01
    },
    {
        id: 2,
        name: 'Dorin Ruscea',
        jobTitle: 'Test Management Community Lead',
        description: 'I love testing more than the guy in the left',
        img: person02
    },
    {
        id: 3,
        name: 'Ana Nitescu',
        jobTitle: 'Discipline Lead',
        description: 'Testing is awesome',
        img: person06,
    },
    {
        id: 4,
        name: 'Gabriel Dima ',
        jobTitle: 'Test Automation - Community Lead',
        description: 'Testing is awesome',
        img: person08,
    },
    {
        id: 5,
        name: 'Alexandra Foltica',
        jobTitle: 'Stand In - Test Management',
        description: 'Testing is awesome',
        img: person03,
    },

    {
        id: 6,
        name: 'Andrei Zamfir',
        jobTitle: 'Test Management- Core Team',
        description: 'Testing is awesome',
        img: person05,
    },
    {
        id: 7,
        name: 'Valentin Sirbu',
        jobTitle: 'Test Management – Core Team',
        description: '',
        img: person07,
    },
    {
        id: 8,
        name: 'Andrei Serdulet',
        jobTitle: 'Developer-owner of Bug Hunting app',
        description: 'Good luck finding all the ... bugs',
        img: person10,
    },
    {
        id: 9,
        name: 'Andreea Epure',
        jobTitle: 'Test Management – Core Team',
        description: '',
        img: person09,
    },

    {
        id: 10,
        name: 'Alexandru Tomescu',
        jobTitle: 'Test Management- Core Team',
        description: '',
        img: person11,
    },

]


export const listObj = [
    {
        id: 1,
        label: `Always know what to test. Make sure you have the software requirements and acceptance criteria ready beforehand,`
    },
    {
        id: 2,
        label: `Make sure you have the necessary  about the part of the application you are testing. If you are not sure, ask business analyst, project manager, mentor, co-worker... 
        You <strike>MUST</strike> know how the application is suppose to be working,`
    },
    {
        id: 3,
        label: `Make sure you have the test data at you disposal - you will need it to test the software, any kind of software and any kind of test,
`
    },
    {
        id: 4,
        label: `Always try with exploratory testing - go through the part you are testing a couple of times to get yourself familiar with the feature you're testing,`
    },
    {
        id: 5,
        label: `Write a happy path test with appropriate test steps and descriptions,`
    },
    {
        id: 6,
        label: `Add validation testing and try to think of a scenario (several test steps) which could potentiality break the functionality,`
    },
    {
        id: 7,
        label: `When the feature is not working as it's suppose to work, that is called a "bug". Make sure you log the bug and add the precise steps so the developers can reproduce it,`
    },
    {
        id: 8,
        label: `Once the bug is fixed, always re-test it.`
    },
]
export const descriptionBug03 = `Before we can proceed with any kind of testing it is important to understand what and how to test it.`
export const titleBug03 = 'Testing procedures';
export const titleBug02 = 'Testing Discipline ';
export const infoDescriptionBug02 = `We use this space as the entry point for the fresh testers. We introduce manual testing and parts of automation as well. As a part of on-boarding process for our newly joined Endavans we have prepared several learning environments. We are using those sand-boxed environments to introduce the testing discipline to every new comer. There is a brief introduction to manual and automated testing, furthermore we explain some of the most common expressions, key words and technologies we use at our everyday tasks.`;