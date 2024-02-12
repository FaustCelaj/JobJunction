import React from "react";
import { useLocation } from "react-router-dom";
import JobListings from "../job/JobListings";
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

// ________________ we can work off this logic ______________________

// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import JobListings from "../job/JobListings";
// import { Box, Typography } from "@mui/material";

// const SearchResults = () => {
//   const location = useLocation();
//   const { searchTerm, category } = location.state || {};
//   const [searchStatus, setSearchStatus] = useState('initial'); // 'initial', 'success', or 'noResults'

//   useEffect(() => {
//     // Assuming you have a way to check if there are results
//     // For demonstration, let's assume JobListings can tell us if there are jobs to show
//     // You might need to implement a way to check this, such as lifting state up or using context
//     if (searchTerm && category) {
//       // This is a placeholder for the logic to determine if the search was successful or not.
//       // You might need to adjust this logic based on your application's state management
//       // For now, we'll assume every search is successful
//       setSearchStatus('success');
//       // If you had a way to check for no results, you might do something like:
//       // const hasResults = checkForResultsSomehow();
//       // setSearchStatus(hasResults ? 'success' : 'noResults');
//     }
//   }, [searchTerm, category]);

//   return (
//     <>
//       <Box>
//         {searchStatus === 'initial' && (
//           <Typography>
//             Use the search bar above to get started. Try "Regional Manager" in "Sales".
//           </Typography>
//         )}
//         {searchStatus === 'success' && (
//           <Typography>
//             Showing Results for "{searchTerm}" in "{category}"
//           </Typography>
//         )}
//         {searchStatus === 'noResults' && (
//           <Typography>
//             No Results found for "{searchTerm}" in "{category}". Please try again.
//           </Typography>
//         )}
//       </Box>

//       {searchStatus !== 'initial' && <JobListings />}
//     </>
//   );
// };

// export default SearchResults;
