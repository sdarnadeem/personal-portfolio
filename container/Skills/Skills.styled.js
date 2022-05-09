import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  .container {
    width: 80%;
    margin-top: 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 900px) {
      width: 100%;
      flex-direction: column;
    }

    .list {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      margin-right: 5rem;

      @media screen and (max-width: 900px) {
        margin-right: 0;

        justify-content: center;
        align-items: center;
      }

      .item {
        flex-direction: column;
        text-align: center;
        margin: 1rem;

        transition: all 0.3s ease-in-out;

        div {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          aspect-ratio: 1/1;
          background-color: #fff;
          position: relative;

          .img {
            width: 50%;
            height: 50%;
          }

          &:hover {
            box-shadow: 0 0 25px #fef4f5;
          }

          @media screen and (min-width: 2000px) {
            width: 150px;
            height: 150px;
          }
          @media screen and (max-width: 900px) {
            width: 70px;
            height: 70px;
          }
        }

        p {
          font-weight: 500;
          margin-top: 0.5rem;
        }
        @media screen and (min-width: 2000px) {
          margin: 1rem 2rem;
          p {
            margin-top: 1rem;
          }
        }
      }
    }

    .exp {
      flex: 1;

      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      margin-top: 5rem;

      @media screen and (max-width: 900px) {
      }

      .item:not(:last-child) {
        margin-right: 4rem;
      }

      .item {
        /* width: 100%; */

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 1rem 0;

        .year {
          margin-right: 3rem;
          p {
            font-weight: 800;
            color: ${({ theme }) => theme.colors.secondaryColor};
          }

          @media screen and (max-width: 450px) {
            margin-right: 1rem;
          }
        }
        .works {
          flex: 1;
          .work {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            margin-bottom: 1rem;
            cursor: pointer;

            h4 {
              font-weight: 500;
            }

            p {
              font-weight: 400;
              color: ${({ theme }) => theme.colors.grayColor};
              margin-top: 5px;
            }
            p:last-of-type {
              color: ${({ theme }) => theme.colors.blackColor};
              margin-top: 15px;
              display: none;

              @media (hover: none) {
                display: block;
              }
            }
          }
          .tooltip {
            max-width: 300px !important;
            background-color: var(--white-color) !important;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.1) !important;
            border-radius: 5px !important;
            padding: 1rem !important;
            color: var(--gray-color) !important;
            text-align: center !important;
            line-height: 1.5 !important;
            opacity: 1 !important;

            @media screen and (min-width: 2000px) {
              font-size: 1.75rem !important;
              max-width: 500px !important;
              line-height: 2 !important;
            }
          }
        }
      }
    }
  }
`;
