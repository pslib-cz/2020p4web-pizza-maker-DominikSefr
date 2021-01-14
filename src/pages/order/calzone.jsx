import ShowList from "../../components/AddIngredient";
import AppNavbar from "../../components/AppNavbar";

function Calzone(){
    return(
        <div>
            <div>
                <AppNavbar/>
            </div>
            <p>Calzone</p>
            <div>
                <ShowList/>
            </div>
        </div>
    )
}
export default Calzone;