// import { element } from "prop-types";
import "./App.css";
// import CustomButton from "./components/custom-button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import NotFound from "./pages/not-found";
import Movies from "./pages/movies";
import RootLayout from "./layout/root-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    // 1. Navbar 밑에 path에 해당하는 element를 보여주고 싶으면 아래와 같이 children을 활용
    children: [
      {
        // 2. index: true는 위의 path: '/' 즉, 홈 경로를 의미한다.
        index: true,
        element: <HomePage />,
      },
      {
        // 3. 부모의 path가 '/'이니, /를 붙이지 않아도 /movies랑 동일하게 동작한다.
        path: "movies/:movieId",
        element: <Movies />,
      },
    ],
    // element: <h1>홈 페이지입니다.</h1>,
    // //없는 경로에 들어온 처리
    // errorElement: <h1>너는 없는 경로에 들어왔다 ^ㅁ^ 야호 ~!</h1>,
  },
  // {
  //   path: "/movies",
  //   element: <Movies />,
  //   // element: <h1>영화 페이지입니다.</h1>,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

// function App() {
//   return (
//     <>
//       <CustomButton />
//     </>
//   );
// }

export default App;
