import {Card,  ListGroup, ListGroupItem} from 'reactstrap' 

const UserCard = (props) => {
    
    const { name, gender, dob, picture } = props.cardData
    const colorMap= {
        female:"bg-lightcoral",
        male:"bg-lightblue"
    }
    return(
        <div className="col">
        <Card >
          <img alt="Card image" src={picture.large}/>          
          <ListGroup flush>
            <ListGroupItem>
              {name.first} {name.last}
            </ListGroupItem>
            <ListGroupItem className={colorMap[gender]}>
              {gender}
            </ListGroupItem>
            <ListGroupItem>
              {dob.age}
            </ListGroupItem>
          </ListGroup>          
        </Card>
        </div>
    )

}

export default UserCard