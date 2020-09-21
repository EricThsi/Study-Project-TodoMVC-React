/**
 * App Reducer
 */

import { IAppState } from '../types';

export enum Actions {
  CREATE_ITEM = 'CREATE_ITEM', // 新增 Todo
  UPDATE_ITEM = 'UPDATE_ITEM', // 更新 Todo
  DELETE_ITEM = 'DELETE_ITEM', // 删除 Todo
  EDIT_ITEM = 'EDIT_ITEM', // 编辑 Todo
  EDIT_SET = 'EDIT_SET', // 设置当前编辑的 Todo
  CHANGE_VISIBILITY = 'CHANGE_VISIBILITY', // 改变显示类型
  REMOVE_COMPLETED = 'REMOVE_COMPLETED', // 删除状态为已完成的 Todo
  UPDATE_EDITING_ITEM = 'UPDATE_EDITING_ITEM ', // 更新当前编辑中的 Todo
  TOGGLE_ALL = 'TOGGLE_ALL', // 全部切换为 完成/未完成
}

interface IActionType {
  type: Actions;
  payload?: any;
}

export const appReducer = (state: IAppState, action: IActionType) => {
  console.log(action.type);
  switch (action.type) {
    case Actions.CREATE_ITEM: {
      console.log(action.payload);
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    default:
      return state;
  }
};
