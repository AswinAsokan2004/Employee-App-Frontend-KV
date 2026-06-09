import './App.css'
import EmployeeDetails from './EmployeeDetails'
import EmployeeList from './EmployeeList'
import EmployeePage from './EmployeePage'
// import LoginPage from './LoginPage'
//  './input.tsx'
// function App() {

//   return (
//     <>
//       {/* <LoginPage /> */}
//       <EmployeeList />
//       {/* <EmployeePage/> */}
//       {/* <EmployeeDetails /> */}
//       {/* <input type="text" /> */}
//     </>
//   )
// }

// export default App



// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// function Home() {
//   return <h1>Home</h1>;
// }

// function About() {
//   return <h1>About</h1>;
// }

// function App() {
//   return (
//     <BrowserRouter>

//       {/* <nav> */}
//         <Link to="/" >Home</Link>
//         <br />
//         <br />
//         <Link to="/about">About</Link>
//       {/* </nav> */}

//       <Routes>

//         <Route
//           path="/"
//           element={<Home />}
//         />

//         <Route
//           path="/about"
//           element={<About />}
//         />

//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;


import LoginPage from './LoginPage'

import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Layout from './Layout'
import ErrorPage from './ErrorPage'
import ProtectedEmloyeeRoute from './components/employee-home/ProtectedEmployeeRoute'
import EmployeeIDDetails from './EmployeeIDDetails'
import { Provider } from "react-redux";
import { store } from './store/store'
// import { store } from './store/store'
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/employee",
    element: <Layout />,
    children: [
      {index: true, element: (
        <ProtectedEmloyeeRoute>
          <EmployeeList/>
        </ProtectedEmloyeeRoute>
      )},
      {path: "details/:id", element: <EmployeeIDDetails/>},
      {path: "details", element: <EmployeeDetails />},
      {path: "create", element: <EmployeePage />},
      {path: "edit/:id", element: <EmployeePage />}
    ],
  }
])

const App = () => {
  return(
  <> <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </>
  )
}
export default App
