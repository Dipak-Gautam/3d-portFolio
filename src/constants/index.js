import { color } from "framer-motion";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  jira,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  DcubeLogo,
  virtualTechnology,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  TonicByte,
  AdoptMe,
  meropatro,
  virtualPatro,
  nayaGhar,
  hotelhoni,
  carRental,
  skyView,
  AiCalculator,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "jira",
    icon: jira,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "D Cube IT Solution",
    icon: DcubeLogo,
    iconBg: "#383E56",
    date: "June 2023 - Setember 2023",
    heading:
      "As part of my internship at D Cube IT Solution, I contributed to the development of an eCommerce application. My role involved:",
    points: [
      "Building and maintaining features using React.js and other front-end technologies.",
      "Working closely with designers, product managers, and developers to create user-friendly and high-performance components.",
      "Ensuring the app's responsiveness and cross-browser compatibility for a smooth user experience on various devices.",
      "Participating in code reviews, offering insights, and learning from feedback to enhance my coding skills and contribute to the project’s overall success.",
    ],
    ending: "",
  },
  {
    title: "React.js Developer",
    company_name: "Virtual Technology",
    icon: virtualTechnology,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - May 2024",
    heading:
      "As a React.js developer at VirtualTechnology, I developed a comprehensive Nepali/Hindu calendar application with the following key features:",
    points: [
      "Supported over 100 years of Nepali/Hindu calendar data, including detailed Tithi and holiday information.",
      "Integrated horoscope and blog sections, providing users with daily predictions and informative articles.",
      "Developed a robust date converter between Nepali and Gregorian calendars.",
      "Implemented an event handler with Google Calendar API, allowing users to schedule and manage events seamlessly",
      "Integrated the calendar with Google Calendar for enhanced functionality.",
    ],
    ending:
      "This project enhanced my expertise in React.js, API integration, and creating dynamic, feature-rich applications.",
  },
  {
    title: "React Native Developer",
    company_name: "Tonic Byte",
    icon: TonicByte,
    iconBg: "#383E56",
    date: "July 2024 - November 2024",
    heading:
      "As a React Native developer at TonicByte, I contributed to the development of a comprehensive hotel management system. Key features of the system include:",
    points: [
      "A finance module to manage hotel revenues, expenses, and financial reporting.",
      "A booking system allowing users to handle reservations with ease.",
      "Order placement and billing features for seamless customer service and efficient operations.",
      "Automated website creation, enabling hotels to quickly set up and manage their online presence.",
      "Additional functionalities to cover the complete range of hotel management needs.",
    ],
    ending:
      "This project sharpened my skills in mobile development, creating complex systems, and delivering high-quality user experiences.",
  },
];

const testimonials = [
  {
    testimonial:
      " I’m truly impressed with Dipak Gautam's work. His hard work and quick learning brought our website to a level that genuinely reflects our product's quality.",
    name: "Yagya Nath Gautam ",
    designation: "CEO",
    company: "D Cube I T Solution Pvt Ltd",
    image:
      "https://scontent.fpkr1-1.fna.fbcdn.net/v/t39.30808-6/462847106_10234795449296124_2341898423819976463_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=AuwcqS0iZ8kQ7kNvgHCcMsK&_nc_zt=23&_nc_ht=scontent.fpkr1-1.fna&_nc_gid=An3-agkwFrzDhI_s4Az6QoQ&oh=00_AYDGcIMR0EMvVLq4psPMBoKNFF04t689GM7VFf0bnUuKfw&oe=672AB275",
  },
  {
    testimonial:
      "Dipak impressed us with his problem-solving skills and out-of-the-box thinking, delivering creative solutions that elevated our project to next level.",
    name: "Prakash Poudel",
    designation: "Chairman ",
    company: "Virtual Technology Pvt.Ltd",
    image:
      "https://scontent.fpkr1-1.fna.fbcdn.net/v/t1.6435-9/49474904_2017695331656287_1066257714637701120_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=PDTpte7I0ewQ7kNvgGRBgJF&_nc_zt=23&_nc_ht=scontent.fpkr1-1.fna&_nc_gid=ARtgk51H8aIWUDob1Ek6JmR&oh=00_AYDmr545dw6SWZtoRHo5gpqmXBwBXFnvESbNyG2ejc-BEQ&oe=674C5056",
  },
  {
    testimonial:
      "Dipak Gautam has been a consistent performer, demonstrating exceptional hard work and dedication. His innovative solutions have greatly enhanced our project and made a real impact.",
    name: "Dinesh Pokherel",
    designation: "Senior Backend Developer",
    company: "",
    image:
      "https://scontent.fpkr1-1.fna.fbcdn.net/v/t39.30808-6/275295786_1319709098531447_9006479951718267353_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hviAGo3VEtcQ7kNvgG0wbPP&_nc_zt=23&_nc_ht=scontent.fpkr1-1.fna&_nc_gid=A-voSnYSwYYRc8GHye5ZG3h&oh=00_AYA2vdccVyuyT3bkHoR6YiH_mL1ukq6OFyuVCZM6yLRJUQ&oe=672AC4D2",
  },
];

const mobileProjects = [
  {
    name: "Hotel Honi",
    image: hotelhoni,
    description:
      "HotelHoni is a powerful hotel management app that simplifies hotel operations with features like booking, order, and inventory management. It covers all the essential tools needed to efficiently manage day-to-day hotel activities in one easy-to-use platform.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "red-text-gradient",
      },
      {
        name: "nativewind",
        color: "pink-text-gradient",
      },
      {
        name: "onSignal",
        color: "orange-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    source_code_link: null,
  },
  {
    name: "Mero-Patro",
    image: meropatro,
    description:
      "This React Native app offers 100+ years of Nepali (BS) date support, an AD to BS date converter, and daily, monthly, and yearly horoscope features. Additionally, users can easily add and manage events, making it a comprehensive calendar and astrological tool.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "Mango-DB",
        color: "red-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "onSignal",
        color: "orange-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    source_code_link: null,
  },
  {
    name: "Pet Adoption",
    image: AdoptMe,
    description:
      "This mobile application helps reduce pet abandonment by connecting adopters with pets in need of a new home. Users can list pets for adoption or browse available animals, making it easier to provide them with a loving family and a second chance at life.",
    tags: [
      {
        name: "Mongo-DB",
        color: "red-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "onSignal",
        color: "orange-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Dipak-Gautam",
  },
];

const projects = [
  {
    name: "Virtual Patro",
    description:
      "This web application offers 100+ years of Nepali (BS) date support, an AD to BS date converter, and daily, monthly, and yearly horoscopes. Users can also add and manage events, making it a complete calendar and astrology tool.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Express-js",
        color: "purple-text-gradient",
      },
    ],
    image: virtualPatro,
    source_code_link: null,
    navLink: "https://virtualpatro-demo.netlify.app/",
  },
  {
    name: "Real Estate",
    description:
      "This real estate website allows users to buy and rent homes in various locations around the world. Easily browse properties and manage listings, providing a seamless experience for finding your next home or investment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nayaGhar,
    source_code_link: "https://github.com/Dipak-Gautam/real-estate-website-",
    navLink: "https://dipakgautam-nayaghar.netlify.app",
  },
  {
    name: "Car Rental",
    description:
      "Car-Rental is a global platform for browsing, renting, and managing vehicles in locations worldwide. Find the perfect car for travel, business, or adventure with ease and convenience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "AOS",
        color: "green-text-gradient",
      },
    ],
    image: carRental,
    source_code_link: "https://github.com/Dipak-Gautam/react-Car-Rental-webapp",
    navLink: "https://mero-car-rental.netlify.app",
  },
  {
    name: "Sky-View Paragliding",
    description:
      "Sky View Paragliding is your gateway to thrilling paragliding experiences in Pokhara, Nepal. Easily browse and book flights to soar above stunning landscapes, ensuring an unforgettable adventure in the Himalayas.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "green-text-gradient",
      },
    ],
    image: skyView,
    source_code_link: "https://github.com/Dipak-Gautam/Paragliding",
    navLink: "https://skyview-paragliding.netlify.app",
  },
  {
    name: "Ai Calculator",
    description:
      "AI Calculator is an innovative tool that allows users to easily perform calculations while leveraging advanced AI features. With a user-friendly interface, it streamlines complex computations and provides intelligent insights for an enhanced calculating experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "green-text-gradient",
      },
    ],
    image: AiCalculator,
    source_code_link: "https://github.com/Dipak-Gautam/Paragliding",
    navLink: "https://mero-aicalculator.netlify.app",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  mobileProjects,
};
