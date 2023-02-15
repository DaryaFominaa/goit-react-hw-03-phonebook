import { Formik, ErrorMessage } from 'formik';
// import styled from '@emotion/styled';
import { FormEl, Wrap, LabelEl, FieldEl, ButtonEl } from './ContactForm.styled';
import * as yup from 'yup';

const initialValues = { name: '', number: '' };

const schema = yup.object().shape({
  name: yup.string().required('Please enter name'),
  number: yup.string(),
});

export const ContactForm = ({ onSubmit }) => {
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const { name, number } = event.target.elements;
  //   onSubmit(name.value, number.value);
  // };

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    // console.log(values);
    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormEl>
          <Wrap>
            <LabelEl htmlFor="name">Name</LabelEl>
            <FieldEl
              type="text"
              name="name"
              placeholder="Tom Smith"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Wrap>
          <ErrorMessage name="name"> </ErrorMessage>
          <Wrap>
            <LabelEl htmlFor="number">Number</LabelEl>
            <FieldEl
              type="tel"
              name="number"
              placeholder="+380"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Wrap>
          <ButtonEl type="submit">Add contact</ButtonEl>
        </FormEl>
      </Formik>
    </>
  );
};
