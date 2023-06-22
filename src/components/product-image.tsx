import Image from "next/image";
import styled from "styled-components";
import imgUrl from "../../public/images/product.jpg";

const imgStyle = {
  width: "100%",
  height: "460px",
  layout: "responsive",
};

export const ImgTest = styled(Image)`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  @media (min-width: 768px) {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 0px;
  }
`;

export function ProductImage() {
  return <ImgTest src={imgUrl} style={imgStyle} />;
}
