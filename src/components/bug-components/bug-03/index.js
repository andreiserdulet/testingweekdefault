import * as React from 'react';
import './index.css';
import { titleBug03, descriptionBug03, listObj } from "../../../data/data";
export function Bug03() {
    return (
            <div className='bug03__container'>
                <h2>
                    { titleBug03 }
                </h2>

                <p>
                    { descriptionBug03 }
                </p>
                <ul>
                    <li>1.Always know what to test. Make sure you have the software requirements and acceptance criteria ready beforehand,</li>
                    <li>2.Make sure you have the necessary  about the part of the application you are testing. If you are not sure, ask business analyst, project manager, mentor, co-worker...
                        <strike>You MUST know how the application is suppose to be working</strike>,</li>
                    <li>3.Make sure you have the test data at you disposal - you will need it to test the software, any kind of software and any kind of test,
                    </li>
                    <li>
                        4.Always try with exploratory testing - go through the part you are testing a couple of times to get yourself familiar with the feature you're testing,
                    </li>
                    <li>
                        6.Write a happy path test with appropriate test steps and descriptions,
                    </li>
                    <li>
                        7.Add validation testing and try to think of a scenario (several test steps) which could potentiality break the functionality,
                    </li>
                    <li>
                        8.When the feature is not working as it's suppose to work, that is called a bug. Make sure you log the bug and add the precise steps so the developers can reproduce it,
                    </li>
                    <li>
                        9.Once the bug is fixed, always re-test it.
                    </li>
                </ul>
                <marquee>You should check also the confluence page for more info: <a target="_blank" href='https://icanhazdadjoke.com/'>Confluence Page</a></marquee>
            </div>
    )
}