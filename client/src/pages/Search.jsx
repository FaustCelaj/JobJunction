import SearchBar from "../components/Search/SearchBar";
import SearchResults from "../components/Search/SearchResults";
import JobListings from '../components/job/JobListings';

const Search = () => {
  return (
    <div className="container">
      <SearchBar />
      <SearchResults />
      <JobListings />
    </div>
  );
};

export default Search;
