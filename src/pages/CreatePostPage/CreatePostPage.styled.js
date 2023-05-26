import styled from 'styled-components';
import { HiArrowLeftCircle } from 'react-icons/hi2';
import { Field, Form } from 'formik';
import { MdAddAPhoto } from 'react-icons/md';
import { SiReactivex } from 'react-icons/si';
import { FaTrashAlt } from 'react-icons/fa';

export const LoaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const MainLoader = styled(SiReactivex)`
  position: absolute;
  animation: rotate 5s infinite linear;
  -webkit-animation: rotate 5s infinite linear;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const HeaderCreatePost = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  right: 10px;
  z-index: 20;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: 0px 0px 30px 10px rgba(10, 216, 244, 0.2);
`;

export const HeaderCreatePostTitle = styled.h3`
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0px 0px 20px #28a745;
  color: #28a745;
  letter-spacing: 2px;
`;

export const BtnBackCreatePostWrapper = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

export const StyleHiArrowLeftCircle = styled(HiArrowLeftCircle)`
  margin-left: 10px;
  fill: gold;
  transition: fill 0.4s;

  &:hover {
    fill: aqua;
  }
`;

export const MainCreatePostWrapper = styled.div`
  margin-top: 85px;
  max-height: 500px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5em;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

export const StyleFormCreatePost = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyleInputFileCreatePost = styled(Field)`
  input[type='file'] {
    display: none;
  }
`;

export const CustomFileInput = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: 350px;
  border-radius: 4px;
  padding: 8px;
  background-color: rgba(0, 128, 0, 0.4);
  box-shadow: 0px 0px 10px 7px rgba(10, 216, 244, 0.6);
  cursor: pointer;
  margin-top: 30px;
`;

export const TextLabel = styled.span`
  margin-top: 10px;
  text-transform: uppercase;
  text-shadow: 0px 0px 20px #28a745;
  color: #28a745;
  letter-spacing: 2px;
`;

export const ImagePostContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ImgPost = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyleMdAddAPhoto = styled(MdAddAPhoto)`
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0.5;
  transform: translate(-50%, -50%);
  display: block;
  fill: gold;
`;

export const LabelInputTitle = styled.label`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 30px;
  box-shadow: 0 5px 10px 0 rgba(10, 216, 244, 0.6);
  margin-top: 30px;
`;

export const StyleInputTitle = styled(Field)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 128, 0, 0.4);
  padding: 5px;
  border: none;
  color: gold;
  font-size: 21px;

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }
`;

export const TextTitle = styled.span`
  position: absolute;
  top: -20px;
  left: 3px;
  color: green;
  opacity: 0.8;
  text-transform: uppercase;
  text-shadow: 0px 0px 10px #28a745;
`;

export const ButtonSendPost = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: 30px;
  box-shadow: 0 5px 10px 0 rgba(10, 216, 244, 0.6);
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: gold;
  color: green;
  cursor: pointer;
  text-transform: uppercase;
  border: none;
  border-radius: 30px;
  transition: background-color 0.4s, color 0.4s;

  &:hover {
    background-color: aqua;
    color: gold;
  }
`;

export const StyleFaTrashAlt = styled(FaTrashAlt)`
  display: block;
  transition: fill 0.4s;

  &:hover {
    fill: aqua;
  }
`;

export const ButtonClearWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(0, 128, 0, 0.4);
  margin-top: 50px;
  padding: 10px;
  border-radius: 30px;
  cursor: pointer;
  transition: fill 0.4s;

  &:hover {
    & > ${StyleFaTrashAlt} {
      fill: aqua;
    }
  }
`;

export const NavigationWrapper = styled.div`
  margin-top: 100px;
`;
