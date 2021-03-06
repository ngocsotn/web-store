import { alpha, makeStyles, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import CategoryItem from "./CategoryItem/CategoryItem";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100%",
		overflow: "auto",
	},

	title: {
		opacity: 0.4,
		padding: "30px 20px 5px",
		fontWeight: "bold",
		fontSize: 16,
	},
	line: {
		width: "calc(100% - 40px)",
		display: "block",
		margin: "0 auto",
		height: 1,
		background: alpha("#000000", 0.2),
	},
}));

const categories = [
	{
		id: "vegetables",
		title: "Vegetables",
		items: [
			{ id: "herbs", title: "Herbs" },
			{ id: "packed-vegetables", title: "Packed Vegetables" },
			{ id: "fresh-vegetables", title: "Vegetables" },
		],
	},
	{
		id: "organic",
		title: "Organic",
		items: [
			{ id: "spice", title: "Spice" },
			{ id: "honey", title: "Honey" },
			{ id: "oil", title: "Oil" },
		],
	},
	{
		id: "snack-beverages",
		title: "Snack & Beverages",
		items: [
			{ id: "juice", title: "Juice" },
			{ id: "coffee", title: "Coffee" },
			{ id: "tea", title: "Tea" },
		],
	},
];
const CategoriesMenu = () => {
	const { t } = useTranslation();
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Typography variant="h6" className={classes.title}>
				{t("sideBar.categories")}
			</Typography>
			<span className={classes.line}></span>
			<ul>
				{categories?.length > 0 &&
					categories.map((item, index) => (
						<CategoryItem
							key={index}
							id={item.id}
							title={item.title}
							items={item.items}
						/>
					))}
			</ul>
		</div>
	);
};

export default CategoriesMenu;
