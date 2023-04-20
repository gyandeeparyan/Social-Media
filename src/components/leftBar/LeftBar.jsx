import "./leftBar.scss";

import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='leftBar'>
      <div className='container'>
        <div className='menu'>
          <div className='user'>
            <img src={currentUser.profilePic} alt='' />
            <span>{currentUser.name}</span>
          </div>
          <div className='item'>
            <img src='https://i.ibb.co/wJwfL6P/friend.png' alt='' />
            <span>Friends</span>
          </div>
          <div className='item'>
            <img src='https://i.ibb.co/nLv4kNv/2.png' alt='' />
            <span>Groups</span>
          </div>
          <div className='item'>
            <img src='https://i.ibb.co/WcjnR95/3.png' alt='' />
            <span>Marketplace</span>
          </div>
          <div className='item'>
            <img src='https://i.ibb.co/Y2fFFJ1/4.png' alt='' />
            <span>Watch</span>
          </div>
          <div className='item'>
            <img src='https://i.ibb.co/RHcYqWV/5.png' alt='' />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className='menu'>
          <span>Your shortcuts</span>
          <div className='item'>
            <img src='https://i.ibb.co/DfpkHCq/6.png' alt='' />
            <span>Events</span>
          </div>
          <div className='item'>
            <img src='https://i.ibb.co/LhXhLy5/7.png' alt='' />
            <span>Gaming</span>
          </div>
          <div className='item'>
            <img src='https://i.ibb.co/vvKfJQx/8.png' alt='' />
            <span>Gallery</span>
          </div>
          <div className='item'>
            <img src='https://i.ibb.co/3177Mcz/9.png' alt='' />
            <span>Videos</span>
          </div>
          <div className='item'>
            <img src='https://i.ibb.co/YyPdbYZ/10.png' alt='' />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className='menu'>
          <span>Others</span>
          <div className='item'>
            <img src='https://i.ibb.co/DzJjmZd/13.png' alt='' />
            <span>Fundraiser</span>
          </div>
          <div className='item'>
            <img src='https://i.ibb.co/tPwWBFt/11.png' alt='' />
            <span>Tutorials</span>
          </div>
          <div className='item'>
            <img src='https://i.ibb.co/BByrwqH/12.png' alt='' />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
