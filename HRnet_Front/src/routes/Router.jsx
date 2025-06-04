import { createBrowserRouter } from "react-router-dom";
import CreateEmployee from "../pages/CreateEmployee/CreateEmployee";
import { EmployeeList } from "../pages/EmployeeList";
import { NotFound } from "../pages/NotFound";
import { Layout } from "../Layout/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <CreateEmployee />,
      },
      {
        path: "/employee-list",
        element: <EmployeeList />,
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ],
  },
]);

export { router };
