import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyleFormLogin = styled(Form)`
  position: relative;
  width: 100%;
  background-image: var(--background-body);
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 45px;
  padding-top: 92px;
  border-radius: 70px 70px 0 0;
`;

export const LoginTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.16;
  letter-spacing: 0.01em;
  color: var(--color);
  text-transform: uppercase;
  margin-bottom: 35px;
`;

export const FeedbackFormGroup = styled.div`
  max-width: 545px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  &:nth-last-of-type(2) {
    margin-bottom: 50px;
  }
`;

export const StyleInputRegistration = styled(Field)`
  width: 100%;
  display: flex;
  padding: 16px;
  background-color: #f6f6f6;
  border: 1px solid #e8e8e8;
  border-radius: 8px;

  &::placeholder {
    font-size: 16px;
    line-height: 19px;
    color: #bdbdbd;
  }
`;

export const StyleErrorMessage = styled(ErrorMessage)``;

export const Error = styled.div`
  color: red;
  font-size: 15px;
  margin-top: 10px;
  text-transform: uppercase;
  text-align: center;
`;

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const ToggleShowPasword = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -10px);
  -webkit-transform: translate(-50%, -10px);
  -moz-transform: translate(-50%, -10px);
  -ms-transform: translate(-50%, -10px);
  -o-transform: translate(-50%, -10px);
  cursor: pointer;
`;

export const Btnwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 545px;
`;

export const BtnRegistration = styled.button`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #ff6c00;
  border-radius: 100px;
  font-size: 16px;
  line-height: 1.19;
  color: #ffffff;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: background-color 0.4s;
  margin-bottom: 15px;

  &:hover {
    background-color: #ff4c00;
  }
`;

export const LinkOnPageLogIn = styled.p`
  text-align: center;
  cursor: pointer;
  color: #f6f6f6;

  &:hover {
    text-decoration: underline;
  }
`;
