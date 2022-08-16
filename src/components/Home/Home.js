import * as React from 'react';
import Timer from "../Timer/Timer";
import * as Problem from '../bug-components/index';
import Header from "../Header/Header";
import Content from "../Content/Content";

export default function Home() {


    return (
        <div style={{display:'flex'}}>
            <Header>
                <Problem.Bug01/>
            </Header>
            <Content>
                <Problem.Bug02/>
                <hr></hr>
                <Problem.Bug03/>
                <hr></hr>
                <Problem.Bug04/>
                <Problem.Bug05/>
            </Content>

        </div>
    )
}