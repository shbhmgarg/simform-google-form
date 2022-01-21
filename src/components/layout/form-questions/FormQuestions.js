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
  DeleteOutlined,
  EditOutlined,
  Save
} from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import FormQuestionModal from '../form-question-modal/FormQuestionModal';
import './FormQuestions.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  clearCurrentQuestion,
  setCurrentQuestion,
  deleteQuestion,
  clearFormQuestions,
  currentFormName
} from '../../../redux/actions/question';
import { createForm } from '../../../redux/actions/form';
import { useParams, useNavigate } from 'react-router-dom';
const FormQuestions = () => {
  const navigate = useNavigate();
  const questions = useSelector((state) => state.question.questions);
  const currentQuestion = useSelector((state) => state.question.current);
  const formName = useSelector((state) => state.question.formName);
  const dispatch = useDispatch();
  const params = useParams();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    dispatch(clearCurrentQuestion());
  };

  const editQuestion = (quesId) => {
    dispatch(setCurrentQuestion(quesId));
    handleOpen();
  };

  const deleteQues = (quesId) => {
    dispatch(deleteQuestion(quesId));
  };

  const nameChange = (e) => {
    dispatch(currentFormName(e.target.value));
  };

  const saveForm = () => {
    if (formName === '') {
      alert('Please enter form name');
      return false;
    }
    const form = {
      formId: params.id,
      name: formName,
      questions: questions,
      createdDate: new Date()
    };
    dispatch(createForm(form));
    dispatch(clearFormQuestions());
    navigate('/');
  };

  const questionsUI = () => {
    return questions.map((ques, i) => {
      return (
        <div key={i} className='saved-questions add-border'>
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
            <div class='action-buttons'>
              <IconButton onClick={() => editQuestion(ques.questionId)}>
                <EditOutlined color='primary' />
              </IconButton>
              <IconButton onClick={() => deleteQues(ques.questionId)}>
                <DeleteOutlined color='error' />
              </IconButton>
            </div>
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
                placeholder='Untitled Form'
                className='question-form-top-name'
                style={{ color: 'black' }}
                value={formName}
                onChange={nameChange}
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
              {currentQuestion ? 'Update' : 'Add'} Question
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
              <FormQuestionModal close={handleClose} />
            </DialogContent>
          </Dialog>
        </div>
        <div className='form-footer'>
          <Button
            style={{ width: '100%', marginTop: '20px' }}
            onClick={saveForm}
            variant='contained'
            startIcon={<Save />}
            color='primary'
            disabled={questions.length > 0 ? false : true}
          >
            Save Form
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormQuestions;
