import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
import { nike2, nike3, nike4, nike5, nike6, nike7, nike8, nike9, nike10, nike11, nike12, nike13 } from '../assets/images/nike'

export const navLinks = [
    { href: "home", label: "Home" },
    { href: "about-us", label: "About Us" },
    { href: "products", label: "Products" },
    { href: "summer-event", label: "Summer Event" },
    { href: "contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

export const sentences = [
    "Step into style this summer with our exclusive 2024 shoes collection! Whether you're hitting the beach, exploring the city, or attending outdoor events! Our LATEST DESIGNS are crafted to keep you comfortable and chic all season long.",
    "BREATHABLE ELEGANCE: Lightweight Sneakers: Experience unparalleled comfort with our new range of lightweight sneakers. Perfect for those long summer strolls, these sneakers offer breathability with their advanced mesh designs and cushioned soles. Available in a variety of vibrant colors and patterns, they are the ideal blend of fashion and function",
    "CHIC SANDALS: Effortless Style: Our summer sandals collection is all about elegance and ease. From strappy gladiators to minimalist slides, each pair is designed to provide superior comfort while enhancing your style quotient. Made with premium materials and featuring intricate details, these sandals are perfect for both casual outings and special occasions.",
    "ADVENTURER-READY: Durable Outdoor Shoes: For those who seek adventure, our durable outdoor shoes are built to withstand the elements. Featuring rugged soles and supportive structures, these shoes are perfect for hiking, camping, or any outdoor activities. Stay protected and stylish no matter where your summer adventures take you."
];

export const shoeImages = [
    nike2, nike3, nike5, nike6, nike7, nike9, nike10, nike11,
];