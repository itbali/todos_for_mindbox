import React from 'react';
import {Button, Checkbox, List} from "rsuite";
import {deleteTask, setIsDone, singleTaskType} from "../store/tasksReducer";
import {useDispatch} from "react-redux";
import s from './tasks.module.css';

type PropsType = {
  filteredTasks:singleTaskType[]
}

export const SingleTask = ({filteredTasks}:PropsType) => {


  const dispatch = useDispatch()

  //генерируем JSX каждой таски после фильтрации
  const tasksJsx = filteredTasks?
    filteredTasks.map(el => {
      return (
        <List.Item key={el.id} className={!el.isDone?s.singleTask:s.singleTaskDone} >
          <Checkbox checked={el.isDone} onCheckboxClick={() => setTaskIsDoneHandler(el.id)}>
          </Checkbox>
          {el.title}
          <Button color={'red'} onClick={() => {
            onDeleteTaskHandler(el.id)
          }}>X</Button>
        </List.Item>
      )
    }) : 'No tasks'


  const onDeleteTaskHandler = (id: string) => {
    dispatch(deleteTask(id))
  }
  const setTaskIsDoneHandler = (id: string) => {
    dispatch(setIsDone(id))
  }

  return (

    <List>
      {tasksJsx}
    </List>
  );
};
