import React from 'react';

import { Button } from '@/components/ui/button';
import Container from '@/components/Container';

const Home = () => {
  return (
    <Container className="bg-kodegiri-light-green">
      <h2 className="text-xl font-semibold">Home</h2>
      <Button size="lg">Check Out</Button>
    </Container>
  );
}

export default Home;