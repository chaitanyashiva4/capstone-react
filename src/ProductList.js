// src/components/ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Products = [
    {
        id: 1,
        image: require('./one.jpg'),
        title: 'Iqoo',
        landingbio:'8bg 128gb',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!'
    },
    {
        id: 2,
        image: require('./two.jpg'),
        title: 'Apple',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!'
    }, {
        id: 3,
        image: require('./three.jpg'),
        title: 'Realme',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!'
    }, {
        id: 4,
        image: require('./one.jpg'),
        title: 'Iqoo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!'
    }, {
        id: 5,
        image: require('./one.jpg'),
        title: 'Iqoo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!'
    }, {
        id: 6,
        image: require('./one.jpg'),
        title: 'Iqoo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!'
    },
]

const ProductList = () => {
    return (
      <div>
        <h1 className='text-center'>Product List</h1>
        <ul className="list-unstyled d-flex justify-between flex-wrap m-2 p-1">
          {Products.map((product) => (
            <li key={product.id}>
              <Card className='m-1' style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Img variant="top" src={product.image} alt={product.title} />
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Link target='_blank' to={`/product/${product.id}`} className="product-link">
                    <Button variant="primary">View</Button>
                  </Link>
                </Card.Body>
                {/* Render the image using an <img> element */}
                
              </Card>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ProductList;
