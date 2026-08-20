import { Link } from "@/types";
import { sitePath } from "@/lib/site-path";

const links: Link[] = [
  {
    title: 'Home',
    href: '/',
    thumbnail: sitePath('/assets/nav-link-previews/landing.png')
  },
  {
    title: 'About',
    href: '/#about',
    thumbnail: sitePath('/assets/nav-link-previews/about.png')
  },
  {
    title: 'Skills',
    href: '/#skills',
    thumbnail: sitePath('/assets/nav-link-previews/skills.png')
  },
  {
    title: 'Projects',
    href: '/#projects',
    thumbnail: sitePath('/assets/nav-link-previews/projects.png')
  },
  // {
  //   title: 'Skills',
  //   href: '/skills',
  //   thumbnail: '/assets/nav-link-previews/skills.png'
  // },
  // {
  //   title: 'Testimonials',
  //   href: '/testimonials',
  //   thumbnail: '/assets/nav-link-previews/testimonials.png'
  // },
  {
    title: 'Blogs',
    href: '/blogs',
    thumbnail: sitePath('/assets/nav-link-previews/blog.png'),
  },
  {
    title: 'Resume',
    href: '/resume',
    thumbnail: sitePath('/assets/nav-link-previews/contact.png')
  },
  {
    title: 'Contact',
    href: '/#contact',
    thumbnail: sitePath('/assets/nav-link-previews/contact.png')
  }
];

export { links };
