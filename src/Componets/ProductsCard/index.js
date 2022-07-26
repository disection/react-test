import {Card,  ListGroup, ListGroupItem} from 'reactstrap'

const ProductCard = (props) => {
    const { title, image,  category, price } = props.cardData
    return(
        <Card >
          <img alt="Card image" src={image}/>          
          <ListGroup flush>
            <ListGroupItem>
              {title} 
            </ListGroupItem>            
            <ListGroupItem>
              {category}
            </ListGroupItem>
            <ListGroupItem>
              {price}
            </ListGroupItem>
          </ListGroup>  
          <button clasName="btn btn-primary" type='button' onClick={buttonHandler}>Agregar al carrito</button>        
        </Card>
    )
}
export default ProductCard