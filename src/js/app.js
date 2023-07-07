import data from './data';
import Table from './drowTable';

const table = new Table(data);

const element = ['id', 'id', 'title', 'title', 'year', 'year', 'imdb', 'imdb'];
let index = 0;

table.drawTable();

setInterval(() => {
  table.addArrow(element[index]);
  table.getSort(element[index]);
  index += 1;
  if (index === element.length) {
    index = 0;
  }
}, 2000);
