import {
  FaFacebookF,
  FaInstagram,
  FaDiscord,
  FaGithubAlt,
} from "react-icons/fa";
import Button from "./Button";

const Social = () => {
  return (
    <>
      <Button href="https://github.com/yopilatul">
        <FaGithubAlt className="text-lg lg:text-xl" />
      </Button>
      <Button href="https://www.instagram.com/yoviek12/">
        <FaInstagram className="text-lg lg:text-xl" />
      </Button>
      <Button href="https://www.facebook.com/yopilaytul/">
        <FaFacebookF className="text-lg lg:text-xl" />
      </Button>
      <Button href="https://discord.com/users/349874541784334337/">
        <FaDiscord className="text-lg lg:text-xl" />
      </Button>
    </>
  );
};

export default Social;
