import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthView from "./pages/auth/AuthView"
import "./styles/generic/reset.scss"
import HomeView from "./pages/home/HomeView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthView />,
  },
  {
    path: "/home",
    element: <HomeView />,
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
