import AbstractComponent from "./abstract-component";

const createSortingTemplate = () => {
  return `<div class="board__filter-list">
    <a href="#" class="board__filter">SORT BY DEFAULT</a>
    <a href="#" class="board__filter">SORT BY DATE up</a>
    <a href="#" class="board__filter">SORT BY DATE down</a>
  </div>`;
};

export default class Sort extends AbstractComponent {
  getTemplate() {
    return createSortingTemplate(this._task);
  }
}
