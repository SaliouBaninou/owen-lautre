function LoginPage(){
    return (
        <div className="h-svh w-full relative">
            <div className="absolute top-0 left-0 h-svh w-full -z-10">
                <img src="/bg_connexion.webp" alt="background" className="h-full w-full object-cover" />
            </div>
            <div className="flex justify-center items-center h-svh">
                <form className="bg-black/30 bg-opacity-90 p-8 rounded-lg shadow-lg backdrop-blur-sm w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-center mb-6 text-white">Connexion</h2>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">
                            Email :
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Entrer votre e-mail..."
                            className="w-full bg-white/50 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium mb-1 text-white">
                            Mot de passe :
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Entrer votre mot de passe ..."
                            className="w-full bg-white/50 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Se connecter
                    </button>
                </form>
            </div>
        </div>
    )
}



export default LoginPage