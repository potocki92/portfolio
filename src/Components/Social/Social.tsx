import stylex, { StyleXStyles } from "@stylexjs/stylex";
import React, { useCallback, useState } from "react";
import Button from "../Button/Button";
import { Animate } from "../AnimateWrapper/Animation";
import { EllipsisVertical } from "lucide-react";
import { useScrollLock } from "../../hooks/useScrollLock";
import { SocialMedia } from "../../data/lifeApi";
import { styles } from "./Social.stylex";
import { Link } from "react-router-dom";
import { Backdrop } from "../Backdrop/Backdrop";

export interface Props {
  href: string;
  icon: React.ElementType;
  style?: StyleXStyles;
  iconStyle?: StyleXStyles;
}

export const SocialLink = ({ style, iconStyle, href, icon: Icon }: Props) => {
  return (
    <div {...stylex.props(style)}>
      <Link to={href}>
        <Icon {...stylex.props(iconStyle)} />
      </Link>
    </div>
  );
};

export const Social = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleButtonClick = useCallback(() => {
    setIsModalOpen(!isModalOpen);
  }, [isModalOpen]);
  useScrollLock(isModalOpen);
  return (
    <>
      <div {...stylex.props(styles.socialButton)}>
        <Button is={true} onClick={handleButtonClick}>
          <EllipsisVertical></EllipsisVertical>
        </Button>
      </div>
      <SocialBackdrop isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></SocialBackdrop>
    </>
  );
};
export const SocialBackdrop = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Backdrop isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <Animate.Social>
        {SocialMedia.map((social, index) => (
          <Animate.SocialIcon index={index} total={SocialMedia.length}>
            <Button variant="ghost" size="icon" asChild>
              <SocialLink
                key={social.name}
                href={social.link}
                icon={social.icon}
                style={styles.link}
                iconStyle={styles.icon}
              />
            </Button>
          </Animate.SocialIcon>
        ))}
      </Animate.Social>
    </Backdrop>
  );
};
