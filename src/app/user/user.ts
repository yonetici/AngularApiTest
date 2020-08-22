export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
  };
};
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
};
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IAlbum {
  userId: number;
  id: number;
  title: string;
}

export interface IPhotos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

