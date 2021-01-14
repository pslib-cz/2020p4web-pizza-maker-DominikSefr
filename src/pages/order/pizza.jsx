import AppNavbar from "../../components/AppNavbar";
import IngredientsDisplayButton from "../../components/IngredientsDisplayButton";

function Pizza(){
    return(
        <div>
            <div>
                <AppNavbar/>
            </div>
            <a>Pizza</a>
            <IngredientsDisplayButton/>
        </div>
    )
}
export default Pizza;