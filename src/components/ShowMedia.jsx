import { useEffect, useState } from "react"
import { getFiles } from "../api/files"
import RightArrow from "../assets/RightArrow"
import LeftArrow from "../assets/LeftArrow"

function ShowMedia() {
    const [files, setFiles] = useState([])
    const [currentIndex, setCurrentIndex] = useState(null)

    useEffect(() => {
        getMedias()
    }, [])

    const getMedias = async () => {
        const data = await getFiles()
        if (data) setFiles(data)
    }

    const currentMedia = files[currentIndex]

    const closeViewer = () => setCurrentIndex(null)
    const prevMedia = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1)
    const nextMedia = () =>
        currentIndex < files.length - 1 && setCurrentIndex(currentIndex + 1)

    return (
        <>
        
        {/* Viewer plein écran */}
        {currentMedia && (
            <div
            className="fixed top-0 left-0 p-4 h-full w-full z-50 bg-zinc-700/40 backdrop-blur-2xl flex flex-col items-center justify-center"
            onClick={closeViewer}
            >
                <h1 className="mb-5 text-2xl font-medium text-gray-700">Lecteur de votre amour</h1>

            <div
                className="relative flex flex-col items-center bg-amber-300/10 p-4 rounded-xl max-w-[95vw] max-h-[90vh] w-full lg:w-[1000px] sm:w-[600px]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-full h-full max-h-[70vh] flex items-center justify-center">
                {currentMedia.fileType === "image" ? (
                    <img
                    className="max-h-full w-full object-contain rounded-xl"
                    src={currentMedia.url}
                    alt=""
                    />
                ) : (
                    <video
                    className="max-h-full w-full object-contain rounded-xl"
                    controls
                    autoPlay
                    >
                    <source src={currentMedia.url} type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                )}
                </div>

                {/* Flèches */}
                <button
                className="w-10 h-10 bg-amber-500 absolute left-2 top-1/2 -translate-y-1/2 text-black rounded flex items-center justify-center"
                onClick={(e) => {
                    e.stopPropagation()
                    prevMedia()
                }}
                disabled={currentIndex === 0}
                >
                <LeftArrow size={20} color="currentColor" />
                </button>
                <button
                className="w-10 h-10 bg-amber-500 absolute right-2 top-1/2 -translate-y-1/2 text-black rounded flex items-center justify-center"
                onClick={(e) => {
                    e.stopPropagation()
                    nextMedia()
                }}
                disabled={currentIndex === files.length - 1}
                >
                <RightArrow size={20} color="currentColor" />
                </button>
            </div>
            </div>
        )}

        {/* Galerie */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 w-[1200px] max-w-full m-auto px-4 py-8">
            {files.map((media, index) => (
            <div
                key={media.fileId}
                className="w-full aspect-video overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setCurrentIndex(index)}
            >
                {media.fileType === "image" ? (
                <img
                    src={media.url}
                    className="w-full h-full object-cover"
                    alt=""
                />
                ) : (
                <video className="w-full h-full object-cover">
                    <source src={media.url} type="video/mp4" />
                </video>
                )}
            </div>
            ))}
        </div>
        </>
    )
}

export default ShowMedia
