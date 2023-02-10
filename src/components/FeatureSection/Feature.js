import "./Feature.css";
import FeatureCard from "./FeatureCard";
import { useState } from "react";
const Feature = () => {
  const feature = [
    {
      image: "/assets/f1.png",
      title: "CLEAN CODES",
      description:
        " To minimize coding errors on your web pages, be sure to perform code cleanup at least twice during the building phase. Following best standard practices make our apps error free.",
    },
    {
      image: "/assets/f2.png",
      title: "BEST UI DESIGN",
      description:
        "We build beautiful digital web apps that make the complex easy. Everyday, our team solves business challenges and create happy customers through the fusion of design and technology.",
    },
    {
      image: "/assets/f3.png",
      title: " FREE SEO",
      description:
        "We follow the practice of including content on your site that has the potential to improve your site’s visibility to search engines and their users. In other words, SEO can help your site show up more often in relevant searches.",
    },
    {
      image: "/assets/f4.png",
      title: "AFFORDABLE PRICES",
      description:
        "We allow customers to find the best prices, set price alerts and search through countless deals on their price comparison search engine. We offer best services with best prices in the market.",
    },
  ];
  const [features, setFeature] = useState(feature);

  return (
    <section className="feature_section layout_padding">
      <div className="container">
        <h2 className="text-uppercase">Our Features</h2>
      </div>
      <div>
        <div className="feature_card-container layout_padding2">
          {features.map((item) => (
            <FeatureCard key={item.image} props={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
