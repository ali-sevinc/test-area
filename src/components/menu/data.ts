export type ItemType = {
  name: string;
  to: string;
  children?: {
    name: string;
    to: string;
    children?: {
      name: string;
      to: string;
      children?: {
        name: string;
        to: string;
        children?: { name: string; to: string }[];
      }[];
    }[];
  }[];
};
export const menuData: ItemType[] = [
  { name: "Home", to: "/" },
  {
    name: "Profile",
    to: "/profile",
    children: [
      {
        name: "Details",
        to: "details",
        children: [
          { name: "Location", to: "location" },
          {
            name: "Friends",
            to: "friends",
            children: [
              {
                name: "Details",
                to: "details",
                children: [
                  { name: "Location", to: "location" },
                  { name: "Friends", to: "friends" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Settings",
    to: "/settings",
    children: [
      { name: "Account", to: "account" },
      {
        name: "Safety",
        to: "safety",
        children: [{ name: "Change Password", to: "change-password" }],
      },
    ],
  },
];
