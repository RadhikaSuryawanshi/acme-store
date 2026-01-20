export type LoginData = {
  username: string;
  password: string;
};

export type SignupData = {
  //   id: string;
  username: string;
  email: string;
  password: string;
};

export type ProductData = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: "string";
  image: "https://example.com/";
};