import { Container, Card, Button } from "react-bootstrap"
import {useState} from "react"
import ProductCard from "./ProductCard"

function Cart() {

  return (
    <Container>

      <Card style={{width: '18rem'}} className="text-center">
          <Card.Img variant="top" src="https://picsum.photos/500/300" />
          <Card.Body>
              <Card.Title>TiTLe</Card.Title>
              <Card.Text>
              </Card.Text>
              <Card.Text>
                  count: 4<br />
                  price: 85$
              </Card.Text>
          </Card.Body>
      </Card>

    </Container>
  )
}

export default Cart