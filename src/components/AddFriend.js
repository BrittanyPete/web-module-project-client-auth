import React, { useState } from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const AddFriend = () =>{
    const [newFriend, setNewFriend] = useState({
        name: '',
        email: ''
    });

    const { push } = useHistory();

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('newFriend:', newFriend)
        axiosWithAuth().post(`/friends`, newFriend)
            .then(resp => {
                // console.log('add resp:', resp)
                push('/friends');
            })
            .catch(err => {
                console.log(err)
            })
    }
   
    return (
        <div>
            <h1 className='bigHeader'>Add Friend</h1>
            <form onSubmit={handleSubmit}>
                <label>Friend Name:
                    <input 
                        type='text'
                        name='name'
                        onChange={handleChange}    
                    />
                </label>
                <label>Friend Email:
                    <input 
                        type='email'
                        name='email'
                        onChange={handleChange}
                    />
                </label>
                <div>
                <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddFriend;