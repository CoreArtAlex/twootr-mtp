import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {StylePost} from './styles/Post.styles';

export default function Post(){
    // Use UseEffect & Axios to obtain the UserName from User.jsx
    // & Compose data from Compose.jsx

    const [twoots, setTwoots] = useState([]);

    useEffect(() => {
        axios.get('/twoots').then((res) => {
            // console.log('get categories data', res.data);
            setTwoots(res.data); 
        });
    }, []);

    const changeStyle = (event) => {
        if (event.currentTarget.style.color) {
            event.currentTarget.style.color = null;
        } else {
            event.currentTarget.style.color = "#f73d93";
        }
    }

    let newPost = twoots.map((twoot) => {
        // console.log(twoot);
        const dtNow = new Date();
        const dtTwoot = new Date(twoot.dateAdded);
        const daysOfTwoot = Math.round((dtNow - dtTwoot) / (1000 * 3600 * 24));
        return (
        <div className="twoot" key={twoot._id}>
            <div className="user">
                <div className="user-left">
                    <img src={`https://avatars.dicebear.com/api/bottts/${twoot.authorSlug}.svg`} alt="" />
                    <label>{twoot.author}</label>
                </div>
                <label>@{twoot.authorSlug}</label>
            </div>
            <p>{twoot.content}</p>
            <div className='twoot-footer'>
                <label>Twooted {daysOfTwoot} days ago.</label>
                <div className="icons">
                    <i className="fa fa-flag" onClick={changeStyle}></i>
                    <i className="fa fa-retweet" onClick={changeStyle}></i>
                    <i className="fa fa-heart" onClick={changeStyle}></i>
                </div>
            </div>
        </div>
        )
    })
    return (
        <StylePost>
        <div>
            {newPost}
        </div>
        </StylePost>
    );
}