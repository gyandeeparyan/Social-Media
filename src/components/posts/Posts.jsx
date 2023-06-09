import Post from "../post/Post";
import "./posts.scss";


const Posts = ({ content }) => {
  //TEMPORARY

  return (
    <div className='posts'>
      {content.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
