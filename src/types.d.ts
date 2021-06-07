declare global {
  interface FormDataValue {
    uri: string;
    name: string;
    type: string;
    fileName: string;
  }

  interface FormData {
    append(name: string, value: FormDataValue): void;
    set(name: string, value: FormDataValue): void;
  }
}

export type User = {
  id: string;
  _id?: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  imgURL?: string;
  token?: string;
};

export type Image = {
  id: string;
  fileName: string;
  creator: string;
  dateUploaded: string;
  URL: string;
  caption?: string;
};

type Group = {
  name: string;
  _id?: string;
  id: string;
  creator: User;
  thumbnail: Image | null;
  memberCount: number;
  publicGroup: boolean;
  invitedUsers: User[];
  images: Image[];
  inviteCode: string;
};
