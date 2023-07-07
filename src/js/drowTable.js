export default class Table {
  constructor(data) {
    this.data = data;
    this.sort = true;
  }

  static renderItem(item) {
    return `
      <tr>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.year}</td>
        <td>${item.imdb.toFixed(2)}</td>
      </tr>`;
  }

  drawTable() {
    const tbody = document.querySelector('.tbody');
    this.data.forEach((item) => {
      const itemHtml = Table.renderItem(item);
      tbody.insertAdjacentHTML('beforeend', itemHtml);
    });
  }

  addArrow(el) {
    const up = '\u{2191}';
    const down = '\u{2193}';
    const th = document.querySelectorAll('th');

    th.forEach((elem) => {
      const inputTh = elem.querySelector('span');
      if (inputTh) {
        inputTh.remove();
      }

      if (elem.textContent === el && this.sort) {
        const spanEl = document.createElement('span');
        spanEl.innerText = down;
        this.sort = false;
        elem.appendChild(spanEl);
      } else if (elem.textContent === el && !this.sort) {
        const spanEl = document.createElement('span');
        spanEl.innerText = up;
        this.sort = true;
        elem.appendChild(spanEl);
      }
    });
  }

  getSort(el) {
    if (this.sort) {
      if (el === 'title') {
        this.data.sort((a, b) => {
          if (a.title > b.title) {
            return -1;
          }
          return 1;
        });
      } else {
        this.data.sort((a, b) => {
          if (a[el] > b[el]) {
            return -1;
          }
          return 1;
        });
      }
    }
    if (!this.sort) {
      if (el === 'title') {
        this.data.sort((a, b) => {
          if (a.title > b.title) {
            return 1;
          }
          return -1;
        });
      } else {
        this.data.sort((a, b) => {
          if (b[el] > a[el]) {
            return -1;
          }
          return 1;
        });
      }
    }

    document.querySelector('.tbody').innerHTML = '';
    this.drawTable();
  }
}
