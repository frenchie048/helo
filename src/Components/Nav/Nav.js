import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './nav.css';

function Nav(props) {
    const { location, username, profile_pic } = props;
    console.log(location);
    return (
        <div className='nav-bar'>
            {(location.pathname !== '/') ? (
                <div>
                    <div className='profile-info'>
                        <img src={profile_pic || 'http://localhost:3000/no_image.jpg'} />
                        <h2>{username || 'Username'}</h2>
                    </div>

                    <nav className='nav-links'>
                        <Link to='/dashboard'><img src={'http://localhost:3000/home_logo.png'} /></Link>
                        <Link to='/new'><img src={'http://localhost:3000/new_logo.png'} /></Link>
                        <Link to='/'><img src={'http://localhost:3000/shut_down.png'} /></Link>
                    </nav>
                </div>
            ) : (
                    <></>
                )}
        </div >
    )
}

function mapStateToProps(reduxState) {
    const { username, profile_pic } = reduxState;
    return {
        username, profile_pic
    }
}

export default connect(mapStateToProps, {})(withRouter(Nav));