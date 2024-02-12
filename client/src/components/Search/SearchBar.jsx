import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  // Default category
  const [category, setCategory] = useState("Engineering");

  const categories = [
    "Administrative",
    "Arts & Design",
    "Business",
    "Customer Services & Support",
    "Education",
    "Engineering",
    "Finance & Accounting",
    "Healthcare",
    "Human Resources",
    "Information Technology",
    "Marketing",
    "Military & Protective Services",
    "Operations",
    "Other",
    "Product & Project Management",
    "Research & Science",
    "Retail & Food Services",
    "Sales",
    "Skilled Labor & Manufacturing",
    "Transportation",
  ];

  const handleSearch = () => {
    navigate("/search", { state: { searchTerm, category } });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        width: "95%",
        backgroundColor: "#fff",
        borderRadius: "4px",
        boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
        padding: "10px",
        "& .MuiTextField-root": {
          margin: 1,
          width: "100%",
        },
        "& .MuiButton-root": {
          margin: 1,
        },
      }}
    >
      <TextField
        label="What are you looking for?"
        placeholder="Software Engineer"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        select
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        variant="outlined"
      >
        {categories.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <Button
        sx={{
          backgroundColor: "blue",
          "&:hover": { backgroundColor: "darkblue" },
        }}
        variant="contained"
        size="large"
        onClick={handleSearch}
      >
        SEARCH
      </Button>
    </Box>
  );
};

export default SearchBar;
