import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Typography
} from '@material-ui/core';
import {
  AddCircleOutlineRounded,
  Close,
  EditOutlined
} from '@material-ui/icons';
import React, { useState } from 'react';
import FormQuestionModal from '../form-question-modal/FormQuestionModal';
import './FormQuestions.css';

const FormQuestions = () => {
  const [questions, setQuestions] = useState([
    {
      questionId: 1,
      questionText: 'What is the capital of Madhya Pradesh?',
      questionType: 'radio',
      options: [
        { optionText: 'Raipur' },
        { optionText: 'Gwalior' },
        { optionText: 'Bhopal' },
        { optionText: 'Indore' }
      ]
    }
  ]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const editQuestion = (quesId) => {
    console.log(quesId);
  };

  const questionsUI = () => {
    return questions.map((ques, i) => {
      return (
        <div className='saved-questions add-border'>
          <div className='edit-question'>
            <Typography
              style={{
                fontSize: '15px',
                fontWeight: '400',
                letterSpacing: '.1px',
                lineHeight: '24px',
                paddingBottom: '8px'
              }}
            >
              {i + 1}. {ques.questionText}
            </Typography>
            <IconButton onClick={() => editQuestion(ques.questionId)}>
              <EditOutlined />
            </IconButton>
          </div>

          {ques.questionType === 'text' && (
            <input type='text' className='answer' placeholder='Answer' />
          )}

          {ques.options &&
            ques.options.map((op, j) => (
              <div key={j}>
                <div style={{ display: 'flex' }}>
                  <FormControlLabel
                    style={{ marginLeft: '5px', marginBottom: '5px' }}
                    disabled
                    control={
                      <input
                        type={ques.questionType}
                        color='primary'
                        style={{ marginRight: '3px' }}
                      />
                    }
                    label={
                      <Typography
                        style={{
                          fontFamily: ' Roboto,Arial,sans-serif',
                          fontSize: ' 13px',
                          fontWeight: '400',
                          letterSpacing: '.2px',
                          lineHeight: '20px',
                          color: '#202124'
                        }}
                      >
                        {ques.options[j].optionText}
                      </Typography>
                    }
                  />
                </div>
              </div>
            ))}
        </div>
      );
    });
  };

  const addNewQuestion = (value) => {
    console.log(value);
    setQuestions([...questions, value]);
    handleClose();
  };

  return (
    <div>
      <div className='question-form'>
        <br />
        <br />
        <div className='section'>
          <div className='question-title-section'>
            <div className='question-form-top'>
              <input
                type='text'
                placeholder='Untitled Document'
                className='question-form-top-name'
                style={{ color: 'black' }}
              />
              <Button
                style={{ width: '40%', marginLeft: '20px' }}
                onClick={handleOpen}
                variant='contained'
                startIcon={<AddCircleOutlineRounded />}
                color='primary'
              >
                Add Question
              </Button>
            </div>
          </div>
          {questionsUI()}

          <Dialog
            open={open}
            onClose={handleClose}
            fullWidth='true'
            maxWidth='sm'
          >
            <DialogTitle className='add-question-modal-title'>
              Add Question
              <IconButton
                aria-label='close'
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500]
                }}
              >
                <Close />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <FormQuestionModal addQuestion={addNewQuestion} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default FormQuestions;
