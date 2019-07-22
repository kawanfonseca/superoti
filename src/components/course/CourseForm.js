import React, {PropTypes} from 'react';
import {Field, reduxForm} from 'redux-form';
import FieldInput from '../common/FieldInput';
import SelectInput from '../common/SelectInput';


export const CourseForm = ({handleSubmit, pristine, reset, submitting, heading, handleSave, handleCancel}) => {
  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <h1>{heading}</h1>

      <Field
        type="text"
        name="title"
        label="Nome"
        placeholder="Nome do livro"
        component={FieldInput}
      />

      <Field
        type="text"
        name="isbn"
        label="ISBN"
        placeholder="ISBN do livro"
        component={FieldInput}
      />

      <Field
        type="text"
        name="authorId"
        label="Autor"
        placeholder="Autor do livro"
        component={FieldInput}
      />

      <Field
        type="text"
        name="category"
        label="Editora"
        placeholder="Editora do livro"
        component={FieldInput}
      />

      <Field
        type="text"
        name="length"
        label="Ano"
        placeholder="Ano de criação do livro"
        component={FieldInput}
      />

      <Field
        type="text"
        name="idioma"
        label="Idioma"
        placeholder="Idioma do livro"
        component={FieldInput}
      />
      <Field
        type="text"
        name="peso"
        label="Peso"
        placeholder="Peso do livro (g)"
        component={FieldInput}
      />

      <Field
        type="text"
        name="comprimento"
        label="Comprimento"
        placeholder="Comprimento do livro (cm)"
        component={FieldInput}
      />

      <Field
        type="text"
        name="largura"
        label="Largura"
        placeholder="Largura do livro (cm)"
        component={FieldInput}
      />

      <Field
        type="text"
        name="altura"
        label="Altura"
        placeholder="Altura do livro (cm)"
        component={FieldInput}
      />

      <div>
        <button type="submit" disabled={submitting} className="btn btn-primary"><i className="fa fa-paper-plane-o"
                                                                                   aria-hidden="true"/> Submit
        </button>

        {heading === 'Add' && <button type="button" disabled={pristine || submitting} onClick={reset}
                                      className="btn btn-default btn-space">Clear Values</button>}

        <button type="button" className="btn btn-default btn-space" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
};


const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Required';
  }

  if (!values.category) {
    errors.category = 'Required';
  }

  if (!values.length) {
    errors.length = 'Required';
  }

  if (!values.authorId) {
    errors.authorId = 'Required';
  }

  return errors;
};


CourseForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
};


export default reduxForm({
  form: 'CourseForm',
  validate
})(CourseForm);
