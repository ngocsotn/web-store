import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export const ProtectedRoute = (props) => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const user = useSelector((state) => state.auth.user);
	const { roles } = props;
	if (!isAuthenticated || !user) {
		return (
			<Redirect
				to={{
					pathname: "/login",
					state: { from: props.location },
				}}
			/>
		);
	}

	if (user.acc_status === 2) {
		return (
			<Redirect
				to={{
					pathname: "/account-activation",
					state: { id: user.acc_id },
				}}
			/>
		);
	}

	if (roles && roles.indexOf(user.role_id) === -1) {
		return (
			<Redirect
				to={{
					pathname: "/",
				}}
			/>
		);
	}

	return <>{props.children}</>;
};
