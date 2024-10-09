import React from 'react';
import './App.css';
import Image from './image';
import Name from './name';
import Price from './price';
import Description from './description';
import Card from 'react-bootstrap/Card';

function App() {
  const nom = "Anita";
  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
      <Image />
      <Card.Body>
        <Card.Title><Name /></Card.Title>
        <Card.Text>
          <Price />
          <Description />
        </Card.Text>
      </Card.Body>
    </Card>
    <h4>Bonjour{nom?`,${nom}`: '!'}</h4>
    {nom && <img src="https://cdn.prod.website-files.com/6262d0e912ed03ea98f01f38/6618e3227bc648861344a831_657ca1363fd2ed72a825519f_hellowork.png" alt="hello"/>}
    </div>
  );
}

export default App;
