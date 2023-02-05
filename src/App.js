import dishes from "./data";
import DishComp from "./component/DishComp";
import C from "./component/C";
import Filter1 from "./component/Filter1";
import { useState } from "react";

const categories = [
  "all",
  "burger",
  "hot dog",
  "sandwich",
  "fries",
  "topping",
  "drink",
  "extra",
];

function App() {
	const [maxVal,setmaxVal] =useState(10);
	const [minVal,setminVal] =useState(0);
	const [filercategory, setfilercategory] = useState("all");
	let filterdata = dishes.filter((ele)=>{
		return(
			ele.price >= minVal && ele.price <= maxVal 
		)
	})
	filterdata = filterdata.filter((ele) => {
		if(ele.category === "all" || ele.category ==="" ){
			return ele
		}else{
			return ele.category === filercategory
		}
	})  

	return (
		<main>
			<section className="filters">
				<h1>Burger Place</h1>
				<h2>Filters</h2>
				<form>
					<fieldset>
					<legend>Price</legend>
						<Filter1 minVal={minVal} maxVal={maxVal} setminVal={setminVal} setmaxVal={setmaxVal}/>
					</fieldset>

					<fieldset>
						<legend>Category</legend>
						{categories.map((ele)=>{
							return(
								<C category={ele}
								filercategory ={filercategory}
								setfilercategory={setfilercategory}/>
							)
						})}

					</fieldset>
				</form>

			</section>
			<section className="dishes">
				<h2>Dishes</h2>
				<ul className="grid">
					{filterdata.map((dish) => {
						return (
							<DishComp name={dish.name} description={dish.description} price={dish.price}/>
						);
					})}


				</ul>
			</section>
		</main>
	);
}

export default App;
