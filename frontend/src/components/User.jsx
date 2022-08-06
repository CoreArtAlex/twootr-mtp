import React, {useState, useEffect} from 'react';
import {StyleUser} from './styles/User.styles';

export default function User(props){
    const [userName, setUserName] = useState('John');
    const [userLastName, setUserLastName] = useState('Doe');
    const [authorSlug, setAuthorSlug] = useState('John-Doe');
    const [author, setAuthor] = useState('John Doe');
    const [imgUrl, setImgUrl] = useState('https://avatars.dicebear.com/api/bottts/john-doe.svg');
    const [displayDivName, setDisplayDivName] = useState(true);

    const handleInputChange = (e) => {
        let name = "";
        if (e.target.name === "name") {
            setUserName(e.target.value);
            name = e.target.value;
            if (userLastName) {
                name = name + " " + userLastName;
            }
        } else {
            setUserLastName(e.target.value);
            if (userName) {
                name = userName + " ";
            }
            name = name + e.target.value;
        }
        console.log("Name: ", name);
        setAuthor(name);
        name = name.replaceAll(' ', '-');
        setAuthorSlug(name);
        setImgUrl("https://avatars.dicebear.com/api/bottts/" + name + ".svg");

    }

    const clickBtn = (opt) => {
        setDisplayDivName(opt);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        clickBtn(true);
    }

    return (
        <StyleUser>
        <div className="user">
            <img src={imgUrl} />
            <div className={`name ${displayDivName ? "" : "hide"}`}>
                <p name="user" className="bold">{userName}</p>
                <p name="user">{userLastName}</p>
                <button className="edit" onClick={() => clickBtn(false)}><i className='fas fa-edit'></i></button>
            </div>
            <div className={`name ${displayDivName ? "hide" : ""}`}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={userName} onChange={handleInputChange} />
                <input type="text" name="last-name" value={userLastName} onChange={handleInputChange} />
                <button className="check" onClick={() => clickBtn(true)}>✓</button>
            </form>
            </div>
            <p name="user">@{authorSlug}</p>
                {/*
                <input>Last Name</input>
                <button></button>
                <label>@Username(Name+LastName)</label>*/}
        </div>
        </StyleUser>
    );
}