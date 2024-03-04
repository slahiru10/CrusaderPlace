import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Radio, RadioGroup, Stack } from '@chakra-ui/react';

const PaymentPage: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<'creditCard' | 'venmo'>('creditCard');

  const handlePaymentMethodChange = (value: string) => {
    setPaymentMethod(value as 'creditCard' | 'venmo');
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="lg">
      <RadioGroup onChange={handlePaymentMethodChange} value={paymentMethod}>
        <Stack direction="row">
          <Radio value="creditCard">Credit Card</Radio>
          <Radio value="venmo">Venmo</Radio>
        </Stack>
      </RadioGroup>

      {paymentMethod === 'creditCard' && (
        <>
          <FormControl mt={4}>
            <FormLabel>Name on Card</FormLabel>
            <Input type="text" placeholder="John Doe" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Card Number</FormLabel>
            <Input type="text" placeholder="1234 5678 9012 3456" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Expiration Date</FormLabel>
            <Input type="text" placeholder="MM/YY" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>CVV</FormLabel>
            <Input type="text" placeholder="123" />
          </FormControl>
        </>
      )}

      {paymentMethod === 'venmo' && (
        <FormControl mt={4}>
          <FormLabel>Venmo Username</FormLabel>
          <Input type="text" placeholder="@username" />
        </FormControl>
      )}

      <Button mt={6} colorScheme="blue">
        Submit
      </Button>
    </Box>
  );
};

export default PaymentPage;
