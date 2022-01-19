import {
  Checkbox,
  Grid,
  MenuItem,
  Radio,
  Select,
  FormControl,
  InputLabel,
  Input,
  Button
} from '@material-ui/core';
import { Subject } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import './FormQuestionModal.css';

const FormQuestionModal = ({ addQuestion }) => {
  const [newQuestion, setNewQuestion] = useState({
    id: uuid(),
    question: '',
    type: '',
    options: ''
  });
  const [optionsArray, setOptionsArray] = useState([]);

  const { id, question, type, options } = newQuestion;

  const valueChanged = (e) => {
    if (e.target.name === 'options') {
      let opt = e.target.value.split('\n');
      setOptionsArray(opt);
    }
    setNewQuestion({ ...newQuestion, [e.target.name]: e.target.value });
  };

  const submitQuestion = () => {
    const arr = optionsArray
      .filter((opt) => opt && opt.length > 0)
      .map((opt) => {
        return { optionText: opt };
      });
    const newQuestionValue = {
      questionId: id,
      questionText: question,
      questionType: type,
      options: arr
    };
    addQuestion(newQuestionValue);
  };

  return (
    <>
      <Grid container spacing={2} className='modal-body'>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <FormControl variant='standard' style={{ width: '100%' }}>
            <InputLabel htmlFor='question-text'>Question/Title</InputLabel>
            <Input
              id='question-text'
              className='question-text'
              placeholder='Question'
              value={question}
              name='question'
              onChange={valueChanged}
            />
          </FormControl>
        </Grid>
        <Grid item xs={8} md={8} lg={8} xl={8}>
          <FormControl fullWidth>
            <InputLabel id='question-type-label'>Question Type</InputLabel>
            <Select
              name='type'
              labelId='question-type-label'
              id='question-type-select'
              label='Question Type'
              value={type}
              onChange={valueChanged}
            >
              <MenuItem value='text'>
                <Subject
                  style={{
                    marginLeft: '10px',
                    marginRight: '18px',
                    color: '#70757a'
                  }}
                />{' '}
                Text
              </MenuItem>
              <MenuItem value='checkbox'>
                <Checkbox
                  style={{ marginRight: '10px', color: '#70757a' }}
                  checked
                />{' '}
                Multichoice Checkbox
              </MenuItem>
              <MenuItem value='radio'>
                <Radio
                  style={{ marginRight: '10px', color: '#70757a' }}
                  checked
                />{' '}
                Single Select Radio
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {type && type !== 'text' && (
          <Grid item xs={12}>
            <textarea
              style={{
                width: '100%',
                borderRadius: '4px',
                borderColor: 'rgb(118,118,118)'
              }}
              rows='4'
              name='options'
              value={options}
              onChange={valueChanged}
            />
            <div class='helper-text'>
              Please enter each choices in separate lines.
            </div>
          </Grid>
        )}
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Button
            variant='contained'
            color='primary'
            style={{ float: 'right', width: '30%' }}
            size='medium'
            onClick={submitQuestion}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FormQuestionModal;
