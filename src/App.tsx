import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import SignInPage from "./pages/SignInPage";
import RegisterPage from "./pages/RegisterPage";
import SplashPage from "./pages/SplashPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<SplashPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
