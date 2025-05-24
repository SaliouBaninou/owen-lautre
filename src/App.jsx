import { IKContext } from 'imagekitio-react';
import { createBrowserRouter, RouterProvider } from "react-router";
import Add from "./pages/Add";
import Album from "./pages/Album";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/add", element: <Add /> },
  { path: "/album", element: <Album /> }
]);

function App() {
  return (
    <IKContext
      publicKey="TA_PUBLIC_KEY"
      urlEndpoint="https://ik.imagekit.io/TON_ID"
      authenticationEndpoint="http://localhost:5000/auth"
    >
      <RouterProvider router={router} />
    </IKContext>
  );
}

export default App;
