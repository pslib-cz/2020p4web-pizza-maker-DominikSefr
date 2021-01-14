import AppNavbar from "../../components/AppNavbar";
import IngredientsDisplayButton from "../../components/IngredientsDisplayButton";

function Calzone(){
    return(
        <div>
            <div>
                <AppNavbar/>
            </div>
            <p>Calzone</p>
            <div>
                <IngredientsDisplayButton/>
            </div>
        </div>
    )
}
export default Calzone;