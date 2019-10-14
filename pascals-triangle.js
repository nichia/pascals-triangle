//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(rowCount) {
    this.triangleRows = this.setRows(rowCount);
  }

  get lastRow() {
    return this.triangleRows[this.triangleRows.length - 1];
  }

  get rows() {
    return this.triangleRows;
  }

  setRows(rowCount) {
    const computedRows = [[1]]; // top row [1]
    // iterate over rowCount
    for (let i=1; i < rowCount; i++) {
      let curRow = this.computeCurRow(computedRows[i - 1]);
      computedRows.push(curRow);
    }
    return computedRows;
  }

  computeCurRow(row) {
    const curRow=[];
    for (let i=0; i<=row.length; i++) {
      if (i===0) {
        // if first element, add first element of previous row (always 1)
        curRow.push(row[0]);
      } else if (i === row.length) {
        // if last element, add last element of previous row (always 1)
        curRow.push(row[row.length-1]);
      } else {
        // sum elements of curr index & curr index -1 from previous row
        curRow.push(row[i] + row[i - 1]);
      }
    }
    return curRow;
  }
}
