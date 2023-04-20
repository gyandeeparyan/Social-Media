import "./share.scss";

import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useState } from "react";
const Share = ({addPost}) => {
  
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert('Please Provide Name Value');
      return;
    }
    addPost(name);
    setName('');
  };
    const { currentUser } = useContext(AuthContext);
    return (
      <div className='share'>
        <div className='container'>
          <div className='top'>
            <img src={currentUser.profilePic} alt='' />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              placeholder={`What's on your mind ${currentUser.name}?`}
            />
          </div>
          <hr />
          <div className='bottom'>
            <div className='left'>
              <input type='file' id='file' style={{ display: "none" }} />
              <label htmlFor='file'>
                <div className='item'>
                  <img src='https://i.ibb.co/jRVVhsp/img.png' alt='' />
                  <span>Add Image</span>
                </div>
              </label>
              <div className='item'>
                <img src='https://i.ibb.co/QKhKyJs/map.png' alt='' />
                <span>Add Place</span>
              </div>
              <div className='item'>
                <img src='https://i.ibb.co/wJwfL6P/friend.png' alt='' />
                <span>Tag Friends</span>
              </div>
            </div>
            <div className='right'>
              <button onClick={handleSubmit}>Post</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
;

export default Share;
