import ReactDOM from "react-dom/client";
import "./css/index.css";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Route.jsx";
import { Provider } from "react-redux";
import {  ToastContainer } from "react-toastify";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <RouterProvider router={Router} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </Provider>
  </>
);
