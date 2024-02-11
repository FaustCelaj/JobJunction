import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const { searchTerm, category } = location.state || {};
  
    return (
      <div>
      {/* Render your search results here */}
      Search Results for "{searchTerm}" in "{category}"
    </div>
    );
  };
  
  export default SearchResults;