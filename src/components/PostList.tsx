import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions';

const PostList = ({ posts, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}><p><div>{post.title}</div><br />{post.body}</p></li>
          
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps, { fetchPosts })(PostList);
