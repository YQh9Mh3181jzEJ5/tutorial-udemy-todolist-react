import "./styles.css";

export const Todo = () => {
  return (
    <>
      <div>
        <input placeholder="Todoを入力" />
        <buttn>追加</buttn>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <li>
            <p>Todoです</p>
            <button>完了</button>
          </li>
          <li>
            <p>Todoです</p>
            <button>完了</button>
          </li>
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <ul>
          <li>
            <p>Todoです</p>
            <button>完了</button>
          </li>
          <li>
            <p>Todoです</p>
            <button>完了</button>
          </li>
        </ul>
      </div>
    </>
  );
};
