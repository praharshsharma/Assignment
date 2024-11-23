import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Card, CardContent, Divider, Grid } from '@mui/material';

const CheckoutPage = () => {
  // Sample cart items
  const cartItems = [
    { id: 1, name: 'Product 1', price: 29.99, quantity: 1 },
    { id: 2, name: 'Product 2', price: 49.99, quantity: 2 },
    { id: 3, name: 'Product 3', price: 39.99, quantity: 1 },
  ];

  // Shipping form fields
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
  });

  // Payment form fields
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (shippingInfo.hasOwnProperty(name)) {
      setShippingInfo({ ...shippingInfo, [name]: value });
    } else {
      setPaymentInfo({ ...paymentInfo, [name]: value });
    }
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Handle checkout submission
  const handleCheckout = () => {
    // Handle checkout logic here (e.g., call an API to process the order)
    alert('Order placed successfully!');
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6">Order Summary</Typography>
          <Divider sx={{ margin: '10px 0' }} />
          {cartItems.map((item) => (
            <Grid container key={item.id} spacing={2} sx={{ marginBottom: '10px' }}>
              <Grid item xs={8}>
                <Typography>{item.name} (x{item.quantity})</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography align="right">${(item.price * item.quantity).toFixed(2)}</Typography>
              </Grid>
            </Grid>
          ))}
          <Divider sx={{ margin: '10px 0' }} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="h6">Total</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography align="right" variant="h6">${calculateTotal()}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Box sx={{ marginTop: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Shipping Information
        </Typography>
        <TextField
          label="Full Name"
          name="name"
          variant="outlined"
          fullWidth
          value={shippingInfo.name}
          onChange={handleChange}
          sx={{ marginBottom: '10px' }}
        />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          fullWidth
          type="email"
          value={shippingInfo.email}
          onChange={handleChange}
          sx={{ marginBottom: '10px' }}
        />
        <TextField
          label="Phone Number"
          name="phone"
          variant="outlined"
          fullWidth
          type="tel"
          value={shippingInfo.phone}
          onChange={handleChange}
          sx={{ marginBottom: '10px' }}
        />
        <TextField
          label="Address"
          name="address"
          variant="outlined"
          fullWidth
          value={shippingInfo.address}
          onChange={handleChange}
          sx={{ marginBottom: '10px' }}
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="City"
              name="city"
              variant="outlined"
              fullWidth
              value={shippingInfo.city}
              onChange={handleChange}
              sx={{ marginBottom: '10px' }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="ZIP Code"
              name="zip"
              variant="outlined"
              fullWidth
              value={shippingInfo.zip}
              onChange={handleChange}
              sx={{ marginBottom: '10px' }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginTop: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Payment Information
        </Typography>
        <TextField
          label="Card Number"
          name="cardNumber"
          variant="outlined"
          fullWidth
          value={paymentInfo.cardNumber}
          onChange={handleChange}
          sx={{ marginBottom: '10px' }}
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Expiry Date"
              name="expiryDate"
              variant="outlined"
              fullWidth
              value={paymentInfo.expiryDate}
              onChange={handleChange}
              sx={{ marginBottom: '10px' }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="CVV"
              name="cvv"
              variant="outlined"
              fullWidth
              type="password"
              value={paymentInfo.cvv}
              onChange={handleChange}
              sx={{ marginBottom: '10px' }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginTop: '20px' }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleCheckout}
        >
          Place Order
        </Button>
      </Box>
    </Container>
  );
};

export default CheckoutPage;
