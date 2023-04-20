import {
  AllProductsIcon,
  EyeglassIcon,
  FaceMaskIcon,
  HomeIcon,
  LotionIcon,
  MakeupIcon,
  MascaraIcon,
  PowderIcon,
  PumpIcon,
  ThermoMeterIcon,
  TrendIcon,
  TrophyIcon,
  WheelIcon,
} from "../../components/global/svg-icons";
import { HeaderLinksType } from "../types/global.types";

const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN;

const BASE_PRODUCT_URL = API_DOMAIN + "/products";

export const PRODUCT_URL = {
  base: BASE_PRODUCT_URL,
  image_upload: BASE_PRODUCT_URL + "/image-upload",
};

export const HEADER_LINKS: HeaderLinksType = {
  home: {
    name: "Home",
    route: "/",
    showInNav: true,
  },
  products: {
    name: "Products",
    route: "/products",
    showInNav: true,
  },
  cart: {
    name: "Cart",
    route: "/cart",
    showInNav: false,
  },
  about: {
    name: "About",
    route: "/about",
    showInNav: true,
  },
  blog: {
    name: "Blog",
    route: "/blog",
    showInNav: true,
  },
};

export const HOME_CATEGORIES = [
  {
    id: "1",
    name: "Home",
    icon: HomeIcon,
    link: "https://bazaar.ui-lib.com/healthbeauty-shop",
    subCatagory: [],
  },
  {
    id: "2",
    name: "Popular Product",
    icon: TrophyIcon,
    link: "https://bazaar.ui-lib.com/healthbeauty-shop",
    subCatagory: [],
  },
  {
    id: "3",
    name: "Trending Product",
    icon: TrendIcon,
    link: "https://bazaar.ui-lib.com/healthbeauty-shop",
    subCatagory: [],
  },
  {
    id: "4",
    name: "All Product",
    icon: AllProductsIcon,
    link: "https://bazaar.ui-lib.com/healthbeauty-shop",
    subCatagory: [],
  },
  {
    id: "5",
    name: "Heath and Beauty",
    icon: MakeupIcon,
    link: "",

    subCatagory: [
      {
        id: "1",
        name: "Beauty Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "2",
        name: "Medicine Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "3",
        name: "Mackup Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
    ],
  },
  {
    id: "6",
    name: "Maskara",
    icon: MascaraIcon,
    link: "",
    subCatagory: [
      {
        id: "1",
        name: "Beauty Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "2",
        name: "Medicine Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "3",
        name: "Mackup Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
    ],
  },
  {
    id: "7",
    name: "Lotion",
    icon: LotionIcon,
    link: "",
    subCatagory: [
      {
        id: "1",
        name: "Beauty Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "2",
        name: "Medicine Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "3",
        name: "Mackup Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
    ],
  },
  {
    id: "8",
    name: "Makeup",
    icon: MakeupIcon,
    link: "",
    subCatagory: [
      {
        id: "1",
        name: "Beauty Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "2",
        name: "Medicine Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "3",
        name: "Mackup Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
    ],
  },
  {
    id: "9",
    name: "Powder",
    icon: PowderIcon,
    link: "",
    subCatagory: [
      {
        id: "1",
        name: "Beauty Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "2",
        name: "Medicine Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "3",
        name: "Mackup Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
    ],
  },
  {
    id: "10",
    name: "Face Mask",
    icon: FaceMaskIcon,
    link: "",
    subCatagory: [
      {
        id: "1",
        name: "Beauty Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "2",
        name: "Medicine Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "3",
        name: "Mackup Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
    ],
  },
  {
    id: "11",
    name: "Digital Thermometer",
    icon: ThermoMeterIcon,
    link: "https://bazaar.ui-lib.com/healthbeauty-shop",
    subCatagory: [],
  },
  {
    id: "12",
    name: "Oxyzen Pump",
    icon: PumpIcon,
    link: "https://bazaar.ui-lib.com/healthbeauty-shop",
    subCatagory: [],
  },
  {
    id: "13",
    name: "Lens Case Kit",
    icon: EyeglassIcon,
    link: "https://bazaar.ui-lib.com/healthbeauty-shop",
    subCatagory: [],
  },
  {
    id: "14",
    name: "Automotive",
    icon: WheelIcon,
    link: "https://bazaar.ui-lib.com/healthbeauty-shop",
    subCatagory: [],
  },
];
