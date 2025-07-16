import avatar1 from "../assets/customers-avatars/customer-1.png";
import avatar2 from "../assets/customers-avatars/customer-2.png";
import avatar3 from "../assets/customers-avatars/customer-3.png";
import avatar4 from "../assets/customers-avatars/customer-4.png";
import avatar5 from "../assets/customers-avatars/customer-5.png";
import avatar6 from "../assets/customers-avatars/customer-6.png";

export interface ReviewProps {
  id: number;
  name: string;
  avatarUrl: string;
  reviewText: string;
  rating: number;
}

export const reviewsList: ReviewProps[] = [
  {
    id: 1,
    name: "Bryanna Trece",
    avatarUrl: avatar4,
    reviewText:
      "I highly recommend Nataliia as a dentist. <b>She goes above and beyond to ensure her customers feel cared for</b>, and comfortable during their visit. She takes the time to explain the procedure, and gives you follow up tips. I got my teeth whitened by her here, and <b>I was incredibly impressed with the results after just one visit</b>. My teeth were significantly whiter after just one visit, what surprised me the most was that <b>I experienced no pain, or discomfort during the process or afterwards.</b> Her whitening technique is the best there is out there",
    rating: 5,
  },
  {
    id: 2,
    name: "Viktoriia Osipovych",
    avatarUrl: avatar1,
    reviewText:
      "The whitening procedure was <b>completely painless</b>! I felt comfortable throughout, and the results were even better than I expected. <b>Highly recommend</b> it for anyone looking to brighten their smile without any discomfort.",
    rating: 5,
  },
  {
    id: 3,
    name: "Lily Voloshyna",
    avatarUrl: avatar2,
    reviewText:
      "I had an <b>amazing experience</b> visiting Natalia for teeth whitening! <b>Natalia is an incredibly skilled and attentive professional.</b> The whitening procedure was <b>completely painless</b>, and <b>the results are just fantastic</b> – my teeth look so bright and beautiful! I highly recommend her to anyone looking for a high-quality teeth whitening service! 🔥🔥🔥",
    rating: 5,
  },
  {
    id: 4,
    name: "simona apostol",
    avatarUrl: avatar5,
    reviewText:
      "<b>Painless teeth whitening with great results</b>. Thank you, Nataliia! 🦷🤍",
    rating: 5,
  },
  {
    id: 5,
    name: "Анна Chebotar",
    avatarUrl: avatar3,
    reviewText:
      "I would like to thank Natalia for the pleasant and comfortable teeth whitening, it was my first experience, <b>I was very pleased with the result, everything went painlessly</b> ❤️",
    rating: 5,
  },
  {
    id: 6,
    name: "Hoang Vo",
    avatarUrl: avatar6,
    reviewText:
      "I had teeth whitening with Natalia, <b>it was painless and my teeth were 6-8 shades whiter.</b>",
    rating: 5,
  },
];
