import { useState } from "react";
import { useEffect } from "react";
import LoadRacipe from "../load-racipe/LoadRacipe";
import Cook from "../cook/Cook";

const Card = ({ handleCart, carts, removeItem}) => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('chefsData.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className="main-container mt-10 flex gap-6 mb-16">
            <div className="card-container w-7/12 grid grid-cols-2 gap-6">
                {
                    items.map(item => <LoadRacipe handleCart={handleCart} cardItem={item}></LoadRacipe>)
                }
            </div>
            <div className="cart-container p-6 border-2 rounded-2xl w-5/12 h-full text-center">
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold text-center">Want to cook: <span>{carts.length} </span></h1>
                    <hr />
                    <table className="w-full">
                        <tr>
                            <th></th>
                            <th className="text-justify pl-3">Name</th>
                            <th className="text-justify pl-7">Time</th>
                            <th className="text-justify pl-12">Calories</th>
                        </tr>
                        {
                            carts.map((cart, index) => <Cook cart={cart} index={index} removeItem={removeItem}></Cook>)
                        }
                    </table>


                </div>

                <div className="space-y-4 mt-12">
                    <h1 className="text-2xl font-bold text-center">Currently cooking: <span> 02</span></h1>
                    <hr />
                    <table className="w-full">
                        <tr className="">
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                        <tr>
                            <td>Something</td>
                            <td>20 minutes</td>
                            <td>300 Calories</td>

                        </tr>
                    </table>
                </div>
                <div className="flex justify-between mt-20">
                    <h6>Total Time = <span>200</span> minutes</h6>
                    <h6>Total Calories = <span>200</span> calories</h6>
                </div>
            </div>
        </div>
    );
};

export default Card;