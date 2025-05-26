import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await login(email, password);
        navigate("/");
        } catch (err) {
        setError("Identifiants incorrects");
        }
    };

    return (
        <div className="h-svh w-full relative">
        <div className="absolute top-0 left-0 h-svh w-full -z-10">
            <img src="/bg_connexion.webp" alt="background" className="h-full w-full object-cover" />
        </div>
        <div className="flex justify-center items-center h-svh">
            <form onSubmit={handleSubmit} className="bg-black/30 p-8 rounded-lg shadow-lg backdrop-blur-sm w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-6 text-white">Connexion</h2>
            {error && <p className="text-red-400 mb-4">{error}</p>}
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">Email :</label>
                <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-white/50 px-4 py-2 border rounded-md"
                required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium mb-1 text-white">Mot de passe :</label>
                <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-white/50 px-4 py-2 border rounded-md"
                required
                />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                Se connecter
            </button>
            </form>
        </div>
        </div>
    );
}

export default LoginPage;
