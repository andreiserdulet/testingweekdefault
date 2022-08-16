import * as React from 'react';
import './index.css';
import { titleBug02 , infoDescriptionBug02 } from "../../../data/data";

export function Bug02() {
    const [readMore, setRedMore] = React.useState({
        isTrue: false,
        count: 0,
    });
    return (
        <div className='bug02__container'>
            <h1>{ titleBug02 }</h1>
            <p>  {readMore.isTrue ? infoDescriptionBug02 : `${infoDescriptionBug02.substring(0, 200)}...`}
            <span
                disabled={readMore.count >= 2}
                onClick={()=> {
                setRedMore({...readMore, isTrue: true, count: readMore.count + 1});
            }}> {readMore.isTrue ? ' Show less' : ' Show more'}</span>
            </p>
        </div>
    )
}