"use client";

import { styled } from "styled-components";

export const DefaultBody = styled.body`
  margin: 0;
`;

export const DefaultPageLayout = styled.div`
  position: relative;
  background-color: var(--background);
  margin: 0;
  padding: 0;
  display: flex;    

  @media (min-width: 768px) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
