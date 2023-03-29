import './DealCard.css'

const DealCard = (props) => {

    return(
        <div className='deal-card'>
            <div className='card-info-container'>
                <div className='card-info'>
                    <h3>{props.title}</h3>      
                    <p>{props.price}</p>
                    <button className='primary-button'>Add To Order</button>    
                </div>
                <img alt='pizza deal' src={props.img}></img>
            </div>
            
        </div>
        
    )
}

export default DealCard