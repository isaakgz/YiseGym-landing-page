import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";

interface LinksProps {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
}
const Links = ({ page, selectedPage, setSelectedPage }: LinksProps) => {
  // Convert the page name to lowercase and remove spaces
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    // Add the AnchorLink component
    <AnchorLink
      href={`#${lowerCasePage}`}
      className={`text-sm ${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        console.log("Selected page: ", lowerCasePage);
      }}
    >
      {page}
    </AnchorLink>
  );
};

export default Links;
