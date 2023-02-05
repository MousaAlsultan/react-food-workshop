const DishComp = ({name , description , price}) => {
    return ( 
        <li className="card">
            <h2>{name}</h2>
            <p>{description}</p>
            <h4>{price}$</h4>

        </li>
     );
}
 
export default DishComp;