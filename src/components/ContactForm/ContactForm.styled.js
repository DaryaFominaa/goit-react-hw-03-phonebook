import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const FormEl = styled(Form)`
  max-width: 250px;
  border: 1px solid black;
  padding: 8px;
`;

export const Wrap = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

export const LabelEl = styled.label`
  font-size: 20px;
  font-weight: 8px;
`;

export const FieldEl = styled(Field)`
  padding: 8px;
  font-size: 16px;
`;

export const ButtonEl = styled.button`
  padding: 8px;
  font-size: 14px;
  background-color: aqua;
  margin-left: 148px;
`;
