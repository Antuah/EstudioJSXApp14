import React, { useContext } from "react";
import SigninPage from "../modules/SigninPage";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AuthContext from "../config/context/auth.context";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {user?.signed ? (
          <>
            <Route path="/" element={<>Dashboard</>}>
              <Route path="dashboard" element={<>Dashboard</>} />
              <Route path="users" element={<>Dashboard</>} />
              <Route path="products" element={<>Dashboard</>} />
            </Route>
          </>
        ) : (
          <Route path="/" element={<SigninPage/>} />
        )}
        <Route path="*" element={<>404</>} />
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRouter;
