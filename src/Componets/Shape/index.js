const ShapeDiv = (props) =>{
    const {shape,color} = props
    const colorMap ={
        red:'bg-danger',
        blue:'bg-primary',
        yellow:'bg-warning',
        black:'bg-dark',
        green:'bg-success'
    }
    return  <div className={ `${shape} ${colorMap[color]}` }></div>
}
export default ShapeDiv