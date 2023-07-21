import styled from 'styled-components';
import { Button, Form, Input, Modal } from 'antd';
import { PhoneOutlined, UserAddOutlined } from '@ant-design/icons';

// margin: 0 auto;
export const FormWrap = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: darkblue;
  border: 3px solid;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-top: 20px;

  box-shadow: -2px -2px 5px #fff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const FormLabel = styled(`label`)`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: wheat;
  font-size: 20px;
`;

export const AddModalBtn = styled(Button)`
  width: 100%;
  height: 35px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserIcon = styled(UserAddOutlined)`
  color: #c7c6c6;
`;

export const PhoneIcon = styled(PhoneOutlined)`
  color: #c7c6c6;
`;

// height: 35px;
//   font-size: 18px;
//   width: 100%;
export const InputForm = styled(Input)`
  padding: 10px 10px;
  border: 3px solid;
  border-radius: 10px;

  /* box-shadow: inset -2px -2px 5px #fff, inset 3px 3px 5px rgba(0, 0, 0, 0.1); */
  box-shadow: inset -2px -2px 8px #fff, inset 3px 5px 5px rgba(0, 0, 0, 0.1);
  background-color: transparent;
  border: none;

  color: bisque;
  font-size: 20px;
`;

export const AddModal = styled(Modal)`
  text-align: center;
  .ant-modal-content {
    width: 340px;
    height: 225px;
    position: absolute;
    top: 50%;
    left: 20%;
  }
`;

export const OpenAddModal = styled(Button)`
  margin: 15px 0;
`;
