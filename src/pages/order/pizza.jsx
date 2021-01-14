import ShowList from "../../components/AddIngredient";
import AppNavbar from "../../components/AppNavbar";

function Pizza(){
    return(
        <div>
            <div>
                <AppNavbar/>
            </div>
            <a>Pizza</a>
            <div>
                <ShowList/>
            </div>
        </div>
    )
}
export default Pizza;