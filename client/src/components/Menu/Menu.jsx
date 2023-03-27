import pizzaCheese from '../../assets/img/pizza_Cheese.webp'
import pizzaCreate from '../../assets/img/pizza_Create_Your_Own.webp'
import pizzaPepperoni from '../../assets/img/pizza_Pepperoni.webp'
import pizzaSupreme from '../../assets/img/pizza_Supreme.webp'
import MenuCard from './Card/MenuCard'

const Menu = () => {

    return(
        <div>
            <h2>Pizza</h2>
            <div className='deal-container'>
                <MenuCard
                    title="Create your own"
                    price="$16.99"
                    img={pizzaCreate}
                ></MenuCard>
                <MenuCard
                    title="Pepperoni Pizza"
                    price="$18.99"
                    img={pizzaPepperoni}
                ></MenuCard>
                <MenuCard
                    title="Supreme Pizza"
                    price="$19.99"
                    img={pizzaSupreme}
                ></MenuCard>
                <MenuCard
                    title="Cheese Pizza"
                    price="$16.99"
                    img={pizzaCheese}
                ></MenuCard>
            </div>
        </div>
    )
}

export default Menu



