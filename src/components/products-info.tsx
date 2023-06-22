import styled from "styled-components";
import { Fraunces } from "next/font/google";
import { IconCart } from "./icons/cart-icon";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700"],
});

export const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
  margin-left: 20px;

  h2 {
    margin-bottom: -3px;
    text-transform: uppercase;
    color: var(--dark-grayish-blue);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 3px;
    margin-top: 20px;
    opacity: 0.7;
  }

  h1 {
    padding-right: 40px;
    font-weight: 700;
    margin-bottom: -2px;
  }

  p {
    font-size: 14px;
    color: var(--dark-grayish-blue);
    line-height: 25px;
    font-weight: 500;
    padding-right: 35px;
    opacity: 0.7;
  }
`;

export const InfoPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  margin-bottom: 10px;

  span {
    font-size: 30px;
    color: var(--dark-cyan);
    font-weight: 700;
    margin-top: 1px;
  }

  p {
    display: flex;
    align-items: center;
    text-decoration: line-through;
    opacity: 0.7;
  }
`;

export const ButtonSubmit = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  text-align: center;
  background-color: var(--dark-cyan);
  color: var(--white);
  font-size: 18px;
  padding: 14px;
  border-radius: 8px;
  margin-right: 48px;
  font-weight: 700;
  margin-top: 10px;
  &:hover {
    background-color: var(--very-dark-green);
  } 
`;

export function ProductInfo() {
  return (
    <InfoProduct>
      <h2>Perfume</h2>
      <h1 className={fraunces.className}>Gabrielle Essence Eau De Parfum</h1>
      <p>
        A floral, solar and voluptuous interpratation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <InfoPrice>
        <span className={fraunces.className}>$149.99</span>
        <p>$169.99</p>
      </InfoPrice>
      <ButtonSubmit>
        <IconCart />
        Add to Cart
      </ButtonSubmit>
    </InfoProduct>
  );
}
