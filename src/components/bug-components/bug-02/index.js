import * as React from 'react';
import './index.css';
import { titleBug02 , infoDescriptionBug02 } from "../../../data/data";

export function Bug02() {
    const [readMore, setRedMore] = React.useState({
        isTrue: false,
    });
    return (
        <div className='bug02__container'>
            <h1>{ titleBug02 }</h1>
            <p>  {readMore.isTrue ? infoDescriptionBug02 : `${infoDescriptionBug02.substring(0, 200)}...`}
            <span
                onClick={()=> {
                setRedMore({...readMore, isTrue: !readMore.isTrue});
            }}> {readMore.isTrue ? ' Show less' : ' Show more'}</span>
            </p>
        </div>
    )
}