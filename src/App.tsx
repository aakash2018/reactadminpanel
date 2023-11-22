import './App.css'
import { useRoutes,createBrowserRouter,RouterProvider } from "react-router-dom";
import Header from './common/header'
import Home from './pages/home';




export const routes = createBrowserRouter([
  { path: "/", element: <Home/>},
  {
    path: "/invoices",
    element: <>Invoices</>,
    // children: [
    //   { path: ":id", element: <>Invoices</> },
    //   { path: "/pending", element: <>Invoices Pendings</> },
    //   { path: "/complete", element: <>Complete</> },
    // ],
  },
  {
    path: "/users",
    element:<>Users</>,
    // children: [
    //   { path: ":id", element: <>Profile</> },
    //   { path: "/settings", element: <>Settings</> },
    // ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
