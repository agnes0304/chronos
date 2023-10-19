import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./components/layout/Root";
import BrowsePage from "./pages/BrowsePage";
import ErrorPage from "./pages/ErrorPage";
import PostFeed from "./pages/PostFeed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <BrowsePage /> },

      // Postfeed
      {
        path: "list",
        children: [{ index: true, element: <PostFeed /> }],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
