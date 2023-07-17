import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home/Home";
import HomePage from "../HomePage/HomePage";
import Login from "../pages/login/Login";
import SignUp from "../pages/sign-up/Signup";
import About from "../pages/about/About";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Generate from "../pages/generate-questions/Generate";
import Saved from "../pages/saved-questions/Saved";
import Member from "../pages/membership/Member";
import Transite from "../pages/transaction/Transite";
import Account from "../pages/account-settings/Account";
import DashboardMain from "../pages/dashboard/DashboardMain";
import Multiple from "../pages/generate-questions/multiple-questions/Multiple";
import Blank from "../pages/generate-questions/blanks/Blank";
import Short from "../pages/generate-questions/short-answers/Short";
import Match from "../pages/generate-questions/matching/Match";
import Calculate from "../pages/generate-questions/calculations/Calculate";
import Teaches from "../pages/generate-questions/teacher-tool/Teaches";
// import Home from "../pages/Home/Home";
// import Feature from "../pages/Features/Feature";
// import NftRights from "../pages/NFT/NftRights";
// import MarketPlace from "../pages/MarketPlace/MarketPlace";
// import SignIn from "../pages/SignIn/SignIn";
// import SignUp from "../pages/SignUp/SignUp";
// import Auction from "../pages/Auction/Auction";
// import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      // {
      //   path: "/pre-nft",
      //   element: (
      //     <PrivateRoute>
      //       <NftRights />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/marketplace",
      //   element: <MarketPlace />,
      // },
      // {
      //   path: "/auction",
      //   element: <Auction />,
      // },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/dashboard",
        element: <DashboardMain />,
      },
      {
        path: "/dashboard/generate-questions/true-false",
        element: <Generate />,
      },
      {
        path: "/dashboard/saved-questions",
        element: <Saved />,
      },
      {
        path: "/dashboard/membership",
        element: <Member />,
      },
      {
        path: "/dashboard/transaction",
        element: <Transite />,
      },
      {
        path: "/dashboard/account-settings",
        element: <Account />,
      },
      {
        path: "/dashboard/generate-questions/multiple-questions",
        element: <Multiple />,
      },
      {
        path: "/dashboard/generate-questions/blanks",
        element: <Blank />,
      },
      {
        path: "/dashboard/generate-questions/short-answers",
        element: <Short />,
      },
      {
        path: "/dashboard/generate-questions/matching",
        element: <Match />,
      },
      {
        path: "/dashboard/generate-questions/calculations",
        element: <Calculate />,
      },
      {
        path: "/dashboard/generate-questions/teacher-tool",
        element: <Teaches />,
      },
    ],
  },
]);
export default router;
