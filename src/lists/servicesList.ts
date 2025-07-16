import RegularWhiteningTeethImg from "../assets/regular-whitening-teeth.png";
import ApolloniaWhiteningTeethImg from "../assets/apollonia-whitening-teeth.png";
import GrillzImg from "../assets/grillz.png";
import MaintenanceKitImg from "../assets/maintenance-kit.png";
import WhiteningTrayImg from "../assets/whitening-tray-cropped.png";
import SportsguardImg from "../assets/sportsguard.png";
import { serviceImageStyle } from "../styling";

export interface ServiceProps {
  id: number;
  title: string;
  text: string;
  textWidth?: string;
  price: number | [number, number];
  priceComment: string | [string, string] | null;
  image?: any;
  imageStyles?: {};
}

export const servicesList: ServiceProps[] = [
  {
    id: 1,
    title: "Professional teeth cleaning",
    text: "(includes exam, polish, fluoride and desensitization as needed)",
    price: 160,
    priceComment: "if you do /not have /insurance",
  },
  {
    id: 2,
    title: "Regular painless teeth whitening",
    text: "(1 visit 1hr, recommended for yellowish-white teeth)",
    price: 160,
    priceComment: null,
    image: RegularWhiteningTeethImg,
    imageStyles: serviceImageStyle(
      "absolute",
      { xs: "3.8rem", md: "4.5rem" },
      { xs: "65%", sm: "70%", md: "73%" }
    ),
  },
  {
    id: 3,
    title: "Apollonia painless teeth whitening",
    text: "(2 visits 1hr, recommended for yellow teeth)",
    price: 310,
    priceComment: null,
    image: ApolloniaWhiteningTeethImg,
    imageStyles: serviceImageStyle(
      "absolute",
      { xs: "3.8rem", md: "4.5rem" },
      { xs: "65%", sm: "70%", md: "73%" }
    ),
  },
  {
    id: 4,
    title: "Teeth whitening 3-6 months maintenance session",
    text: "(40 min)",
    price: 130,
    priceComment: null,
  },
  {
    id: 5,
    title: "White spot lesions removal",
    text: "(Icon Resin infiltration)",
    price: 70,
    priceComment: "per /tooth",
  },
  {
    id: 7,
    title: "Grillz",
    text: `(they're safe, non-permanent, and easy to wear)`,
    price: 250,
    priceComment: "per /tooth",
    image: GrillzImg,
    imageStyles: {
      ...serviceImageStyle(
        "absolute",
        { xs: "3.8rem", md: "4.5rem" },
        { xs: "63%", md: "70%" }
      ),
      rotate: "10deg",
    },
  },
  {
    id: 8,
    title: "teeth whitening maintenance kit",
    text: "(perfect for in-between visits or as a gentle top-up)",
    price: [30, 20],
    priceComment: ["with LED /lamp", ""],
    image: MaintenanceKitImg,
    imageStyles: serviceImageStyle(
      "absolute",
      { xs: "3rem", md: "4rem" },
      { xs: "66%", md: "70%" }
    ),
  },
  {
    id: 9,
    title: "teeth whitening trays",
    text: "(for at-home teeth whitening or maintaining results after in-office treatment)",
    textWidth: "100%",
    price: 200,
    priceComment: null,
    image: WhiteningTrayImg,
    imageStyles: serviceImageStyle(
      "absolute",
      { xs: "3rem", md: "3.5rem" },
      "97%"
    ),
  },
  {
    id: 10,
    title: "sportsguard",
    text: "(helps keep your teeth in place)",
    price: 220,
    priceComment: null,
    image: SportsguardImg,
    imageStyles: serviceImageStyle(
      "absolute",
      { xs: "3.5rem", md: "5.5rem" },
      "67%"
    ),
  },
];
