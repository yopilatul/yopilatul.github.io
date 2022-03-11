import React from "react";
import Button from "../Button";
import Card from "../Card";
import OldPortfolio from "../../public/assets/image/old_portfolio.png";
import RecentPortfolio from "../../public/assets/image/recent_portfolio.png";
import clf_language from "../../public/assets/image/clf-language.png";

const Work = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 md:gap-10">
        <Card
          src={RecentPortfolio}
          alt="Recent portfolio image"
          link="https://yopilatul.github.io"
          title="Old Portfolio"
          date="Mar 04, 2020"
          description="This is my first portfolio built using react, just simple ones."
        />
        <Card
          src={OldPortfolio}
          alt="Another portfolio image"
          link="https://yoviekobba.xyz"
          title="Another Portfolio"
          date="Jul 26, 2021"
          description="Just another portfolio, built using simple HTML, CSS and JS only"
        />
        <Card
          src={clf_language}
          alt="Clf language image"
          link="https://github.com/yopilatul/clf_language"
          title="Clf Language"
          date="Jul 21, 2021"
          description="clifter programming language"
        />
      </div>
      <div className="md:pt-16 mx-auto text-center">
        <Button>View More</Button>
      </div>
    </>
  );
};

export default Work;
