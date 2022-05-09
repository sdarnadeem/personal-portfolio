import styled from "styled-components";

export const Div1 = styled.div`
  .portfolio {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .item {
      @media (hover: none) {
        &:active {
          .img {
            .hover {
            }
          }
        }
      }
    }

    .item {
      width: 270px;
      flex-direction: column;
      margin: 2rem;
      padding: 1rem;
      border-radius: 0.5rem;
      background-color: white;
      color: black;

      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
      }

      @media screen and (min-width: 2000px) {
        width: 470px;
        padding: 1.25rem;
        border-radius: 0.75rem;
      }

      @media screen and (max-width: 300px) {
        width: 100%;
        margin: 1rem;
      }

      .img {
        width: 100%;
        height: 230px;

        position: relative;

        .img-container {
          height: 100%;
          width: 100%;
          border-radius: 0.5rem;
          object-fit: cover;
        }
        /* img {
          height: 100%;
          width: 100%;
          border-radius: 0.5rem;
          object-fit: cover;
        } */

        @media screen and (min-width: 2000px) {
          height: 350px;
        }

        .hover {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);

          border-radius: 0.5rem;
          opacity: 0;
          transition: all 0.3s ease;

          @media (hover: none) {
            display: none;
          }

          a {
            div {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              background-color: rgba(0, 0, 0, 0.5);

              margin: 1rem;
              font-family: ${({ theme }) => theme.fonts.fontBase};
              font-weight: 800;
              cursor: pointer;
              transition: all 0.3s ease;

              svg {
                width: 50%;
                height: 50%;
                color: ${({ theme }) => theme.colors.whiteColor};
              }
            }
          }
        }

        .click {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);

          border-radius: 0.5rem;
          opacity: 0;
          transition: all 0.3s ease;
          display: none;

          @media (hover: none) {
            display: inline-block;
          }

          a {
            div {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              background-color: rgba(0, 0, 0, 0.5);

              margin: 1rem;
              font-family: ${({ theme }) => theme.fonts.fontBase};
              font-weight: 800;
              cursor: pointer;
              transition: all 0.3s ease;

              svg {
                width: 50%;
                height: 50%;
                color: ${({ theme }) => theme.colors.whiteColor};
              }
            }
          }
        }
      }

      .content {
        padding: 0.5rem;
        width: 100%;
        position: relative;
        flex-direction: column;

        h4 {
          margin-top: 1rem;
          line-height: 1.5;
        }

        .tag {
          position: absolute;
          padding: 0.5rem 1rem;

          border-radius: 10px;
          background-color: #fff;

          top: -25px;
        }
      }
    }
  }
`;

export const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin: 4rem 0 2rem;

  .item {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;

    background-color: #fff;
    color: #000;

    font-weight: 800;

    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondaryColor};
      color: white;
    }

    @media screen and (min-width: 2000px) {
      padding: 1rem 2rem;
      border-radius: 0.85rem;
    }
  }

  .item-active {
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    color: white;
  }
`;
