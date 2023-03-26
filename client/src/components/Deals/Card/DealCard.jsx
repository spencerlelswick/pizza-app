import Button from '../../Button/Button'
import './DealCard.css'

const DealCard = (props) => {

    return(
        <div className='deal-card'>
            <div className='card-info-container'>
                <div className='card-info'>
                    <h3>{props.title}</h3>      
                    <p>{props.price}</p>
                    <Button text="Add To Order"></Button>    
                </div>
                <img alt='pizza deal' src={props.img}></img>
            </div>
            
        </div>
        
    )
}

export default DealCard