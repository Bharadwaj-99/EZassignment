import React from "react";

import "./App.css";
import Layout from "./components/layout";
import Card from "./components/card";

const App = () => {
  const services = [
    {
      title: "Presentation Design",
      description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    },
    {
      title: "Audio - Visual Production",
      description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    },
    {
      title: "Translation Services",
      description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    },
    {
      title: "Graphic Design",
      description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    },
    {
      title: "Research & Analytics",
      description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    },
    {
      title: "Data Processing",
      description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <div className="app">
      <div className="app-des">
        <Layout />

        <div className="app-services">
          {services.map((service, index) => (
            <Card
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
