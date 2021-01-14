import AppNavbar from "../components/AppNavbar";

function NotFoundPage(){
    return(
        <div>
            <div>
                <AppNavbar/>
            </div>
            <div>
                <p>404 Zadali jste špatnou URL!</p>
            </div>
        </div>
    )
}
export default NotFoundPage;