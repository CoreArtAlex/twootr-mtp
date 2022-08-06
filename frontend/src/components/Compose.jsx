import React, { useState } from 'react';
import axios from 'axios';
import {StyleCompose} from './styles/Compose.styles';
// import Post from './Post';

export default function Compose(props,{setTwoots}){
    const { compose, setCompose } = props;
    const [composeChar, setComposeChar] = useState('');
    const [author, setAuthor] = useState('John Doe');
    const [authorSlug, setAuthorSlug] = useState('JohnDoe');
    const [dateAdded, setDateAdded] = useState('2022-08-07');
    const [twootLength, setTwootLength] = useState (140);
    const [counterVal, setCounterVal] = useState(true);

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log('twooted', composeChar);
        const newTwoot = {
            author:author,
            content: composeChar,
            authorSlug:authorSlug,
            dateAdded:dateAdded,
        };
        console.log('new compose',newTwoot);

        axios.post('http://localhost:8080/twoot',{ newTwoot })
        .then((res)=>{
            console.log('compose res',res);
            setCompose([...setTwoots, {...res.data}]);
            console.log('twoots', setCompose);
        })
        .catch((error)=> console.log('error',error));
    };

    const handleInputChange = (e)=>{
        setComposeChar(e.target.value);
        
        const length = e.target.value.length;
        setTwootLength(140 - length);

        if(length >= 1 && length < 141){
            setCounterVal(true);
        }else{
            setCounterVal(false);
        }
    };

    return (
        <StyleCompose>
        <div>
            <label className='compose-label' >Compose Twoot</label>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" 
                value={compose}
                required
                className='input'
                onChange={handleInputChange}
                />
                <br></br>
                <button className='submitBtn' type='submit'>
                    Twoot
                </button>
                <label className='counter' htmlFor="">{twootLength > 140 ? '-' + twootLength:twootLength}</label>
            </form>
        </div>
        </StyleCompose>
    );
}