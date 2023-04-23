import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share";
import "./home.scss";
import { postsData } from "../../data/data";
import { useState } from "react";
const Home = () => {
  const [content, setContent] = useState(postsData);
  const addPost = (name) => {
   
    const newPost = {
      id:1,
      name: "John Doe",
      userId:1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: name,
    };
    setContent([newPost, ...content]);
  };

  return (
    <div className='home'>
      <Stories />
      <Share addPost={addPost} />
      <Posts content={content} />
    </div>
  );
};

export default Home;
