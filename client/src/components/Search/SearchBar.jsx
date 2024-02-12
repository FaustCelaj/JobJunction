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
  const [category, setCategory] = useState("Education");

  const categories = [
    "Construction, Repair & Maintenance Services",
    "Education",
    "Government & Public Administration",
    "Healthcare",
    "Hotel & Travel Accommodation",
    "Human Resources & Staffing",
    "Information Technology",
    "Management & Consulting",
    "Manufacturing",
    "Non-profit & NGO",
    "Pharmaceutical & Biotechnology",
    "Real Estate",
    "Restaurants & Food Service",
    "Retail & Wholesale",
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
        placeholder="Web Developer, Plumber, etc..."
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
