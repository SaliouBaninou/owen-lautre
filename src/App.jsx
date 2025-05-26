import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { IKContext } from 'imagekitio-react';
import Add from "./pages/Add";
import Album from "./pages/Album";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    )
  },
  {
    path: "/add",
    element: (
      <ProtectedRoute>
        <Add />
      </ProtectedRoute>
    )
  },
  {
    path: "/album",
    element: (
      <ProtectedRoute>
        <Album />
      </ProtectedRoute>
    )
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);

function App() {
  return (
    <AuthProvider>
      <IKContext
        publicKey="TA_PUBLIC_KEY"
        urlEndpoint="https://ik.imagekit.io/TON_ID"
        authenticationEndpoint="http://localhost:5000/auth"
      >
        <RouterProvider router={router} />
      </IKContext>
    </AuthProvider>
  );
}

export default App;
