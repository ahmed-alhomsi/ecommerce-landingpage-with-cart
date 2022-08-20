import { useState } from "react"
import { Card, Button } from "react-bootstrap"
import { addItem } from "./redux/cart"

function ProductCard({ title, description, image, price, rating, category, id}) {

  const [ReadMore, setReadMore] = useState(false);

  const item = {
    title,
    description,
    image,
    price,
    rating,
    category,
    id
  }

  return (
    <Card style={{width: '18rem'}} className="text-center">
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {ReadMore ? description : `${description.slice(0, 50)}...`}
                <Button className='m-2' variant={ReadMore ? "danger" : "success"} onClick={() => setReadMore(prevState => !prevState)}>{ReadMore ? "Read Less" : "Read More"}</Button>
            </Card.Text>
            <Card.Text>
                rating: {rating.rate}<br />
                remaining: {rating.count}<br />
                price: {price}<br />
                {category ? `category: ${category}` : "uncategorized"}<br />
                id: {id}<br />
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default ProductCard