import {
  faInstagram,
  faYoutube,
  faFacebookF,
  faTiktok,
  type IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

export interface SocialLink {
  platform: string;
  icon: IconDefinition;
  url: string;
}

export const socialsList: SocialLink[] = [
  {
    platform: "Instagram",
    icon: faInstagram,
    url: "https://www.instagram.com/apollonia_whitening/",
  },
  {
    platform: "YouTube",
    icon: faYoutube,
    url: "https://youtube.com/@nataliiashchepaniak?si=8RSzGEpjyMtXntIU",
  },
  {
    platform: "Facebook",
    icon: faFacebookF,
    url: "https://www.facebook.com/share/15qMP2EGQk/?mibextid=wwXIfr",
  },
  {
    platform: "TikTok",
    icon: faTiktok,
    url: "https://www.tiktok.com/@apollonia.whitening?_t=ZM-8w4nwkxUfl0&_r=1",
  },
];
