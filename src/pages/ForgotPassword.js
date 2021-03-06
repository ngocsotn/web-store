import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
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
import { Link, Redirect } from "react-router-dom";
import { mainColor } from "../utils";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { useSelector } from "react-redux";

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

const ForgotPasswordPage = () => {
	const { t } = useTranslation();
	const classes = useStyles();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const {
		enteredInput: enteredEmail,
		hasError: emailHasError,
		inputBlurHandler: emailBlurHandler,
		inputChangeHandler: emailChangeHandler,
		inputIsValid: emailIsValid,
		inputReset: emailReset,
	} = useInput(Validate.isEmail);

	const formIsValid = emailIsValid;
	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (!formIsValid) return;

		console.log(`info_email: ${enteredEmail}`);
		//handle.....

		//reset text field
		emailReset();
	};

	useEffect(() => {
		document.title = t("forgotpasswordpage.title");
	}, [t]);

	if (isAuthenticated) {
		return <Redirect to="/" />;
	}

	return (
		<>
			<div className={classes.root}>
				<Header />
				<div className={classes.content}>
					<Container>
						<Box className={classes.form} boxShadow={3}>
							<Typography variant="h3" className={classes.title}>
								{t("forgotpasswordpage.formTitle")}
							</Typography>
							<form
								noValidate
								autoComplete="off"
								onSubmit={formSubmitHandler}
							>
								<FormControl className={classes.formControl}>
									<TextField
										error={emailHasError}
										label={t("forgotpasswordpage.email")}
										type="email"
										helperText={
											emailHasError &&
											t("forgotpasswordpage.emailInValid")
										}
										fullWidth
										size="small"
										variant="outlined"
										value={enteredEmail}
										onBlur={emailBlurHandler}
										onChange={emailChangeHandler}
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
									{t("forgotpasswordpage.buttonExecute")}
								</Button>
							</form>
							<div className={classes.actions}>
								<Typography variant="body2">
									{t("forgotpasswordpage.newMember")}{" "}
									<Link to="/register">
										{t("forgotpasswordpage.signUp")}
									</Link>
								</Typography>

								<Link to="/login">
									<Typography variant="body2">
										{t("forgotpasswordpage.haveAccount")}
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

export default ForgotPasswordPage;
