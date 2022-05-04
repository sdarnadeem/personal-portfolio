import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  /* outline: solid 1px red; */
}

html, body {
  max-width: 100%;
  /* overflow-x: hidden; */
}

.app__about {
  flex: 1;
  max-width: 100%;
  flex-direction: column;
}

.app_works {

    flex: 1;
    max-width: 100%;
    flex-direction: column;

}
.app__skills {
    flex: 1;
    max-width: 100%;
    flex-direction: column;
}

  .app__testimonial {
    flex: 1;
    max-width: 100%;
    flex-direction: column;
  }
  .app__footer {
    flex: 1;
    max-width: 100%;
    flex-direction: column;
  }
.app {
  // background-color: var(--primary-color);
  background-color: ${({ theme }) => theme.colors.primaryColor};
  // font-family: var(--font-base);
  font-family: ${({ theme }) => theme.fonts.fontBase};

}

.app__whitebg {
  // background-color: var(--white-color);
  background-color: ${({ theme }) => theme.colors.whiteColor};

}

.app__primarybg {
  // background-color: var(--primary-color);
  background-color: ${({ theme }) => theme.colors.primaryColor};
}

.app__container {
  max-width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: row;
  


}

.app__flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.app__wrapper {
  flex: 1;
  max-width: 100%;
  flex-direction: column;
  padding: 4rem 2rem;

  @media screen and (max-width: 450px) {
    padding: 4rem 1rem 2rem;
  }
  

}

.copyright {
  width: 100%;
  padding: 2rem 0 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  p {
    text-transform: uppercase;
    // color: var(--black-color);
    color: ${({ theme }) => theme.colors.blackColor};
  }
}

.head-text {
  font-size: 2.75rem;
  font-weight: 800;
  text-align: center;
  // color: var(--black-color);
  color: ${({ theme }) => theme.colors.blackColor};
  text-transform: capitalize;

  span {
    // color: var(--secondary-color);
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  @media screen and (min-width: 2000px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 2rem;
  }
}

.p-text {
  font-size: 0.8rem;
  text-align: left;
  // color: var(--gray-color);
  color: ${({ theme }) => theme.colors.grayColor};
  line-height: 1.5;

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
  }
}

.bold-text {
  font-size: 1rem;
  font-weight: 800;
  // color: var(--black-color);
  color: ${({ theme }) => theme.colors.blackColor};
  text-align: left;

  @media screen and (min-width: 2000px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 0.9rem;
  }
}

.app__social {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  padding: 1rem;

  div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    // background-color: var(--white-color);
    background-color: ${({ theme }) => theme.colors.whiteColor};
    margin: 0.25rem 0;
    // border: 1px solid var(--lightGray-color);
    border: 1px solid ${({ theme }) => theme.colors.lightGrayColor};

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.3s ease-in-out;

    svg {
      width: 15px;
      height: 15px;
      // color: var(--gray-color);
      color: ${({ theme }) => theme.colors.grayColor};
    }

    &:hover {
      // background-color: var(--secondary-color);
      background-color: ${({ theme }) => theme.colors.secondaryColor};
      // border-color: var(--secondary-color);
      border-color: ${({ theme }) => theme.colors.secondaryColor};

      svg {
        // color: var(--white-color);
        color: ${({ theme }) => theme.colors.whiteColor};
      }
    }

    @media screen and (min-width: 2000px) {
      width: 70px;
      height: 70px;

      margin: 0.5rem 0;

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
}

.app__navigation {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  padding: 10rem 1rem;

  .app__navigation-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #cbcbcb;
    margin: 0.5rem;

    transition: background-color 0.2s ease-in-out;

    &:hover {
      // background-color: var(--secondary-color);
      background-color: ${({ theme }) => theme.colors.secondaryColor};
    }

    @media screen and (min-width: 2000px) {
      width: 20px;
      height: 20px;
    }
  }
}

@media screen and (max-width: 500px) {
  .app__navigation,
  .app__social {
    display: none;
  }

  .copyright {
    padding: 2rem;
  }}
`;

export default GlobalStyle;
