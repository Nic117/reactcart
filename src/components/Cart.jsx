import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { CartItem } from "./CartItem"
import { Link } from "react-router-dom"

export const Cart = () => {
    const { cart, totAmount, clearCart } = useContext(CartContext)
    return (
        <>
            {
                cart.length > 0 ? (
                        <div className="cart">
                            {cart.map(item => 
                                <CartItem key={item.id} data={item} />)}
                            <div className="cart-foot">
                                <p>Total: {Number(totAmount).toFixed(2)} $</p>
                            </div>
                            <Link to='/checkout'><button className="large-button">Finalizar Compra</button></Link>
                        </div>
                    ) : (
                        <div className="cart-empty" >
                            <p>Carrito Vacio</p>
                            <Link to="/"><button className="large-button">Volver Atras</button></Link>
                        </div>
                    )
            }
        </>
    )
}