import ProductCard from "./ProductCard"
import {Container} from "react-bootstrap"

function ProductsPage({products}) {
  return (
    <Container className="mt-5 d-flex gap-4 flex-wrap">
        {
          products.map(product => {
            const { title, description, image, price, rating, id} = product;
            return (
              <ProductCard key={id} id={id} title={title} description={description} image={image} price={price} rating={rating} />
            )
          })
        }
    </Container>
  )
}

export default ProductsPage