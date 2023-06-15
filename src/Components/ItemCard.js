import { Button, Card } from 'react-bootstrap';
export default function ItemCard(props) {
    return (
        <Card>
            <Card.Img variant="top" src={'https://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg'}/>
            <Card.Body>
                <Card.Title>{props.item.title}</Card.Title>
                <Card.Text>
                    <p className="price">
                        {props.item.price}원
                    </p>
                    <p className='delivery'> 배송 예정 : <span className='bold'>월 일</span></p>
                </Card.Text>
                <Button>🛒</Button>
                <props.Link to="/detail"><Button>상세 보기</Button></props.Link>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    )
};