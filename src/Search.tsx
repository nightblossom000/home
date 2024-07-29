import { Navbar } from "./components/Navbar";
import PostList from './components/PostList';
import { Toolbar } from "./components/Toolbar";

import { useLocation } from 'react-router-dom';
    
    
            
                
    
                
    
            
function Search() {
const location = useLocation();
                const searchParams = new URLSearchParams(location.search);
                const query = searchParams.get('q');
  return (
    <>
      <Navbar />
      <div>
                        <h1>Search Results for: {query}</h1>
                    </div>
      <PostList />
      <Toolbar />
      
    </>
  );
}

export default Search;
