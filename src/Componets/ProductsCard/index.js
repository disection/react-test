import {Card,  ListGroup, ListGroupItem} from 'reactstrap'

const ProductCard = (props) => {
    const { title, image, description, category, rating } = props.cardData
    return(
        <Card >
          <img alt="Card image" src={image}/>          
          <ListGroup flush>
            <ListGroupItem>
              {title} 
            </ListGroupItem>
            <ListGroupItem >
              {description}
            </ListGroupItem>
            <ListGroupItem>
              {category}
            </ListGroupItem>
            <ListGroupItem>
              {rating.rate}
            </ListGroupItem>
          </ListGroup>          
        </Card>
    )
}
export default ProductCard