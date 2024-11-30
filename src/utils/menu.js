export const TOP_HEADER_MENU = [];

const USER_MENU = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Services',
    link: '/services',
  },
  {
    name: 'Clients',
    link: '/clients',
  },
  {
    name: 'Blogs',
    link: '/blogs',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
];

const ADMIN_MENU = [
  {
    name: 'Admin',
    link: '/admin',
  },
];

const ADMIN_EMAILS = [
  'pandey.dev25@gmail.com',
  'tiwarismahesh@gmail.com',
  'rhlsingh4323@gmail.com',
  'vijay.g.gehlot@gmail.com',
];

export const getMenu = (role) => {
  if (role === 'admin') {
    return USER_MENU.concat(ADMIN_MENU);
  } else {
    return USER_MENU;
  }
};

export const isUserAdmin = (email) => {
  return ADMIN_EMAILS.includes(email);
};
