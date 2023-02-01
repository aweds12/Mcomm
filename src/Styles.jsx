import styled from "styled-components";

export const AppContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;

  .body {
    width: 100%;
    max-height: calc(100vh - 53px);
    overflow-y: auto;
    overflow-x: hidden;

    .cards {
      padding: 1rem;
      width: 100%;
      max-width: min(1000px, 90vw);
      min-height: 100%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
    }

    .pagination {
      width: 100%;
      margin-bottom: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;

      button {
        width: 1.25rem;
        line-height: 1em;
        aspect-ratio: 1 / 1;
        background-color: #fff;
        border: thin solid #0007;
        border-radius: 0.25rem;
        cursor: pointer;

        &.activePage {
          background: #008ad3;
          color: #fff;
          border: none;
        }
      }
    }
  }
`;

export const HeaderStyle = styled.header`
  position: sticky;
  box-shadow: 0 0 2px 1px #cdcdcd;
  background-color: #fff;
  z-index: 1000;

  ul {
    display: flex;
    justify-content: space-between;
    color: #000;
    font-size: 1em;

    div {
      display: flex;
    }

    a {
      text-decoration: none;
      color: inherit;
      padding: 1rem 0;
      transition: background 200ms linear;

      &:hover {
        background-color: #0002;
      }

      li {
        list-style: none;
        padding: 0 1rem;
      }

      &.LoginButton {
        background-color: #008ad3;
        color: #fff;

        &:hover {
          background-color: #0252ca;
        }
      }
    }

    .loggedUser {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      transition: background 200ms linear;
      padding: 0 1rem;
      border-left: thin solid #0002;
      border-right: thin solid #0002;

      img {
        height: 100%;
        max-height: 2rem;
        aspect-ratio: 1 / 1;
        overflow: hidden;
        border: thin solid #0007;
        border-radius: 50%;
        background-color: #fff;
      }

      &:hover {
        background-color: #0002;
      }
    }
  }
`;

export const LoginForm = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 0 0 2px 1px #cdcdcd;
    padding: 1.5rem;
    border-radius: 0.5rem;

    input {
      padding: 0.5rem 0.75rem;
      background: #0001;
      border: none;
      border-radius: 0.25rem;

      &:focus {
        outline: none;
        background: #0002;
      }
    }

    button {
      border: none;
      outline: none;
      color: #fff;
      background-color: #008ad3;
      padding: 0.5rem 0.75rem;
      border-radius: 0.25rem;

      &:hover {
        background-color: #0252ca;
      }
    }
  }
`;

export const ProductShowCase = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;

  .body {
    width: 100%;
    max-height: calc(100vh - 53px);
    overflow-y: auto;
    overflow-x: hidden;

    .imgbox {
      width: 100%;
      max-width: 700px;
      position: relative;

      img {
        width: 100%;
      }

      .thumbs {
        position: relative;
        width: 100%;
        aspect-ratio: 6 / 1;
        display: flex;
        overflow-x: auto;

        img {
          height: 100%;
          width: auto;
        }
      }
    }

    .details {
      width: 100%;
      padding: 1rem;

      button {
        background-color: #008ad3;
        color: #fff;
        border: none;
        outline: none;
        padding: 0.5rem 0.75rem;
        border-radius: 0.25rem;
        margin-top: 1rem;
        transition: all 200ms linear;
        cursor: pointer;

        &:hover {
          background-color: #0252ca;
        }
      }
    }
  }
`;

export const ShopCart = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;

  .body {
    width: 100%;
    max-height: calc(100vh - 53px);
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    .card {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 1rem;
      box-shadow: 0 0 2px 1px #cdcdcd;
      border-radius: 0.25rem;
      overflow: hidden;

      .left {
        display: flex;
        align-items: center;
        gap: 1rem;

        .img {
          position: relative;
          height: 5rem;
          aspect-ratio: 1 / 1;
          overflow: hidden;

          img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }

      button {
        padding: 0.25rem 0.5rem;
        border: thin solid #d94a38;
        outline: none;
        color: #d94a38;
        border-radius: 0.25rem;
        cursor: pointer;
        transition: all 200ms linear;

        &:hover {
          box-shadow: 0 0 2px 1px #d94a387f;
        }
      }
    }
  }
`;
