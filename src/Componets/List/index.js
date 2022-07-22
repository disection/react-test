import ProductCard from '../ProductsCard'
import UserCard from '../UserCard'

const List = (props) => {
    const {data, type} = props
   const selectCardType = (type, cardInfo) =>{
    const cardsMap = {
      listaDeProductos: <ProductCard cardData={cardInfo}/>,
      listaDeUsuarios: <UserCard cardData={cardInfo}/>
    }
    return cardsMap[type]
   }
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4 ">
        { data.map( ( item,index ) => 
        selectCardType(type, item)) }
      </div>
      
    )
}
export default List