import Footer from "../components/Footer";

function HomePage(){
    return (
    <>
        <section className="h-svh wi-full p-6 relative">
            <div className="overflow-hidden h-full w-full rounded-[50px]">
                <img src="/01.webp" alt="Firts" className="h-full w-full object-cover"/>
            </div>
            <div className="w-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="font-bold text-6xl text-center text-white">Un regard, et mon monde change.</h1>
            </div>
        </section>
        <section className="h-svh wi-full p-6 relative">
            <div className="flex flex-col justify-center items-center gap-4 mt-4">
                <h2 className="text-gray-900 font-bold text-5xl">Evènements et dates</h2>
                <p className="text-gray-500 text-xl">Je t’aime non seulement pour ce que tu es, mais pour ce que je suis quand nous sommes ensemble.</p>
            </div>
            <div>

            </div>  
        </section>
        <Footer/>
    </>
    )
}
export default HomePage;