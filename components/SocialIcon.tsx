import Image from "next/image";
import React from "react";

interface SocialIconProps {
  link: string;
  imageSrc: string;
}

function SocialIcon(props: SocialIconProps) {
  return (
    <a className="select-none m-2" href={props.link} target="_blank">
      <Image src={props.imageSrc} width={32} height={32} />
    </a>
  );
}

export default SocialIcon;
