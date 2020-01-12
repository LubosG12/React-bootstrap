import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

function Jumbo() {
    return(
  <div className="darkener">
  <Jumbotron fluid classMame="jumbo pt-5">
  <Container className="text-center justify-content pt-5 text-light">
    <div className="container jumbotron-text p-3">
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
    </div>
  </Container>
</Jumbotron>
</div>
    )
}

export default Jumbo;