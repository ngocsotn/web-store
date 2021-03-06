import { Breadcrumbs, Grid, makeStyles, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductItem from "../components/ProductItem/ProductItem";
import SideBar from "../components/SideBar/SideBar";
import { cartActions } from "../reducers/cart";
import { uiActions } from "../reducers/ui";

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
	breadcrumbs: {
		marginBottom: theme.spacing(2),
		"& a": {
			textDecoration: "none",
			opacity: 0.4,
			color: "#333",
		},
	},
	currentLink: {
		opacity: "1 !important",
	},
	banner: {
		position: "relative",
		padding: "6.5rem 0",
		width: "100%",
		borderRadius: theme.shape.borderRadius,
		marginBottom: theme.spacing(2),
		overflow: "hidden",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		background: `url(${
			process.env.PUBLIC_URL + "/img/category-banner.jpg"
		}) no-repeat center/cover`,
		[theme.breakpoints.down("xs")]: {
			padding: "4rem 0",
		},
	},
	bannerOverlay: {
		position: "absolute",
		left: 0,
		top: 0,
		width: "100%",
		height: "100%",
		background: "rgba(0,0,0,.3)",
	},
	bannerTitle: {
		position: "relative",
		zIndex: 1,
		color: "#fff",
		textTransform: "capitalize",
		textAlign: "center",
		[theme.breakpoints.down("xs")]: {
			fontSize: 38,
		},
	},
	collectionItems: {
		width: "100%",
		margin: 0,
		background: "#fff",
		borderRadius: theme.shape.borderRadius,
		marginBottom: theme.spacing(1),
		padding: theme.spacing(1),
	},
}));

const collectionItems = [
	{
		id: "it1",
		title: "L???c 5 g??i m?? x??o Koreno v??? g?? 118g",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2565/222735/bhx/loc-5-goi-mi-xao-koreno-volcano-vi-ga-118g-202103040211554701_300x300.jpg",
		price: "54000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it2",
		title: "Ch??o l????n ?????u xanh C??y Th??? 260g",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2564/200035/bhx/chao-tuoi-luon-dau-xanh-cay-thi-goi-260g-202102251707320901_300x300.jpg",
		price: "22500",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it3",
		title: "Ch??o t????i th???t heo C??y Th??? 260g",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2564/200036/bhx/chao-tuoi-thit-heo-cay-thi-goi-260g-202102251711586607_300x300.jpg",
		price: "19000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it4",
		title: "Ch??o t????i rau c??? C??y Th??? g??i 260g",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2564/200028/bhx/chao-tuoi-rau-cu-thap-cam-cay-thi-goi-260g-202102251707400258_300x300.jpg",
		price: "20000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it5",
		title: "L???c 6 g??i m?? Jomo x???t b?? h???m 78g",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2565/227760/bhx/loc-6-goi-mi-jomo-vi-xot-bo-ham-78g-202102282051044085_300x300.jpg",
		price: "26000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it6",
		title: "Th??ng 6 l???c m?? Jomo x???t b?? h???m 78g",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2565/227769/bhx/thung-6-loc-mi-jomo-vi-xot-bo-ham-78g-202103032327578370_300x300.jpg",
		price: "156000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it7",
		title: "M?? t????ng ??en B???c Kinh Ottogi 83g",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2565/200245/bhx/mi-tuong-den-bac-kinh-ottogi-goi-83g-202102282139048980_300x300.jpg",
		price: "9600",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it8",
		title: "Ch??? qu??? d???ng que mini C.P g??i 300g",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/7169/227963/bhx/cha-que-mini-cp-goi-300g-202104270802397830_300x300.jpg",
		price: "36000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it9",
		title: "Pizza Manna ph?? mai HT Food 120g",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/8359/211616/bhx/pizza-manna-pho-mai-ht-food-120g-202103021522373011_300x300.jpg",
		price: "40000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it10",
		title: "T??o Fuji Nam Phi 1kg (5-7 tr??i)",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/7578/223866/bhx/tao-fuji-nhap-khau-nam-phi-hop-1kg-8-9-trai-202105130857033513_300x300.jpeg",
		price: "65000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it11",
		title: "T??o Gala nh???p kh???u New Zealand 1kg",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/7578/202932/bhx/tao-gala-nhap-khau-new-zealand-tui-1kg-6-7-trai-202103041505372826_300x300.jpg",
		price: "65000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it12",
		title: "Cam v??ng Valencia ??c t??i 1kg",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/7578/202933/bhx/cam-vang-valencia-uc-hop-1kg-4-5-trai-202101271643141394_300x300.jpg",
		price: "64.500",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it13",
		title: "S???a t????i c?? ???????ng Vinamilk 1 l??t",
		description: "",
		image: "https://cdn.tgdd.vn/bachhoaxanh/themes-combo/54.Mobile.jpg",
		price: "30400",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it14",
		title: "S???a tr??i c??y Nutriboost d??u 1 l??t",
		description: "",
		image: "https://cdn.tgdd.vn/bachhoaxanh/themes-combo/47.Mobile.jpg",
		price: "22300",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it15",
		title: "6 chai tr?? chanh d??y FuzeTea 450ml",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/8938/118083/bhx/6-chai-tra-chanh-day-va-hat-chia-fuze-tea-450ml-202103312239243567_300x300.jpg",
		price: "39000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it16",
		title: "6 chai n?????c tinh khi???t Lama 350ml",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2563/227259/bhx/loc-6-chai-nuoc-tinh-khiet-lama-350ml-202103032306223804_300x300.jpg",
		price: "18000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it17",
		title: "6 chai n?????c Mirinda ???? me 390ml",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2443/229525/bhx/loc-6-chai-nuoc-ngot-mirinda-da-me-390ml-202103312237572579_300x300.jpg",
		price: "34000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it18",
		title: "6 lon bia Carlsberg Smooth 330ml",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2282/195963/bhx/6-lon-bia-carlsberg-smooth-draught-330ml-202103191328328045_300x300.jpg",
		price: "85000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it19",
		title: "6 chai n?????c t??ng l???c Compact 330ml",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/3226/209444/bhx/6-chai-nuoc-tang-luc-compact-vi-cherry-330ml-202103272202222181_300x300.jpg",
		price: "54000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it20",
		title: "N?????c ??p xo??i Yooh lon cao 240ml",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/3265/209407/bhx/nuoc-ep-xoai-yooh-240ml-202103271538009854_300x300.jpg",
		price: "9000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it21",
		title: "6 chai n?????c Wake Up 247 330ml",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/3226/195239/bhx/6-chai-nuoc-tang-luc-wake-up-247-vi-ca-phe-330ml-202103272152303718_300x300.jpg",
		price: "53000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it22",
		title: "L???c 6 g??i m?? Jomo x???t b?? h???m 78g",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2565/227760/bhx/loc-6-goi-mi-jomo-vi-xot-bo-ham-78g-202102282051044085_300x300.jpg",
		price: "26000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it23",
		title: "H???t n??m th???t x????ng tu??? Knorr 1,2kg",
		description: "",
		image: "https://cdn.tgdd.vn/bachhoaxanh/themes-combo/7.Mobile.jpg",
		price: "93000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it24",
		title: "D???u ?????u n??nh Janbee can 5 l??t",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2286/211351/bhx/dau-dau-nanh-tinh-luyen-janbee-can-5-lit-202104141650195418_300x300.jpg",
		price: "225000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it25",
		title: "N?????c t????ng ?????m ?????c Maggi 700ml",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2683/76548/bhx/nuoc-tuong-dau-nanh-dam-dac-maggi-chai-700ml-202104191414162279_300x300.jpg",
		price: "30400",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it26",
		title: "????nh r??ng PS than ho???t t??nh 180g",
		description: "",
		image: "https://cdn.tgdd.vn/bachhoaxanh/themes-combo/18.Mobile.jpg",
		price: "28000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it27",
		title: "N?????c r???a tay Lifebuoy t??i 443ml",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2486/76494/bhx/nuoc-rua-tay-lifebuoy-bao-ve-vuot-troi-tui-443ml-202103022351568988_300x300.jpg",
		price: "46000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it28",
		title: "R???a tay Antabax s???ng kho??i 450ml",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2486/232977/bhx/nuoc-rua-tay-khang-khuan-antabax-sang-khoai-tui-450ml-202103030020563210_300x300.jpg",
		price: "29000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it30",
		title: "R???a tay Antabax b???o v??? da 450ml",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2486/232976/bhx/nuoc-rua-tay-khang-khuan-antabax-bao-ve-da-tui-450ml-202103030016274557_300x300.jpg",
		price: "31000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it31",
		title: "B??? 3 b??n ch???i Colgate Highdensity",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2491/235665/bhx/bo-3-ban-chai-danh-rang-colgate-highdensity-than-hoat-tinh-202103110859522363_300x300.jpg",
		price: "62000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it32",
		title: "Kh??n gi???y r??t Puri 3 l???p 100 t???",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/3004/230824/bhx/khan-giay-puri-3-lop-hop-100-to-giao-mau-ngau-nhien-202104231321532369_300x300.jpg",
		price: "18000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it33",
		title: "X?? ph??ng b???o v??? da Antabax c???c 85g",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2485/233092/bhx/xa-phong-khang-khuan-antabax-bao-ve-da-85g-202103031130475883_300x300.jpg",
		price: "7000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it34",
		title: "Gi???y ??n Bless You 1 l???p 100 t???",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/3004/77287/bhx/khan-giay-an-bless-you-a-la-vie-1-lop-goi-100-to-202104231015369707_300x300.jpg",
		price: "17000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it35",
		title: "M?? tr???ng cao c???p Meizan g??i 500g",
		description: "",
		image: "https://cdn.tgdd.vn/bachhoaxanh/themes-combo/54.Mobile.jpg",
		price: "31800",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it36",
		title: "G???o Tr???ng Nh???t Vinh Hi???n t??i 5kg",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2513/233632/bhx/gao-nhat-vi-vinh-hien-tui-5kg-202102240855454935_300x300.png",
		price: "141000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it37",
		title: "Ph?? mai vi?? s????a Teama h????p 120g",
		description: "",
		image: "https://cdn.tgdd.vn/bachhoaxanh/themes-combo/54.Mobile.jpg",
		price: "26000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it38",
		title: "Ch??? gi?? h???i s???n ?????c bi???t g??i 500g",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/7171/232189/bhx/cha-gio-hai-san-dac-biet-bep-5-sao-goi-500g-202104262322482875_300x300.jpg",
		price: "49000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it39",
		title: "X??c x??ch heo h???m n???m Xuxifarm 175g",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/3507/228215/bhx/xuc-xich-vi-heo-ham-nam-bao-ngu-xuxifarm-goi-175g-202104281658120675_300x300.jpg",
		price: "15200",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it40",
		title: "X??c x??ch Teen l???c tr???ng mu???i 53g",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/3507/242221/bhx/xuc-xich-teen-lac-vui-vi-trung-muoi-rong-bien-lc-foods-ly-53g-202107101321095096_300x300.jpg",
		price: "9100",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it41",
		title: "B??nh quy b?? O&T Royal Danish 110g",
		description: "",
		image: "https://cdn.tgdd.vn/bachhoaxanh/themes-combo/19.Mobile.jpg",
		price: "21000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it42",
		title: "B??nh quy v??? ph?? mai Zess g??i 153g",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/3357/235184/bhx/banh-quy-pho-mai-zess-goi-153g-202102250849308735_300x300.jpg",
		price: "21000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it43",
		title: "Snack khoai t??y cay Karamucho 80g",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/3364/222001/bhx/snack-khoai-tay-vi-cay-dac-biet-lat-day-karamucho-goi-80g-202104291427315695_300x300.jpg",
		price: "18800",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it44",
		title: "Snack khoai t??y v??? cua ???t Peke 80g",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/3364/219748/bhx/snack-khoai-tay-peke-potato-chips-vi-cua-xao-ot-lon-80g-202104291435006467_300x300.jpg",
		price: "20900",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it45",
		title: "B??nh x???p nh??n ph?? mai g??i 53.5g",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/3360/79907/bhx/banh-xop-nhan-pho-mai-cal-cheese-goi-535g-202104261653043694_300x300.jpg",
		price: "6300",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it46",
		title: "B??nh quy Kokola socola h???p 100g",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/3357/221390/bhx/banh-quy-socola-kokola-waffle-cookies-hop-100g-202104261055316187_300x300.jpg",
		price: "19900",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it47",
		title: "B??nh quy v??? s???a Richwell h???p 160g",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/3357/237360/bhx/banh-quy-sua-richwell-hop-160g-202105030958519213_300x300.jpg",
		price: "21000???21000???",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it48",
		title: "N?????c gi???t h????ng n?????c hoa Surf 3l??t",
		description: "",
		image: "https://cdn.tgdd.vn/bachhoaxanh/themes-combo/49.Mobile.jpg",
		price: "94500",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it49",
		title: "N?????c r???a ch??n IZI HOME t??i 1.5kg",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2387/230727/bhx/nuoc-rua-chen-izi-home-huong-tra-xanh-muoi-bien-tui-15kg-202105271104154899_300x300.jpg",
		price: "33000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it50",
		title: "T???y b???n c???u v?? nh?? t???m VIM 900ml",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2511/76924/bhx/nuoc-tay-bon-cau-nha-tam-vim-diet-khuan-900ml-202107141655058630_300x300.jpg",
		price: "33000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it51",
		title: "N?????c gi???t n?????c hoa Lix t??i 2.5 l??t",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2464/212820/bhx/nuoc-giat-lix-matic-huong-nuoc-hoa-tui-25-lit-202104141624074036_300x300.jpg",
		price: "67000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it52",
		title: "N?????c r???a ch??n IZI HOME t??i 750g",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2387/234231/bhx/nuoc-rua-chen-izi-home-tra-xanh-muoi-bien-tui-750g-202105271150021269_300x300.jpg",
		price: "15000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it53",
		title: "N?????c gi???t b???n ?????p OMO Matic 3 l??t",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2464/222102/bhx/nuoc-giat-omo-matic-ben-dep-cua-tren-tui-3-lit-202104141628032903_300x300.jpg",
		price: "145000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it54",
		title: "N?????c r???a ch??n Sunlight t??i 2.1kg",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2387/222099/bhx/nuoc-rua-chen-sunlight-matcha-tra-nhat-tui-21kg-202105271130240589_300x300.jpg",
		price: "52000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it55",
		title: "N?????c r???a ch??n Sunlight 3.67 l??t",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2387/76485/bhx/nuoc-rua-chen-sunlight-chanh-100-chiet-xuat-chanh-tuoi-can-367-lit-202103030903102510_300x300.jpg",
		price: "88000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it56",
		title: "N?????c r???a ch??n IZI HOME t??i 1.5kg",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/2387/230726/bhx/nuoc-rua-chen-izi-home-huong-sa-chanh-tui-15kg-202105271111246219_300x300.jpg",
		price: "31000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it57",
		title: "B??? 3 h???p ch??? nh???t Inochi Hokkaido",
		description: "",
		image: "https://cdn.tgdd.vn/bachhoaxanh/themes-combo/7.Mobile.jpg",
		price: "98000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it58",
		title: "G??ng tay c?? m??c treo 3M size L",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/3730/177696/bhx/gang-tay-cao-su-co-moc-treo-3m-size-l-202008031529235040_300x300.jpg",
		price: "44000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it59",
		title: "B??ng t???m 1 l???p nh???a PE Unibee 65g",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/3727/217303/bhx/bong-tam-1-lop-unibee-65g-giao-mau-ngau-nhien-202105041000318198_300x300.jpg",
		price: "30000",
		salePrice: null,
		cateId: null,
	},
	{
		id: "it60",
		title: "3 cu???n 35 t??i r??c t??? hu??? 44x56cm",
		description: "",
		image: "https://cdn.tgdd.vn/Products/Images/6553/226079/bhx/loc-3-cuon-tui-rac-den-tu-huy-sinh-hoc-bach-hoa-xanh-44x56cm-1kg-202104281053589333_300x300.jpg",
		price: "45000",
		salePrice: null,
		cateId: null,
	},
];

const Collections = (props) => {
	const classes = useStyles();
	const { categoryId: cateId } = useParams();
	const dispatch = useDispatch();
	const itemAddToCartHandler = (item) => {
		dispatch(cartActions.addItem({ ...item, amount: 1 }));
	};
	useEffect(() => {
		dispatch(uiActions.hideModal());
	}, [dispatch, cateId]);
	return (
		<>
			<div className={classes.root}>
				<Header showCart showMenu />
				<SideBar />
				<div className={classes.main}>
					<div className={classes.mainContent}>
						<Breadcrumbs
							aria-label="breadcrumb"
							className={classes.breadcrumbs}
						>
							<Link color="inherit" to="/">
								Home
							</Link>
							<Link
								color="inherit"
								to="/collections"
								className={!cateId ? classes.currentLink : ""}
							>
								Collections
							</Link>
							{cateId && (
								<Typography
									color="textPrimary"
									style={{ textTransform: "capitalize" }}
									className={classes.currentLink}
								>
									{cateId}
								</Typography>
							)}
						</Breadcrumbs>

						{cateId && (
							<div className={classes.banner}>
								<span className={classes.bannerOverlay}></span>
								<Typography
									variant="h3"
									className={classes.bannerTitle}
								>
									{cateId}
								</Typography>
							</div>
						)}

						<Grid
							container
							spacing={2}
							className={classes.collectionItems}
						>
							{collectionItems?.length > 0 &&
								collectionItems.map((item, index) => (
									<Grid
										item
										key={index}
										xs={12}
										sm={4}
										md={3}
									>
										<ProductItem
											id={item.id}
											title={item.title}
											description={item.description}
											image={item.image}
											price={item.price}
											salePrice={item.salePrice}
											onAddToCart={itemAddToCartHandler.bind(
												null,
												item
											)}
										/>
									</Grid>
								))}
						</Grid>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Collections;
