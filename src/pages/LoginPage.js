import React, { useEffect } from "react";
import {
	FormControl,
	Container,
	makeStyles,
	Button,
	TextField,
	Typography,
	Box,
} from "@material-ui/core";
import { useInput } from "../hooks/use-input";
import * as Validate from "../helpers/validate";
import { Link } from "react-router-dom";
import { mainColor } from "../utils";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: "100vh",
		maxHeight: "-webkit-fill-available",
	},
	content: {
		padding: "20vh 0",
	},
	title: {
		marginBottom: 25,
		[theme.breakpoints.down("sm")]: {
			fontSize: 25,
		},
	},
	form: {
		width: "30rem",
		background: "#fff",
		maxWidth: "100%",
		margin: "0 auto",
		borderRadius: theme.shape.borderRadius,
		padding: "50px 25px",
		[theme.breakpoints.down("xs")]: {
			padding: "35px 15px",
		},
	},
	formControl: {
		display: "block",
		marginBottom: 15,
	},
	button: {
		"&:disabled": {
			cursor: "not-allowed",
			pointerEvents: "all !important",
		},
	},
	actions: {
		marginTop: 10,
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		"& a": {
			color: mainColor,
		},
	},
}));

const LoginPage = () => {
	const classes = useStyles();
	const {
		enteredInput: enteredUsername,
		hasError: usernameHasError,
		inputBlurHandler: usernameBlurHandler,
		inputChangeHandler: usernameChangeHandler,
		inputIsValid: usernameIsValid,
		inputReset: usernameReset,
	} = useInput(Validate.isNotEmpty);
	const {
		enteredInput: enteredPassword,
		hasError: passwordHasError,
		inputBlurHandler: passwordBlurHandler,
		inputChangeHandler: passwordChangeHandler,
		inputIsValid: passwordIsValid,
		inputReset: passwordReset,
	} = useInput(Validate.isNotEmpty);

	const formIsValid = usernameIsValid && passwordIsValid;
	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (!formIsValid) return;

		//handle login here
		console.log(
			`login info:\nusername: ${enteredUsername}\npassword: ${enteredPassword}`
		);

		//reset text field
		usernameReset();
		passwordReset();
	};

	useEffect(() => {
		document.title = "Login Page";
	}, []);
	return (
		<>
			<div className={classes.root}>
				<Header />
				<div className={classes.content}>
					<Container>
						<Box className={classes.form} boxShadow={3}>
							<Typography variant="h3" className={classes.title}>
								Login
							</Typography>
							<form
								noValidate
								autoComplete="off"
								onSubmit={formSubmitHandler}
							>
								<FormControl className={classes.formControl}>
									<TextField
										error={usernameHasError}
										label="Email / Username"
										helperText={
											usernameHasError &&
											"Please enter a valid email or username."
										}
										fullWidth
										size="small"
										variant="outlined"
										value={enteredUsername}
										onBlur={usernameBlurHandler}
										onChange={usernameChangeHandler}
									/>
								</FormControl>
								<FormControl className={classes.formControl}>
									<TextField
										// error
										label="Password"
										type="password"
										error={passwordHasError}
										helperText={
											passwordHasError &&
											"Please enter a valid password."
										}
										fullWidth
										size="small"
										variant="outlined"
										value={enteredPassword}
										onBlur={passwordBlurHandler}
										onChange={passwordChangeHandler}
									/>
								</FormControl>
								<Button
									variant="contained"
									color="primary"
									fullWidth
									disabled={!formIsValid}
									type="submit"
									className={classes.button}
								>
									Sign In
								</Button>
							</form>
							<div className={classes.actions}>
								<Typography variant="body2">
									New member?{" "}
									<Link to="/register">Sign up</Link>
								</Typography>

								<Link to="/forget-password">
									<Typography variant="body2">
										Forgot password?
									</Typography>
								</Link>
							</div>
						</Box>
					</Container>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default LoginPage;
