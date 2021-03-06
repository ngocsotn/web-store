import { Grid, makeStyles, Typography, Button } from "@material-ui/core";
import { useEffect } from "react";
import { ArrowBackIos } from "@material-ui/icons";
import { Link } from "react-router-dom";
import ReviewsOrderItem from "../../components/ReviewsOrderItem/ReviewsOrderItem";
import SideBar from "../../components/SideBar/SideBar";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
//import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: "100vh",
	},
	main: {
		marginLeft: "auto",
		width: "calc(100% - 260px)",
		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},

	mainContent: {
		padding: `80px ${theme.spacing(2)}px 65px`,
		[theme.breakpoints.down("xs")]: {
			padding: `68px ${theme.spacing(2)}px 85px`,
			width: "100%",
		},
	},

	shadow: {
		boxShadow: "0px 2px 8px rgba(0,0,0,.1)",
	},

	topContent: {
		backgroundColor: "white",
		borderRadius: theme.shape.borderRadius,
		color: "#F39148",
		padding: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},

	topLeftButton: {
		marginLeft: theme.spacing(2),
		whiteSpace: "nowrap",
		[theme.breakpoints.down("xs")]: {
			width: "100%",
			flex: "auto",
			marginTop: theme.spacing(1),
			marginLeft: 0,
		},
	},

	TopContentDetailsLeft: {
		float: "left",
		margin: theme.spacing(2),
		color: "#000",
		[theme.breakpoints.down("sm")]: {
			float: "none",
			width: "100%",
		},
	},

	TopContentDetailRight: {
		float: "right",
		margin: theme.spacing(2),
		color: "#000",
		[theme.breakpoints.down("sm")]: {
			float: "none",
			width: "100%",
		},
	},

	ChildPropertiesLabel: {
		float: "left",
	},

	ChildPropertiesValue: {
		float: "left",
		marginLeft: theme.spacing(2) + theme.spacing(2),
		[theme.breakpoints.down("sm")]: {
			float: "right",
			marginLeft: "0px",
			marginRight: theme.spacing(2) + theme.spacing(2),
		},
	},

	boldFont: {
		fontWeight: 600,
	},

	commonTitle: {
		textAlign: "center",
		color: "#F39148",
	},

	bottomContent: {
		background: "#fff",
		borderRadius: theme.shape.borderRadius,
		width: "100%",
		padding: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},

	back: {
		textDecoration: "none",
		display: "block",
	},
}));

const oderOverviewInfo = { orderId: "12345678910", status: "Delivered" };
const itemsInOder = [
	{
		id: "123",
		name: "S???a ??ng th??? S???a ??ng th??? S???a ??ng th??? S???a ??ng th??? S???a ??ng th??? S???a ??ng th??? S???a ??ng th??? S???a ??ng th??? S???a ??ng th??? S???a ??ng th??? S???a ??ng th??? S???a ??ng th??? S???a ??ng th??? S???a ??ng th??? S???a ??ng th??? S???a ??ng th???",
		quantity: 10,
		img: "http://product.hstatic.net/1000074072/product/ot-vang_7b60e97586894f43aa0fe18175fc6b3a_grande.jpg",
	},
	{
		id: "1234",
		name: "S???a ??ng th???",
		quantity: 10,
		img: "http://product.hstatic.net/1000074072/product/ot-vang_7b60e97586894f43aa0fe18175fc6b3a_grande.jpg",
	},
	{
		id: "1235",
		name: "S???a ??ng th???",
		quantity: 10,
		img: "http://product.hstatic.net/1000074072/product/ot-vang_7b60e97586894f43aa0fe18175fc6b3a_grande.jpg",
	},
	{
		id: "1237",
		name: "S???a ??ng th???",
		quantity: 10,
		img: "http://product.hstatic.net/1000074072/product/ot-vang_7b60e97586894f43aa0fe18175fc6b3a_grande.jpg",
	},
];

const ReviewsPage = (props) => {
	const classes = useStyles();
	//const location = useLocation();
	//const query = location.search.slice(4) || "-1"; //?id=123

	const reviewHandler = ({ productId, numOfStar, comment }) => {
		alert(
			`product id: ${productId} \nstars: ${numOfStar} \ncomment: ${comment}`
		);
	};
	useEffect(() => {
		document.title = "Reviews the order";
	}, []);

	return (
		<>
			<div className={classes.root}>
				<Header showMenu showCart />
				<SideBar />
				<div className={classes.main}>
					<div className={classes.mainContent}>
						<div
							className={`${classes.topContent} ${classes.shadow}`}
						>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={12} md={4}>
									<Link to="/orders" className={classes.back}>
										<Button
											variant="outlined"
											color="primary"
											className={classes.topLeftButton}
										>
											<ArrowBackIos fontSize="small" />{" "}
											Back to Order
										</Button>
									</Link>
								</Grid>
								<Grid item xs={12} sm={12} md={4}>
									<div className={classes.commonTitle}>
										<Typography
											variant="h6"
											className={classes.boldFont}
										>
											ORDER OVERVIEW
										</Typography>
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md={6}>
									<div
										className={
											classes.TopContentDetailsLeft
										}
									>
										<div
											className={
												classes.ChildPropertiesLabel
											}
										>
											<Typography variant="body1">
												ORDER ID:
											</Typography>
										</div>
										<div
											className={
												classes.ChildPropertiesValue
											}
										>
											<Typography
												variant="body1"
												className={classes.boldFont}
											>
												{oderOverviewInfo.orderId}
											</Typography>
										</div>
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md={6}>
									<div
										className={
											classes.TopContentDetailRight
										}
									>
										<div
											className={
												classes.ChildPropertiesLabel
											}
										>
											<Typography variant="body1">
												STATUS:
											</Typography>
										</div>
										<div
											className={
												classes.ChildPropertiesValue
											}
										>
											<Typography
												variant="body1"
												className={classes.boldFont}
											>
												{oderOverviewInfo.status.toUpperCase()}
											</Typography>
										</div>
									</div>
								</Grid>
							</Grid>
						</div>
						<div className={classes.bottomContent}>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={12} md={12}>
									<div className={classes.commonTitle}>
										<Typography
											variant="h6"
											className={classes.boldFont}
										>
											PURCHASED PRODUCTS
										</Typography>
									</div>
								</Grid>
							</Grid>
							{itemsInOder?.length > 0 &&
								itemsInOder.map((item, index) => (
									<ReviewsOrderItem
										key={index}
										id={item.id}
										img={item.img}
										name={item.name}
										quantity={item.quantity}
										onReview={reviewHandler}
									/>
								))}
						</div>
					</div>
				</div>
			</div>
			<Footer hasSideBar />
		</>
	);
};
export default ReviewsPage;
