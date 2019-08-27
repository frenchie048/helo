import React, { Component } from 'react';
import './dashboard.css';

export default class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            search: '',
            posts: []
        }
    }

    getAllPosts = () => {

    }

    render() {
        const { posts } = this.state;
        const mappedPosts = posts.map((post, index) => {
            return (
                <div>
                    <h1>{post.title}</h1>
                    <h1>{post.username}</h1>
                    <h1>{post.profile_pic}</h1>
                </div>
            );
        })
        return (
            <div className='dashboard-container'>
                <div className='search'>
                    <input />
                    <button>Search</button>
                    <button>Reset</button>
                </div>
                <div className='posts'>
                    {mappedPosts}
                </div>
            </div>
        )
    }
}