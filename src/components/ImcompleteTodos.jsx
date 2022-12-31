import React from "react";

export const ImcompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="imcomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          // mapの第二引数にindexを持たせてループの何番目の要素かを判定するのに使う．Reactでは常套手段．
          return (
            // ループさせる際は，何個目のレンダリングかわかるようにreturn内の最初のタグにkeyオプションを設定する．
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>{" "}
              {/* 関数に引数を渡すときはアロー関数で新たに関数を生成する必要がある．引数を持たせるとonClickを待たず即時イベントが発生する． */}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
