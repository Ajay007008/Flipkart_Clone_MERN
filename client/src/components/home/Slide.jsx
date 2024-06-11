
import Carousel from "react-multi-carousel"  
import "react-multi-carousel/lib/styles.css";



 



const responsive = {

    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };








const Slide = ({ products }) => {

        return (
            <Carousel 
                responsive={responsive}
                
                swipeable={false}
                draggable={false}
                showDots={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                centerMode={true}
                
            >
           
           {products.length > 0 ? (
        products.map(product => (
          <img key={product.id} src={product.url} alt="product"/>
        ))
      ) : (
        <p>No products available</p>
      )}
        </Carousel>
        )

}



export default Slide;

 