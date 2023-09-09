import React from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products';
import Card from 'react-bootstrap/Card';

const ProductDetail = () => {
    const { productId } = useParams();
    const product = Products.find((p) => p.id === parseInt(productId, 10));

    if (product) {
        return (
            <div className='d-flex m-2 p-1'>
                <Card key={product.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.image} alt={product.title} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }

    return <p>No Product Found!</p>;
};

export default ProductDetail;