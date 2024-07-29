import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import { useLocation } from 'react-router-dom';
    
const PostList = ({ posts, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

const location = useLocation();
                const searchParams = new URLSearchParams(location.search);
                const query = searchParams.get('q');




  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.filter(
        post => post.body.includes(query)
  ).map(function(post) {return(
          <li key={post.id}><p><br />{post.body}</p></li>

          
        )})}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps, { fetchPosts })(PostList);
