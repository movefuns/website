import Image from "next/image";
import { SuiLogo } from "./logos/sui";

const ImageLogo = ({ src, width = 120, height = 16, alt = "" }) => {
  return (
    <Image
      src={"/partner/" + src}
      alt={alt}
      width={width}
      height={height}
      className="mx-auto my-8"
    />
  );
};

const LogosList = () => {
  const wrapperClassnames =
    "flex justify-center items-center gap-8 wrapper mr-8";

  return (
    <div className={wrapperClassnames}>
      <ImageLogo src="aptos.png" />
      <SuiLogo height={32} />
      <ImageLogo src="rooch.png" />
      {/* <ImageLogo src="antalphaLabs.png" /> */}
      {/* <ImageLogo src="aptosEden.png" /> */}
      <ImageLogo src="buidlerDAO.png" />
      {/* <ImageLogo src="DAOrayaki.png" /> */}
      {/* <ImageLogo src="denglian.png" /> */}
      <ImageLogo src="moveAccelerator.png" />
      <ImageLogo src="moveBit.png" />
      {/* <ImageLogo src="nonceGeek.png" /> */}
      {/* <ImageLogo src="rebase.png" /> */}
      {/* <ImageLogo src="socialLayer.png" /> */}
      <ImageLogo src="souffl3.png" />
      {/* <ImageLogo src="thubaDAO.png" /> */}
      <ImageLogo src="w3cDAO.png" />
    </div>
  );
};

export default function LogosBlock() {
  return (
    <div className="flex mx-auto 2xl:max-w-7xl overflow-hidden">
      <LogosList />
    </div>
  );
}
