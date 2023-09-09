import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const product = [
    {
        id: 1,
        image: require('./one.jpg'),
        title: 'Iqoo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!'
    },
    {
        id: 21111111,
        image: require('./one.jpg'),
        title: 'Iqoo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!'
    },{
        id: 2111,
        image: require('./one.jpg'),
        title: 'Iqoo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!'
    },{
        id: 21,
        image: require('./one.jpg'),
        title: 'Iqoo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!'
    },{
        id: 22,
        image: require('./one.jpg'),
        title: 'Iqoo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!'
    },{
        id: 222,
        image: require('./one.jpg'),
        title: 'Iqoo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!'
    },
]

function Products() {
    return (
        <div className='d-flex justify-between flex-wrap'>
            {product.map(hero => {
                return (
                    <Card className='m-2 p-1' key={hero.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hero.image} /> {/* Use the actual image source */}
                        <Card.Body>
                            <Card.Title>{hero.title}</Card.Title>
                            <Card.Text>{hero.description}</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
}

export default Products;
