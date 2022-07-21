import ProductCard from '../ProductsCard'

const List = (props) => {
    const {data} = props
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4 ">
        { data.map( ( item,index ) => 
        <ProductCard cardData = {item}/>) }
      </div>
      
    )
}
export default List