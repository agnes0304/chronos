import { RouterProvider, createBrowserRouter } from "react-router-dom";

import BrowsePage from "./pages/BrowsePage";
import ErrorPage from "./pages/ErrorPage";
// import PostFeed from "./pages/PostFeed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BrowsePage />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "list",
    //     element: <PostFeed />,
    //   },
    // ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
