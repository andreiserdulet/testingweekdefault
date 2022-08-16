import * as React from 'react';
import cucumber from '../../assets/cucumber.png'
import selenium from '../../assets/selenium-logo.png'
import cypress from '../../assets/cypress.png'
import postmanLogo from '../../assets/postman-logo.png';
import jestLogo from '../../assets/jest-logo.png';
import jira from '../../assets/jira.png';
import { motion} from "framer-motion";
import './index.css';

export default function Content({ children}) {
    const dragConstraints = { top: 0, bottom: 0, right: 0, left: 0 };
    return (
        <div className='content'>
            <div className='content--images-left'>
                    <motion.img
                        src={cucumber}
                        alt='selenium'
                        className={'one'}/>
                    <motion.img
                        src={selenium}
                        alt='selenium'
                        drag
                        className={'two'}/>
                    <motion.img
                        src={cypress}
                        alt='cypress'
                        className={'three'}
                    />
                    <motion.img
                        src={postmanLogo}
                        alt='postman-logo'
                        className={'four'}/>

            </div>
            <div className='content--main'>
                { children }
            </div>
            <div className='content--images-right'>
                <motion.img
                    src={jestLogo}
                    alt='jest-logo'
                    className={'five'}/>
                <motion.img
                    src={jira}
                    alt='jira'
                    className={'six'}
                    drag
                    dragConstraints={dragConstraints}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    dragElastic={0.5}
                />
                <motion.img
                    src={cucumber}
                    alt='cucumber'
                    className={'seven'}/>
                <motion.img
                    src={cucumber}
                    alt='cucumber'
                    className={'eight'}/>
            </div>
        </div>
    )
}