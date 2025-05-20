import Footer from "../components/Footer";

function HomePage(){
    return (
    <>
        <section className="h-svh wi-full p-10 relative">
            <div className="overflow-hidden h-full w-full rounded-[50px]">
                <img src="/01.webp" alt="Firts" className="h-full w-full object-cover"/>
            </div>
            <div className="w-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="font-bold text-6xl text-center text-white">Un regard, et mon monde change.</h1>
            </div>
        </section>
        <section className=" w-full p-10 relative">
            <div className="flex flex-col justify-center items-center gap-4 mt-4">
                <h2 className="text-gray-900 font-bold text-5xl">Evènements et dates</h2>
                <p className="text-gray-500 text-xl">Je t’aime non seulement pour ce que tu es, mais pour ce que je suis quand nous sommes ensemble.</p>
            </div>
            <div className="mt-20 flex gap-4 justify-center flex-wrap">

                <div className="w-96 h-max rounded-2xl p-6 bg-[#F6FAFB]">
                    <div className="mb-4">
                        <span className="text-[#CE6D4A]">Date</span>
                        <h3 className="text-xl font-medium">Calendrier</h3>
                    </div>
                    <div className="h-72 w-full overflow-hidden">
                        <img className="h-full w-full object-contain" src="/photo.jpg" alt="Illustration" />
                    </div>
                </div>

                <div className="w-96 h-max rounded-2xl p-6 bg-[#F6FAFB]">
                    <div className="mb-4">
                        <span className="text-[#2D8FB9]">Images souvenir</span>
                        <h3 className="text-xl font-medium">Photos</h3>
                    </div>
                    <div className="h-72 w-full overflow-hidden">
                        <img className="h-full w-full object-contain" src="/photo.jpg" alt="Illustration" />
                    </div>
                </div>

                <div className="w-96 rounded-2xl p-6 bg-[#F6FAFB]">
                    <div className="mb-4">
                        <span className="text-blue-600">Histoire</span>
                        <h3 className="text-xl font-medium">Rencontre</h3>
                    </div>
                    <p className="text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero adipisci quia numquam? Nobis consectetur suscipit, sunt fugit odio voluptatem minus pariatur velit error asperiores labore ducimus sint adipisci commodi dignissimos!
                    </p>
                </div>
                <div className="w-96 rounded-2xl p-6 bg-[#F6FAFB]">
                    <div className="mb-4">
                        <span className="text-pink-500">Vision</span>
                        <h3 className="text-xl font-medium">Objectif</h3>
                    </div>
                    <p className="text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero adipisci quia numquam? Nobis consectetur suscipit, sunt fugit odio voluptatem minus pariatur velit error asperiores labore ducimus sint adipisci commodi dignissimos!
                    </p>
                </div>
            </div>  
        </section>
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