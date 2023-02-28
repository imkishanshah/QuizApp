import Quiz from "./componenets/quiz"
import Result from "./componenets/result"
import {createBrowserRouter, RouterProvider} from "react-router-dom"


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Quiz />{" "}
        </>
      ),
    },
    {
      path: "/result",
      element: (
        <>
          <Result />{" "}
        </>
      ),
    },
  ]);


function App(){
  return(
  <>
  <RouterProvider router={router}/>
  </>
  )
}

export default App;