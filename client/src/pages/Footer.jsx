import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Box
        px={{ xs: 1, sm: 1 }}
        py={{ xs: 1, sm: 1 }}
        bgcolor="primary.main"
        color="white"
        component="footer"
      >
        <Container maxWidth="lg">
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            <Typography variant="body1">
              JobJunction – Your pathway to employment.
            </Typography>
            <Box
              component="nav"
              display="flex"
              justifyContent="center"
              my={4}
            >
              <Link href="/terms" variant="body1" color="inherit" underline="none" mx={3}>
                Terms of Service
              </Link>
              <Link href="/privacy" variant="body1" color="inherit" underline="none" mx={3}>
                Privacy Policy
              </Link>
            </Box>
            <Typography variant="caption" display="block" gutterBottom>
              © {currentYear} JobJunction, Inc. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
