import React from 'react';
import { Box, Typography, Link, Paper, Grid } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MarketingIcon from '@mui/icons-material/MarkunreadMailbox'; 

const categories = [
  { title: 'UI/UX Design', count: '12k+', Icon: WebIcon },
  { title: 'Engineering', count: '2k+', Icon: EngineeringIcon },
  { title: 'Finance & Accounting', count: '11k+', Icon: AccountBalanceWalletIcon },
  { title: 'Operations', count: '7k+', Icon: SettingsIcon },
  { title: 'Product & Project Management', count: '8k+', Icon: ManageAccountsIcon },
  { title: 'Marketing', count: '6k+', Icon: MarketingIcon },
];

export default function CategoryDisplay() {
  return (
    <Box sx={{ backgroundColor: 'blue', color: 'white', p: 6 }}>
      <Typography variant="h2" gutterBottom sx={{ mb: 3 }}>
        Most Demanding Categories.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}> 
        Together with useful notifications, collaboration insights, and improvement tips lorem etc.
      </Typography>
      <Link href="/search" color="inherit" underline="hover" sx={{ mb: 5 }}>
        Explore all fields
      </Link>
      <Grid container spacing={4} justifyContent="center">
        {categories.map((category, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Paper
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 180,
                backgroundColor: 'white',
                color: 'black',
                ':hover': {
                  boxShadow: 6,
                }
              }}
            >
              <category.Icon sx={{ mb: 2, fontSize: 40 }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{category.title}</Typography>
              <Typography variant="body2">{category.count} Jobs</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
