"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { DefaultPageLayout } from "../components/default-page-layout";
import { Box } from "../components/box-produto";
import { ProductImage } from "../components/product-image";
import { ProductInfo } from "../components/products-info";

export default function Home() {
  return (
    <DefaultPageLayout>
      <Box>
        <ProductImage />
        <ProductInfo />
      </Box>
    </DefaultPageLayout>
  );
}
