const Button = props =>{
    const {color= 'primary', text = 'soy un boton'} = props
    return <button className={`btn btn-${color}`}>{text}</button> 
     

}

export default Button