import { Button, FormControlLabel, Typography } from '@material-ui/core';
import './SubmissionForm.css';
import { Save } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { useNavigate, useParams } from 'react-router-dom';
import { SUBMIT_FORM_REQUEST } from '../../../redux/types';
import { clearFormQuestions } from '../../../redux/actions/question';

const SubmissionForm = () => {
  const formName = useSelector((state) => state.question.formName);
  const questions = useSelector((state) => state.question.questions);
  const [answers, setAnswers] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const val = questions.map((q) => ({
      question: q.questionText,
      answer: ''
    }));
    setAnswers(val);
  }, [questions]);

  const answerTextChange = (que, ans) => {
    const index = answers.findIndex((a) => a.question === que);
    let val = answers;
    val[index].answer = ans;
    setAnswers(val);
  };

  const optionsChanged = (que, ans, type) => {
    const index = answers.findIndex((a) => a.question === que);
    let val = answers;
    if (type === 'radio') {
      val[index].answer = ans.value;
      setAnswers(val);
    } else {
      let optionsChecked = [];
      if (val[index].answer) {
        optionsChecked = val[index].answer.split(',');
      }
      if (ans.checked === true) {
        optionsChecked.push(ans.value);
      } else {
        let i = optionsChecked.findIndex((oc) => oc === ans.value);
        optionsChecked.splice(i, 1);
      }
      val[index].answer = optionsChecked.join(',');
      setAnswers(val);
    }
  };

  const questionsUI = () => {
    return questions.map((ques, i) => {
      return (
        <div key={i} className='questions-box add-border'>
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
          </div>

          {ques.questionType === 'text' && (
            <input
              type='text'
              className='answer-text'
              placeholder='Answer'
              onChange={(e) =>
                answerTextChange(ques.questionText, e.target.value)
              }
            />
          )}

          {ques.options &&
            ques.options.map((op, j) => (
              <div key={j}>
                <div style={{ display: 'flex' }}>
                  <FormControlLabel
                    style={{ marginLeft: '-5px', marginBottom: '5px' }}
                    control={
                      <input
                        type={ques.questionType}
                        color='primary'
                        value={ques.options[j].optionText}
                        name={ques.questionId}
                        onChange={(e) => {
                          optionsChanged(
                            ques.questionText,
                            e.target,
                            ques.questionType
                          );
                        }}
                      />
                    }
                    label={
                      <Typography className='options-label'>
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

  const submitForm = () => {
    const isInvalid = answers.filter((ans) => ans.answer === '').length > 0;
    if (isInvalid) {
      alert('Please answer all the questions');
      return;
    }
    let form = {
      id: uuid(),
      formId: params.id,
      response: answers
    };
    dispatch({ type: SUBMIT_FORM_REQUEST, payload: form });
    dispatch(clearFormQuestions());
    navigate('/submitted');
  };

  return (
    <div>
      <div className='submission-form'>
        <br />
        <br />
        <div className='section'>
          <div className='submission-title-section'>
            <div className='submission-form-top'>
              <h1 className='submission-form-top-name'>{formName}</h1>
            </div>
          </div>
          {questionsUI()}
        </div>
        <div className='form-footer'>
          <Button
            style={{ width: '100%', marginTop: '20px' }}
            variant='contained'
            onClick={submitForm}
            startIcon={<Save />}
            color='primary'
            // disabled={questions.length > 0 ? false : true}
          >
            Submit Form
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubmissionForm;
