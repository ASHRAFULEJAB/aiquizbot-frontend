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
      // {
      //   path: "/dashboard/dashboardd",
      //   element: (
      //     <PrivateRoute>
      //       <MyOrders></MyOrders>
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/dashboard/allbuyers",
      //   element: (
      //     <AdminRoute>
      //       <AllBuyers></AllBuyers>
      //     </AdminRoute>
      //   ),
      // },
      // {
      //   path: "/dashboard/allsellers",
      //   element: (
      //     <AdminRoute>
      //       <AllSellers></AllSellers>
      //     </AdminRoute>
      //   ),
      // },
      // {
      //   path: "/dashboard/reportedItems",
      //   element: (
      //     <AdminRoute>
      //       <ReportedItems></ReportedItems>
      //     </AdminRoute>
      //   ),
      // },
      // {
      //   path: "/dashboard/adda-products",
      //   element: (
      //     <SellerRoute>
      //       <AddAProduct></AddAProduct>
      //     </SellerRoute>
      //   ),
      // },
      // {
      //   path: "/dashboard/my-products",
      //   element: (
      //     <SellerRoute>
      //       <MyProducts></MyProducts>
      //     </SellerRoute>
      //   ),
      // },
      // {
      //   path: "/dashboard/payment/:id",
      //   element: <Payment></Payment>,
      //   loader: ({ params }) =>
      //     fetch(
      //       `https://mall-of-recondition-laptops-server.vercel.app/orders/${params.id}`
      //     ),
      // },
    ],
  },
]);
export default router;
