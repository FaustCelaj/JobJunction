import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchBar from "../components/Search/SearchBar";
import HowItWorks from "../components/Home/HowItWorks";
import CategoryDisplay from "../components/Home/CategoryDisplay";
import Footer from "../pages/Footer"; // Ensure this import path is correct

export default function Home() {
  return (
    <>
      <Box sx={{ padding: 4 }}>
        <section>
          <Box sx={{ marginBottom: 4 }}>
            <Typography variant="h2" gutterBottom>
              Find and hire.
            </Typography>
            <Typography variant="body1" gutterBottom>
              JobJunction connects job seekers and employers to find the best match. Get started today!
            </Typography>
          </Box>
          <SearchBar />
        </section>

        <HowItWorks />
        <CategoryDisplay />
      </Box>
      <Footer /> 
    </>
  );
}
