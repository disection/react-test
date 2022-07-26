import ProductCard from '../ProductsCard'


const List = props => {
  console.log(props)
    const {data} = props
   console.log(data) 
   
    return (
      <div className="row row-cols-1 row-cols-md-4 g-4 ">
        {data.map(( product,index ) => {
          return < ProductCard cardData= {product}/>
       
        } )}
      </div>
    )
    
}
export default List