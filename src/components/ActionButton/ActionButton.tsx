import { SelectedPage } from "@/shared/types";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface ActionButtonProps {
  children: React.ReactNode;
  setSelectedPage: (page: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: ActionButtonProps) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 text-lg hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.Contact)}
      href={`#${SelectedPage.Contact}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
