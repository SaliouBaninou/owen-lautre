import { useState } from "react";
import Upload from "../assets/Upload";

function AddForm() {
    const [dragActive, setDragActive] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            setSelectedFiles(files);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) {
            setSelectedFiles(files);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    };

    return (
        <form action="" className="w-full flex justify-center">
            <div
                className={`w-[600px] max-w-11/12 p-10 rounded-4xl border-3 border-dashed m-auto transition-all ${
                    dragActive ? "border-blue-500 bg-blue-50" : "border-zinc-500"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <div className="h-full w-full">
                    <input
                        type="file"
                        id="input-upload"
                        className="hidden"
                        multiple
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="input-upload"
                        className="cursor-pointer w-full h-full flex flex-col justify-center items-center"
                    >
                        <Upload />
                        <p className="text-zinc-500 text-2xl font-medium text-center">
                            Cliquez pour uploader <br />
                            Ou glissez-déposez plusieurs fichiers
                        </p>
                        {selectedFiles.length > 0 && (
                            <ul className="mt-4 text-green-600 text-lg font-semibold list-disc">
                                {selectedFiles.map((file, index) => (
                                    <li key={index}>{file.name}</li>
                                ))}
                            </ul>
                        )}
                    </label>
                </div>
            </div>
        </form>
    );
}

export default AddForm;
