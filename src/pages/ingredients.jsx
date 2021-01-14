import AppNavbar from "../components/AppNavbar";
import ShowList from "../components/AddIngredient";
import AddItems from "../components/AddItems";

function Ingredients(){
    return(
        <div>
            <div>
                <AppNavbar/>
            </div>

            <div>
                <AddItems/>
            </div>
        </div>
    )
}
export default Ingredients;