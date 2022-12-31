import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { ImcompleteTodos } from "./components/ImcompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [imcompleteTodos, setImcompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return; // inputボックスが空の場合はリストに追加されないようにする．
    const newTodos = [...imcompleteTodos, todoText]; // 現状の配列に新規追加したtodoTextを追加する．
    setImcompleteTodos(newTodos); // ステートの関数を新しい配列の引数で実行．変化に応じてレンダリングされる．差分だけ？
    setTodoText(""); // inputボックスを空にする．
  };

  const onClickDelete = (index) => {
    const newTodos = [...imcompleteTodos];
    newTodos.splice(index, 1);
    setImcompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newImcompleteTodos = [...imcompleteTodos];
    newImcompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, imcompleteTodos[index]];
    setImcompleteTodos(newImcompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newImcompleteTodos = [...imcompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setImcompleteTodos(newImcompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={imcompleteTodos.length >= 5}
      />
      {imcompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるtodo5個までだよ〜．消化しろ〜．
        </p>
      )}
      <ImcompleteTodos
        todos={imcompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
