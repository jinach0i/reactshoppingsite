import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
export default function BadgeBox(props) {
    return (
        <div className="badge">
            <Button variant="primary">
                Profile <Badge bg="secondary">9</Badge>
            </Button>
        </div>
    )
};