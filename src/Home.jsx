import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


// function Cards() {
//     return (
//         <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={e.image} />
//             <Card.Body>
//                 <Card.Title>{e.title}</Card.Title>
//                 <Card.Text>
//                     {e.description}
//                 </Card.Text>
//                 <Card.Amount>{e.price}</Card.Amount>
//                 <Button variant="primary">Add</Button>
//             </Card.Body>
//         </Card>
//     )
// }

export const Home = ({ listData }) => {
    // alert("data recived " + JSON.stringify(listData))
    let { id, title, description, image, price } = listData;
    // console.log(typeof { listData });
    // console.log(typeof listData);
    // var item = [];
    // item.push(listData && listData.map(e => e.category))
    // console.log(listData.map(e => e.price));

    return (<div>
        <Card style={{ width: '18rem' }}>
            {image && <Card.Img variant="top" src={image} />}
            <Card.Body>
                {title && <Card.Title>{title}</Card.Title>}
                {description && <Card.Text>
                    {description}
                </Card.Text>}
                {price.toString() && <Card.Title>{price.toString()}</Card.Title>}
                <Button variant="primary">Add</Button>
            </Card.Body>
        </Card>
    </div>)
}

