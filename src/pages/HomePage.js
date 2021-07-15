import { makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import Footer from "../components/Layout/Footer";
import SideBar from "../components/SideBar/SideBar";
import Header from "./../components/Layout/Header";

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: "100vh",
	},
	main: {
		marginLeft: "auto",
		width: "calc(100% - 320px)",
		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},
	mainContent: {
		padding: "64px 0 80px",
		[theme.breakpoints.down("xs")]: {
			padding: "56px 0 85px",
		},
	},
}));
const HomePage = () => {
	const classes = useStyles();
	useEffect(() => {
		document.title = "Family Store - Easy buy online";
	}, []);
	return (
		<>
			<div className={classes.root}>
				<Header showMenu showCart />
				<SideBar />
				<div className={classes.main}>
					<div className={classes.mainContent}></div>
				</div>
			</div>
			<Footer hasSideBar />
		</>
	);
};
export default HomePage;
