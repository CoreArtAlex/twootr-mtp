import React from 'react';
import {StyleHeader} from './styles/Header.styles';

export default function Header(props){
    return (
        <StyleHeader>
        <header>
            <div>
                <label className="title">Twootr</label>
                <label>
                    <span className="bold">Write </span>a New Twoot
                </label>
            </div>
        </header>
        </StyleHeader>
    );
}