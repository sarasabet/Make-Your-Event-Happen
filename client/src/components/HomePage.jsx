import './HomePage.scss';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom'


function HomePage() {
  return (

    <Card style={{ width: "100%" }}>
      <Card.Body>
        <div>
          <Card.Title>We make all your dream events happen with a click </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">your event</Card.Subtitle>
          <Card.Text>
            We make all your dream events happen with a click
          </Card.Text>
          <Link to="/contactus">Contact Us</Link>
          <Link to="/eventinfo">Book ayour Event</Link>
        </div>
        <div>
          <Image style={{ width: '50vm' }} variant="right" src="https://www.fcexhibitioncenter.com/wp-content/uploads/2015/10/book-an-event.jpg" fluid />
        </div>

      </Card.Body>

    </Card>

  )
}

export default HomePage