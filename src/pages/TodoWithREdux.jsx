import AddTodo from "../Components/TodoWIthRedux/AddTodo";
import Todos from "../Components/TodoWIthRedux/Todos";
import { Provider } from "react-redux";
import { store } from "../app/store";
function TodoWithREdux() {
  return (
    <>
      <Provider store={store}>
        <AddTodo />
        <Todos />
      </Provider>
    </>
  );
}

export default TodoWithREdux;
