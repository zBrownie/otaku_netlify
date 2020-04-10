import styled from "styled-components";

export const Container = styled.div`
  .register-container {
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .register-container .content {
    width: 100%;
    padding: 50px 96px;
    background: #f0f0f5;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .register-container .content section {
    width: 100%;
    max-width: 380px;
    color: #6b7a8f;
  }

  .register-container .content section .preview-poster {
    width: 100%;
    max-width: 200px;
    height: 100%;
    max-height: 300px;
  }
  .register-container .content section .preview-poster img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    max-width: 200px;
    max-height: 300px;
  }

  .register-container .content section h1 {
    margin: 64px 0 32px;
    font-size: 32px;
  }

  .register-container .content section p {
    font-size: 18px;
    color: #737380;
    line-height: 32px;
  }

  .register-container .content form {
    width: 100%;
    max-width: 450px;
  }

  .register-container .content form input {
    width: 100%;
    max-width: 300px;
    height: 42px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 6px;
    padding: 0 24px;
    margin-top: 8px;
  }

  .register-container .content form .inputfile {
    background: #fafafa;
    cursor: pointer;
  }

  .register-container .content form .input-group {
    display: flex;
  }

  form .input-group .select {
    width: 100%;
    max-width: 140px;
    margin-top: 8px;
  }

  .register-container .content form .input-group .select + .select {
    margin-left: 16px;
  }

  .register-container .content form button {
    width: 100%;
    max-width: 300px;
    background: #deaf2c;
    height: 40px;
    background: contants;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    margin-top: 16px;
    text-decoration: none;
    font-size: 18px;
    transition: filter 0.9s;
  }

  .register-container .content form button:hover {
    filter: brightness(90%);
  }

  .register-container .content form textarea {
    width: 100%;
    max-width: 300px;
    height: 150px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 6px;
    padding: 0 24px;
    margin-top: 8px;
    resize: none;
  }

  @media (max-width: 860px) {
    .register-container .content {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      height: 100%;
    }

    .register-container .content section {
      margin-bottom: 16px;
    }
  }
`;
