import Image from "next/image";
import React, { useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";

export interface IImageProps {
  src: string;
  alt: string;
}

export default function ImageApp(props: IImageProps) {
  const styleProps = useSpring({
    loop: true,
    to: [{ opacity: 1 }, { opacity: 0.5 }],
    from: { opacity: 0.5 },
  });
  return (
    <>
      <animated.div style={styleProps}>
        <Image src={props.src} alt={props.alt} width={200} height={200} />
      </animated.div>
    </>
  );
}
