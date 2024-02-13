import React from "react";
import { useLocation } from "react-router-dom";
import JobListings from "../JobDisplays/JobListings";
import { Box, Typography } from "@mui/material";

const SearchResults = () => {
  const location = useLocation();
  const { searchTerm, category } = location.state || {};

  return (
    <>
      <Box>
        {/* on page load, this would be if someone hits search in the menu and first loads the page */}
        {/* <Typography>
          Use the search bar above to get started. Try " Regional Manager" in
          "Sales".
        </Typography> */}
        {/* after a successful search, this can be when the search button is hit on the bar. can also be from the homepage or in the search page itself*/}
        <Typography>
          Showing Results for "{searchTerm}" in "{category}"
        </Typography>
        {/* no results */}
        {/* <Typography>
          No Results found for "{searchTerm}" in "{category}. Please Try again.
        </Typography> */}
      </Box>

      <JobListings searchTerm={searchTerm} category={category}/>
    </>
  );
};

export default SearchResults;