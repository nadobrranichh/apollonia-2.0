import RegularWhiteningTeethImg from "../assets/regular-whitening-teeth.png";
import ApolloniaWhiteningTeethImg from "../assets/apollonia-whitening-teeth.png";
import GrillzImg from "../assets/grillz.png";
import { serviceImageStyle } from "../styling";

export interface ServiceProps {
  id: number;
  type: string;
  title?: string;
  text?: string;
  price?: number;
  priceComment?: string | null;
  image?: any;
  imageStyles?: {};
}

// / - new line
export const servicesList: ServiceProps[] = [
  {
    id: 1,
    type: "regular",
    title: "Professional teeth cleaning",
    text: "(includes exam, polish, fluoride and /desensitization as needed)",
    price: 160,
    priceComment: "if you do /not have /insurance",
  },
  {
    id: 2,
    type: "regular",
    title: "Regular painless teeth whitening",
    text: "(1 visit 1hr, recommended for /yellowish-white teeth)",
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
    type: "regular",
    title: "Apollonia painless teeth whitening",
    text: "(2 visits 1hr, recommended for yellow /teeth)",
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
    type: "regular",
    title: "Teeth whitening 3-6 months /maintenance session",
    text: "(40 min)",
    price: 130,
    priceComment: null,
  },
  {
    id: 5,
    type: "regular",
    title: "White spot lesions removal",
    text: "(Icon Resin infiltration)",
    price: 70,
    priceComment: "per /tooth",
  },
  {
    id: 6,
    type: "gem",
  },
  {
    id: 7,
    type: "regular",
    title: "Grillz",
    text: `(they're safe, non-permanent, /and easy to wear)`,
    price: 250,
    priceComment: "per /tooth",
    image: GrillzImg,
    imageStyles: {
      ...serviceImageStyle(
        "absolute",
        { xs: "3.8rem", md: "4.5rem" },
        { xs: "55%", sm: "65%", md: "70%" }
      ),
      rotate: "10deg",
    },
  },
];
