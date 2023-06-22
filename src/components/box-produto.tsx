"use client";
import Image from "next/image";
import styled from "styled-components";
import imgUrl from "../../public/images/product.jpg";

export const Box = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  width: 640px;
  height: inherit;
  margin: 15px;

  @media (min-width: 768px) {
    position: relative;
    display: flex;
    justify-content: center;
    width: 640px;
    height: 460px;
  }
`;

