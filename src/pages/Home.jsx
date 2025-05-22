import EvenementsSection from "../components/EvenementsSection";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function HomePage(){
    return (
    <>
        <NavBar/>
        <section className="h-screen w-full p-5 md:p-10 relative">
            <div className="overflow-hidden h-full w-full rounded-[30px] md:rounded-[50px]">
                <img src="/01.webp" alt="First" className="h-full w-full object-cover" />
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 max-w-4xl">
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-white drop-shadow-lg">
                Un regard, et mon monde change.
                </h1>
            </div>
        </section>

        <EvenementsSection/>
        <section className="w-full p-5 md:p-10 relative">
            <div className="flex flex-col justify-center items-center gap-4 mt-4 text-center px-2">
                <h2 className="text-gray-900 font-bold text-3xl md:text-5xl">Album photo souvenir</h2>
                <p className="text-gray-500 text-base md:text-xl">
                L’amour véritable commence là où tu n’attends plus rien en retour.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-center gap-5 mt-10">
                {/* Colonne de gauche */}
                <div className="flex flex-col gap-5 w-full lg:w-[500px]">
                <div className="w-full overflow-hidden rounded-3xl">
                    <img src="/1.jpg" alt="image1" className="w-full h-auto object-cover" />
                </div>
                <div className="w-full overflow-hidden rounded-3xl">
                    <img src="/2.jpg" alt="image2" className="w-full h-auto object-cover" />
                </div>
                </div>

                {/* Colonne de droite */}
                <div className="flex flex-col gap-5 w-full lg:flex-1">
                <div className="flex flex-col md:flex-row gap-5 h-auto md:h-[480px]">
                    <div className="w-full md:w-1/2 h-[300px] md:h-full overflow-hidden rounded-3xl">
                    <img src="/3.jpg" alt="Image3" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full md:w-1/2 h-[300px] md:h-full overflow-hidden rounded-3xl relative">
                    <img src="/4.jpg" alt="Image4" className="w-full h-full object-cover" />
                    <a href="#" className="absolute top-0 left-0 w-full h-full flex justify-center items-center font-medium text-white text-2xl bg-black bg-opacity-50 hover:bg-opacity-70 transition">
                        Voir plus
                    </a>
                    </div>
                </div>
                <div className="w-full h-[300px] md:h-[570px] overflow-hidden rounded-3xl">
                    <img src="/5.jpg" alt="Image 5" className="w-full h-full object-cover" />
                </div>
                </div>
            </div>
            </section>
        <Footer/>
    </>
    )
}
export default HomePage;