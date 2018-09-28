import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import QuestionMenu from './QuestionsMenu';
import { answersMock, questionsMock } from './QuestionsMenuMock';

describe('QuestionsMenu', () => {
  it('should match a snapshot', () => {
    const questionMenu = shallow((
      <QuestionMenu
        answersArray={[]}
        questionsArray={questionsMock}
        currentQuestion={30}
      />
    ))

    expect(toJson(questionMenu)).toMatchSnapshot();
  })

  it('should match a snapshot when menu is open', () => {
    const questionMenu = shallow((
      <QuestionMenu
        userAnswers={answersMock}
        questionsArray={questionsMock}
        currentQuestion={30}
      />
    ))

    questionMenu.find('.questions-button').simulate('click');
    expect(toJson(questionMenu)).toMatchSnapshot();
  })

  it('should toggle questions board when click on questions button', () => {
    const questionMenu = shallow((
      <QuestionMenu
        userAnswers={answersMock}
        questionsArray={questionsMock}
        currentQuestion={30}
      />
    ))

    questionMenu.find('.questions-button').simulate('click');
    expect(questionMenu.find('.questions-board')).toHaveLength(1)

    questionMenu.find('.questions-button').simulate('click');
    expect(questionMenu.find('.questions-board')).toHaveLength(0)

  })

  it('should change current question', () => {
    const history = { push: jest.fn() };
    const questionMenu = shallow((
      <QuestionMenu
        userAnswers={answersMock}
        questionsArray={questionsMock}
        currentQuestion={29}
        history={history}
      />
    ))

    questionMenu.find('.questions-button').simulate('click');
    questionMenu.find('.question-item-button').at(29).simulate('click');
    expect(history.push).toHaveBeenCalledWith('/app/questionario/30');
  })
})
