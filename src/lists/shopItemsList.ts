export interface ShopItemProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  quantityRange: number;
}

export const shopItemsList: ShopItemProps[] = [
  {
    id: 1,
    title: "Teeth whitening maintenance kit",
    description: `TEETH WHITENING MAINTENANCE KIT DESCRIPTION! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    imageUrl: "https://picsum.photos/1000",
    price: 30,
    quantityRange: 3,
  },
  {
    id: 2,
    title: "Mini LED lamp",
    description: `MINI LED LAMP DESCRIPTION 2! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    imageUrl: "https://picsum.photos/1000",
    price: 15,
    quantityRange: 5,
  },
  {
    id: 3,
    title: "WHITENING COURSE",
    description: `WHITENING COURSE DESCRIPTION 3! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    imageUrl: "https://picsum.photos/1000",
    price: 949,
    quantityRange: 1,
  },
];
