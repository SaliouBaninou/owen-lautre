import AddForm from "../components/AddForm";
import NavBar from "../components/NavBar";

function Add(){
    return (
        <>  
            <NavBar/>
            <section className="p-2 pt-6 pb-6 mt-8">
                <div className="mb-4">
                    <h1 className="text-2xl font-medium text-gray-500 text-center"> souvenir de votre amour</h1>
                </div>
                <div>
                    <AddForm/>
                </div>
            </section>
        </>
    )
}

export default Add;