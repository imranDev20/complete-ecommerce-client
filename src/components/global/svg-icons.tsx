import { createSvgIcon } from "@mui/material";
import HomeSvg from "../../images/menu-icons/home.svg";
import WheelSvg from "../../images/menu-icons/wheel.svg";
import TrophySvg from "../../images/menu-icons/trophy.svg";
import TrendSvg from "../../images/menu-icons/trend.svg";
import AllProductsSvg from "../../images/menu-icons/all-products.svg";
import MascaraSvg from "../../images/menu-icons/mascara.svg";
import PowderSvg from "../../images/menu-icons/powder.svg";
import LotionSvg from "../../images/menu-icons/lotion.svg";
import MakeupSvg from "../../images/menu-icons/makeup.svg";
import LipstickSvg from "../../images/menu-icons/lipstick.svg";
import FaceMaskSvg from "../../images/menu-icons/facemask.svg";
import ThermoMeterSvg from "../../images/menu-icons/thermometer.svg";
import PumpSvg from "../../images/menu-icons/pump.svg";
import EyeglassSvg from "../../images/menu-icons/eyeglass.svg";

/*  
    Generating SVG Icons using material ui createSvgIcon function which 
    has built in accebility and can take sx prop. Using SVGR package
    and adding webpack config in next.config.js
*/

export const HomeIcon = createSvgIcon(<HomeSvg />, "Home");
export const WheelIcon = createSvgIcon(<WheelSvg />, "Wheel");
export const TrophyIcon = createSvgIcon(<TrophySvg />, "Trophy");
export const TrendIcon = createSvgIcon(<TrendSvg />, "Trend");
export const AllProductsIcon = createSvgIcon(<AllProductsSvg />, "AllProducts");
export const MascaraIcon = createSvgIcon(<MascaraSvg />, "Mascara");
export const PowderIcon = createSvgIcon(<PowderSvg />, "Powder");
export const LotionIcon = createSvgIcon(<LotionSvg />, "Lotion");
export const MakeupIcon = createSvgIcon(<MakeupSvg />, "Makeup");
export const LipstickIcon = createSvgIcon(<LipstickSvg />, "Trend");
export const FaceMaskIcon = createSvgIcon(<FaceMaskSvg />, "FaceMask");
export const ThermoMeterIcon = createSvgIcon(<ThermoMeterSvg />, "ThermoMeter");
export const PumpIcon = createSvgIcon(<PumpSvg />, "Pump");
export const EyeglassIcon = createSvgIcon(<EyeglassSvg />, "Eyeglass");
