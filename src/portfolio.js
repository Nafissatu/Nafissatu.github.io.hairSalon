import {Carousel} from 'react-bootstrap';
import page1 from './image1.jpg';
import page2 from './image2.jpg';
import page3 from './image3.jpg'
const Portfolio = () => {
    return ( 
        <div className="portfolio">
            <h1>Our Portfolio</h1>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={page1}
      alt=""
    />
    <Carousel.Caption>
      
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src={page2}
      alt=""
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={page3}
      alt=""
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
     );
}
 
export default Portfolio;