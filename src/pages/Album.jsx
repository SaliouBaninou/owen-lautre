import NavBar from "../components/NavBar"

function Album() {
    const media = [
        { type: "image", src: "/media/photo1.jpg", alt: "Photo 1" },
        { type: "image", src: "/media/photo2.jpg", alt: "Photo 2" },
        { type: "video", src: "/media/video1.mp4" },
        { type: "image", src: "/media/photo3.jpg", alt: "Photo 3" },
        { type: "video", src: "/media/video2.mp4" },
    ]

    return (
        <>
            <NavBar />
            <section className="p-10 pl-20 pr-20">
                <h1 className="text-gray-500 text-5xl">Owen&Cathia</h1>
                <div>
                    <div className="flex h-8 gap-4 mt-6 mb-6">
                        <img className="h-full object-cover cursor-pointer" src="/add.png" alt="Ajouter" />
                        <img className="h-full object-cover cursor-pointer" src="/date.png" alt="date" />
                    </div>
                    <div>
                        <p className="font-medium">19 sept - 22 nov .2025</p>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {media.map((item, index) => (
                        item.type === "image" ? (
                            <img
                                key={index}
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-60 object-cover rounded-lg shadow-md"
                            />
                        ) : (
                            <video
                                key={index}
                                controls
                                className="w-full h-60 object-cover rounded-lg shadow-md"
                            >
                                <source src={item.src} type="video/mp4" />
                                Votre navigateur ne supporte pas la vidéo.
                            </video>
                        )
                    ))}
                </div>
            </section>
        </>
    )
}

export default Album
