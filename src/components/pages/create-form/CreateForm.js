import React from 'react';
import FormHeader from '../../layout/form-header/FormHeader';
import FormQuestions from '../../layout/form-questions/FormQuestions';

const CreateForm = () => {
  return (
    <>
      <FormHeader nameDisable={false} />
      <FormQuestions />
    </>
  );
};

export default CreateForm;
