import React, {useState} from 'react';
import {Button, Checkbox, Input, List, Panel, PanelGroup} from "rsuite";
import { v1 as uuidv1 } from 'uuid';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {addTask, setIsDone, singleTaskType} from "../store/todosReducer";



export const Tasks = () => {

  const tasks = useSelector<AppRootStateType,singleTaskType[]>(state => state.taskReducer)
  const dispatch = useDispatch()
  const [taskTitle, setTaskTitle]= useState('')

  const setTaskIsDoneHandler = (id:string)=>{
    dispatch(setIsDone(id))
  }
  const addTaskHandler = ()=>{
    dispatch(addTask(title,uuidv1()))
  }
  const onTitleChangeHandler = ()=>{

  }

  const tasksJsx = tasks.map(el=>(
    <List.Item key={el.id}>
      <Checkbox checked={el.isDone} onCheckboxClick={()=>setTaskIsDoneHandler(el.id)}>
        {el.title}
      <Button color={'red'}>X</Button>
      </Checkbox>
    </List.Item>
  ))

  return (
    <PanelGroup accordion bordered>
      <Panel header={"Tasks"}>
        <div>
          <Input placeholder={'Введите задачу'}/>
          <Button color={'green'} onClick={addTaskHandler}>+</Button>
        </div>
        <List>
          {tasksJsx}
        </List>
      </Panel>
    </PanelGroup>
  );
};
