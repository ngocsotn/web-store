import { lazy } from "react";
import { Role } from "./role";

const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const HomePage = lazy(() => import("../pages/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const ForgotPasswordPage = lazy(() => import("../pages/ForgotPassword"));
const RecoveryPasswordPage = lazy(() => import("../pages/RecoveryPassword"));
const AccountActivationPage = lazy(() => import("../pages/AccountActivation"));
const ProfilePage = lazy(() => import("../pages/auth/Profile"));
const SearchPage = lazy(() => import("../pages/SearchPage"));
const CollectionsPage = lazy(() => import("../pages/Collections"));
const OrderPage = lazy(() => import("../pages/auth/OrderPage"));
const ReviewsPage = lazy(() => import("../pages/auth/ReviewsPage"));

export const routes = [
	{
		path: "/",
		protected: false,
		exact: true,
		component: HomePage,
	},
	{
		path: "/login",
		protected: false,
		exact: true,
		component: LoginPage,
	},
	{
		path: "/register",
		protected: false,
		exact: true,
		component: RegisterPage,
	},
	{
		path: "/profile/:slug",
		protected: true,
		exact: true,
		component: ProfilePage,
	},
	{
		path: "/profile",
		protected: true,
		exact: true,
		component: ProfilePage,
	},
	{
		path: "/forgot-password",
		protected: false,
		exact: true,
		component: ForgotPasswordPage,
	},
	{
		path: "/recovery-password",
		protected: false,
		exact: true,
		component: RecoveryPasswordPage,
	},
	{
		path: "/account-activation",
		protected: false,
		exact: true,
		component: AccountActivationPage,
	},
	{
		path: "/search",
		protected: false,
		exact: true,
		component: SearchPage,
	},
	{
		path: "/details/:productId",
		protected: false,
		exact: true,
		component: ProductDetail,
	},
	{
		path: "/collections/:categoryId",
		protected: false,
		exact: true,
		component: CollectionsPage,
	},
	{
		path: "/collections",
		protected: false,
		exact: true,
		component: CollectionsPage,
	},
	{
		path: "/orders",
		protected: true,
		exact: true,
		component: OrderPage,
		roles: [Role.User, Role.Admin],
	},
	{
		path: "/reviews/:orderId",
		protected: true,
		exact: true,
		component: ReviewsPage,
	},
];
