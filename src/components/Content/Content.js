import * as React from 'react';
import cucumber from '../../assets/cucumber.png'
import cypress from '../../assets/cypress.png'
import postmanLogo from '../../assets/postman-logo.png';
import jestLogo from '../../assets/jest-logo.png';
import jira from '../../assets/jira.png';
import karma from '../../assets/karma.png';
import selenium from '../../assets/selenium-logo.png';
import { motion} from "framer-motion";
import './index.css';

export default function Content({ children}) {
    return (
        <div className='content'>
            <div className='content--images-left'>
                    <motion.img
                        src={selenium}
                        alt='selenium'
                        className={'one'}/>
                    <motion.img
                        src={karma}
                        alt='karma'
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
                />
                <motion.img
                    src={cucumber}
                    alt='cucumber'
                    className={'seven'}/>
                <h2 className='eight'>Fast Framework</h2>
            </div>
        </div>
    )
}