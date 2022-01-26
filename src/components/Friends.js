import React from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';


class Friends extends React.Component {
    state = {
        friendsList: []
    };

    componentDidMount() {
        axiosWithAuth().get('/friends')
            .then(resp => {
                // console.log('resp:', resp.data);
                this.setState({
                    friendsList: resp.data
                });
            })
            .catch(err => {
                console.log(err)
            })
    }



    render() {
        return (
        <div className='friends'>
            <h1 className='bigHeader'>Friends List</h1>
            <div className='friendList'>
                {
                    this.state.friendsList.map(friend => (
                        <h2 key={friend.id} >- {friend.name} - {friend.email}</h2>
                    ))
                }
            </div>
        </div>
    )}
}

export default Friends;