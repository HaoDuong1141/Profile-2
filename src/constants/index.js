import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    framer,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
} from "../assets";
import js from "../assets/js.jpg";
import css from "../assets/css.png";
import html from "../assets/html.jpg";
import react from "../assets/react.jpg";
import nextjs from "../assets/nextjs.png";
import tailwindcss from "../assets/tailwindcss.png";

export const navigation = [
    {
        id: "0",
        title: "About Me",
        url: "#about-me",
    },
    {
        id: "1",
        title: "Projects",
        url: "#projects",
    },
    {
        id: "2",
        title: "Socials",
        url: "#socials",
    },
    {
        id: "3",
        title: "Contact",
        url: "#contact",
    },
];

export const heroIcons = [js, css, html, react, nextjs, tailwindcss];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
];

export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
];

export const roadmap = [
    {
        id: "0",
        title: "Voice recognition",
        text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
        date: "May 2023",
        status: "done",
        imageUrl: roadmap1,
        colorful: true,
    },
    {
        id: "1",
        title: "Gamification",
        text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
        date: "May 2023",
        status: "progress",
        imageUrl: roadmap2,
    },
    {
        id: "2",
        title: "Chatbot customization",
        text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
        date: "May 2023",
        status: "done",
        imageUrl: roadmap3,
    },
    {
        id: "3",
        title: "Integration with APIs",
        text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
        date: "May 2023",
        status: "progress",
        imageUrl: roadmap4,
    },
];

export const collabText =
    "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
    {
        id: "0",
        title: "Seamless Integration",
        text: collabText,
    },
    {
        id: "1",
        title: "Smart Automation",
    },
    {
        id: "2",
        title: "Top-notch Security",
    },
];

export const collabApps = [
    {
        id: "0",
        title: "Figma",
        icon: figma,
        width: 26,
        height: 36,
    },
    {
        id: "1",
        title: "Notion",
        icon: notion,
        width: 34,
        height: 36,
    },
    {
        id: "2",
        title: "Discord",
        icon: discord,
        width: 36,
        height: 28,
    },
    {
        id: "3",
        title: "Slack",
        icon: slack,
        width: 34,
        height: 35,
    },
    {
        id: "4",
        title: "Photoshop",
        icon: photoshop,
        width: 34,
        height: 34,
    },
    {
        id: "5",
        title: "Protopie",
        icon: protopie,
        width: 34,
        height: 34,
    },
    {
        id: "6",
        title: "Framer",
        icon: framer,
        width: 26,
        height: 34,
    },
    {
        id: "7",
        title: "Raindrop",
        icon: raindrop,
        width: 38,
        height: 32,
    },
];

export const pricing = [
    {
        id: "0",
        title: "Basic",
        description: "AI chatbot, personalized recommendations",
        price: "0",
        features: [
            "An AI chatbot that can understand your queries",
            "Personalized recommendations based on your preferences",
            "Ability to explore the app and its features without any cost",
        ],
    },
    {
        id: "1",
        title: "Premium",
        description:
            "Advanced AI chatbot, priority support, analytics dashboard",
        price: "9.99",
        features: [
            "An advanced AI chatbot that can understand complex queries",
            "An analytics dashboard to track your conversations",
            "Priority support to solve issues quickly",
        ],
    },
    {
        id: "2",
        title: "Enterprise",
        description: "Custom AI chatbot, advanced analytics, dedicated account",
        price: null,
        features: [
            "An AI chatbot that can understand your queries",
            "Personalized recommendations based on your preferences",
            "Ability to explore the app and its features without any cost",
        ],
    },
];

export const benefits = [
    {
        id: "0",
        title: "Travel App",
        text: "Campingsite GPS tracker app with a beautiful hero section using NextJS and TailwindCSS",
        backgroundUrl: "./src/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        link: "https://travel-app-sepia-two.vercel.app/",
    },
    {
        id: "1",
        title: "Car Hub",
        text: "Car showcase app with advance search and dialog panels using NextJS, RapidAPI, and TailwindCSS",
        backgroundUrl: "./src/assets/benefits/card-2.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        light: true,
        link: "https://car-hub-psi-three.vercel.app/",
    },
    {
        id: "2",
        title: "Food Delivery App",
        text: "Food delivery app similar to Uber Eats or Door Dash with payment options using React",
        backgroundUrl: "./src/assets/benefits/card-3.svg",
        iconUrl: benefitIcon3,
        imageUrl: benefitImage2,
        link: "https://food-delivery-app-sigma-jade.vercel.app/",
    },
    {
        id: "3",
        title: "Anime Scrolling App",
        text: "Infite anime scrolling app with API calls to Rapid API using React",
        backgroundUrl: "./src/assets/benefits/card-4.svg",
        iconUrl: benefitIcon4,
        imageUrl: benefitImage2,
        light: true,
        link: "https://anime-scroll-sepia.vercel.app/",
    },
    {
        id: "4",
        title: "Brainwave",
        text: "AI company landing page with modern UI/UX design using React, Vite, and TailwindCSS",
        backgroundUrl: "./src/assets/benefits/card-5.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        link: "https://brainwave-ten-eosin.vercel.app/",
    },
    {
        id: "5",
        title: "Company Landing Page",
        text: "General company landing page with gradient, custom fonts, and clean UI/UX using NextJS",
        backgroundUrl: "./src/assets/benefits/card-6.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        link: "https://landing-page-six-pi-10.vercel.app/",
    },
];

export const socials = [
    {
        id: "0",
        title: "Discord",
        iconUrl: discordBlack,
        url: "#",
    },
    {
        id: "1",
        title: "Twitter",
        iconUrl: twitter,
        url: "#",
    },
    {
        id: "2",
        title: "Instagram",
        iconUrl: instagram,
        url: "#",
    },
    {
        id: "3",
        title: "Telegram",
        iconUrl: telegram,
        url: "#",
    },
    {
        id: "4",
        title: "Facebook",
        iconUrl: facebook,
        url: "#",
    },
];
