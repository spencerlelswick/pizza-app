import pizza from '../../assets/img/2M2ToppingwithBreadsticksand2Liter.webp'
import DealCard from './Card/DealCard'

const Deals = () => {

    return(
        <div className='deal-container'>
            <h2>Deals</h2>
            <DealCard
                title="2 Medium 2-Topping Pizzas, Breadsticks and 2-Liter"
                price="$29.99"
                img={pizza}
            ></DealCard>
            <DealCard
                title="2 Medium 2-Topping Pizzas, Breadsticks and 2-Liter"
                price="$29.99"
                img={pizza}
            ></DealCard>
            <DealCard
                title="2 Medium 2-Topping Pizzas, Breadsticks and 2-Liter"
                price="$29.99"
                img={pizza}
            ></DealCard>
        </div>
    )
}

export default Deals