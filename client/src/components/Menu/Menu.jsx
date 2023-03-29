import { useSelector } from 'react-redux'
import pizzaCheese from '../../assets/img/pizza_Cheese.webp'
import pizzaPepperoni from '../../assets/img/pizza_Pepperoni.webp'
import pizzaSupreme from '../../assets/img/pizza_Supreme.webp'
import MenuCard from './Card/MenuCard'




const Menu = () => {
const cart = useSelector((state) => state.cart)


    return(
        <div>
            <h2>Pizza</h2>
            <div className='deal-container'>
                <MenuCard
                    id={1}
                    key={1}
                    title="Create your own"
                    price="16.99"
                    image={pizzaCheese}
                ></MenuCard>
                <MenuCard
                    id={2}
                    key={2}
                    title="Pepperoni Pizza"
                    price="18.99"
                    image={pizzaPepperoni}
                ></MenuCard>
                <MenuCard
                    id={3}
                    key={3}
                    title="Supreme Pizza"
                    price="19.99"
                    image={pizzaSupreme}
                ></MenuCard>
                <MenuCard
                    id={4}
                    key={4}
                    title="Cheese Pizza"
                    price="16.99"
                    image={pizzaCheese}
                ></MenuCard>
                
            </div>
        </div>
    )
}

export default Menu



