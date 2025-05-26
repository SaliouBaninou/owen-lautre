import { useState } from "react";
import Upload from "../assets/Upload";
import IconVideo from "../assets/Video";
import axios from "axios";

function AddForm() {
  const [uploads, setUploads] = useState([]);

  const handleFilesChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    selectedFiles.forEach((file) => {
      // Validation simple
      if (
        !file.type.startsWith("image") &&
        !file.type.startsWith("video")
      ) {
        alert("Seuls les fichiers image ou vidéo sont acceptés.");
        return;
      }

      uploadFile(file);
    });
  };

  const uploadFile = async (file) => {
    let auth;
    try {
      const authRes = await fetch("https://back-owen-lautre.onrender.com/api/imagekit/auth");
      auth = await authRes.json();
    } catch (err) {
      console.error("Erreur lors de l'authentification:", err);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    formData.append("publicKey", 'public_9658hKDhWiywUPPUxNVkWk3ws/s=');
    formData.append("signature", auth.signature);
    formData.append("expire", auth.expire);
    formData.append("token", auth.token);

    const newUpload = {
        id: crypto.randomUUID(),
        name: file.name,
        progress: 0,
        url: null,
        type: file.type,
    };
    setUploads((prev) => [...prev, newUpload]);

    try {
        const response =await axios.post("https://upload.imagekit.io/api/v1/files/upload", formData, {
            withCredentials: false,
            onUploadProgress: (progressEvent) => {
                const percent = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
                );
                setUploads((prev) =>
                prev.map((u) =>
                    u.id === newUpload.id ? { ...u, progress: percent } : u
                )
                );
            },
            });


        setUploads((prev) =>
            prev.map((u) =>
            u.id === newUpload.id ? { ...u, url: response.data.url } : u
            )
        );
        } catch (err) {
        console.error("Erreur upload :", err);
        }
    };

    const removeFile = (id) => {
        setUploads((prev) => prev.filter((u) => u.id !== id));
    };

    return (
        <div style={{ padding: "2rem" }}>
        <form>
            <input
            type="file"
            id="upload-file"
            className="hidden"
            onChange={handleFilesChange}
            multiple
            />
            <label
            htmlFor="upload-file"
            className="border-2 border-dotted border-gray-400 rounded-2xl p-4 flex flex-col gap-5 items-center justify-center h-52 m-auto md:w-[500px] cursor-pointer"
            >
            <Upload />
            <h2 className="text-gray-400">
                Uploader une ou plusieurs images/vidéos
            </h2>
            </label>
        </form>

        {/* Liste des fichiers uploadés */}
        <div className="mt-10 flex flex-col gap-4">
            {uploads.map((file) => (
            <div
                key={file.id}
                className="flex gap-4 relative w-full items-center"
            >
                <div className="h-20 w-20 overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center">
                {file.url ? (
                    file.type.startsWith("video") ? (
                    <IconVideo />
                    ) : (
                    <img
                        src={file.url}
                        className="h-full w-full object-cover"
                        alt="aperçu"
                    />
                    )
                ) : (
                    <span className="text-gray-400 text-sm">Aperçu...</span>
                )}
                </div>

                <div className="flex-1">
                <p className="text-sm font-medium text-gray-600">{file.name}</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${file.progress}%` }}
                    ></div>
                </div>
                <p className="text-xs text-gray-400 mt-1">{file.progress}%</p>
                </div>

                <button
                onClick={() => removeFile(file.id)}
                className="absolute top-0 right-0 flex items-center justify-center h-6 w-6 p-2 rounded-full bg-red-100 text-red-500 hover:bg-red-200"
                aria-label="Supprimer le fichier"
                title="Supprimer"
                >
                ×
                </button>
            </div>
            ))}
        </div>
        </div>
    );
}

export default AddForm;
