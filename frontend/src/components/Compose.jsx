import React, { useState } from 'react';
import axios from 'axios';
import {StyleCompose} from './styles/Compose.styles';

export default function Compose(props){
    const { compose, setCompose } = props;
    const [composeChar, setComposeChar] = useState('');

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log('twooted', composeChar);
        const newTwoot = {
            author:'',
            content: composeChar,
            authorSlug:'',
            dateAdded:'',
        };
        console.log('new compose',newTwoot);

        axios.post('/twoot',{ newTwoot })
        .then((res)=>{
            console.log('compose res',res);
            setCompose([...compose, {...res.data}]);
            console.log('twoots', setCompose);
        }).catch((error)=> console.log('error',error.response.data));
    };

    const handleInputChange = (e)=>{
        setComposeChar(e.target.value);
    };

    return (
        <StyleCompose>
        <div>
            <label>Compose Twoot</label>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" 
                value={compose}
                required
                onChange={handleInputChange} />
                <br></br>
                <button type='submit'>
                    Twoot
                </button>
                <label htmlFor="">Counter</label>
            </form>
        </div>
        </StyleCompose>
    );
}