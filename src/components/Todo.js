import "./style.css"
function Todo() {
  return (
    <div id="todo__container">
    <input type="checkbox" id="todo__item" name="example1" value="example1" />
    <label for="usememo" id="label">useMemo</label>
    <span id="n_render">8</span>
    </div>
  )
}

export default Todo