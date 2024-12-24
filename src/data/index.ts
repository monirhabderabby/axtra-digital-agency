export const links = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 3,
    name: "Pages",
    href: "/pages",
    subMenus: [
      {
        id: 1,
        title: "Title A",
        links: [
          {
            id: 1,
            name: "Item 1",
            href: "/1",
          },
        ],
      },
      {
        id: 2,
        title: "Title B",
        links: [
          {
            id: 1,
            name: "Item $",
            href: "/1",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Services",
    href: "/services",
  },
  {
    id: 5,
    name: "Team",
    href: "/team",
  },
  {
    id: 6,
    name: "Blog",
    href: "/blog",
  },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
  },
];

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!",
    author: "MARIA D. HALK",
    position: "MANAGING DIRECTOR",
  },
  {
    id: 2,
    quote:
      "The level of dedication and expertise that the team brings to every project is exceptional. They've consistently delivered beyond our expectations.",
    author: "JAMES WILSON",
    position: "HEAD OF OPERATIONS",
  },
  {
    id: 3,
    quote:
      "Working with this team has transformed our business processes. Their innovative solutions and reliable support have been invaluable.",
    author: "SARAH CHEN",
    position: "TECHNICAL DIRECTOR",
  },
];
