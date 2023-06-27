import { Button, Card } from 'react-bootstrap';
export default function ItemCard(props, i) {
    const date=new Date();
    const month=date.getMonth()+1;
    const day=date.getDate()+1;
    return (
        <Card>
            <Card.Img variant="top" src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} />
            <Card.Body>
                <Card.Title>
                    {props.item.title}
                </Card.Title>
                <div className="price">
                    {props.item.price}원
                </div>
                <div className='delivery'> 배송 예정 : <span className='bold'>{month}월 {day}일</span>
                </div>
                <div className="buttons">
                    <Button>🛒</Button>
                    <Button onClick={() => { props.navigate("/detail") }}>🔍</Button>
                </div>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last shipped 6 mins ago</small>
            </Card.Footer>
        </Card>
    )
};