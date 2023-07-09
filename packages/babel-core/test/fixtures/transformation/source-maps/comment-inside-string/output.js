// https://github.com/babel/babel/issues/9790
const comment = `//# sourceMappingURL=${path.basename(sourceMapFilename)}`;

// https://github.com/babel/babel/issues/9956
this.shadowRoot.innerHTML = `<style>div{display:block}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuaHRtbCIsInNvdXJjZXMiOlsiZmllbGQuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyI8c3ZlbHRlOm9wdGlvbnMgdGFnPVwiZGxzLWZpZWxkXCIgLz5cblxuPHN0eWxlPlxuICBkaXYgeyBkaXNwbGF5OiBibG9jazsgfVxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gIDxkaXYgY2xhc3M9XCJfZmllbGRMYWJlbExheW91dFwiPlxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZExhYmVsXCI+XG4gICAgICA8c2xvdCBuYW1lPVwiZmllbGQtbGFiZWxcIj48L3Nsb3Q+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZpZWxkT3B0aW9uYWxcIiBjbGFzczpvcHRpb25hbD5cbiAgICAgIE9wdGlvbmFsXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZmllbGREZXRhaWxcIj5cbiAgICA8c2xvdCBuYW1lPVwiZmllbGQtZGV0YWlsXCI+PC9zbG90PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZpZWxkQ29udHJvbFwiPlxuICAgIDxzbG90IG5hbWU9XCJmaWVsZC1jb250cm9sXCI+PC9zbG90PlxuICAgIDxzbG90Pjwvc2xvdD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmaWVsZE1lc3NhZ2VcIj5cbiAgICA8c2xvdCBuYW1lPVwiZmllbGQtbWVzc2FnZVwiPjwvc2xvdD5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGxldCB0aGVtZSA9ICcnO1xuICBleHBvcnQgbGV0IG9wdGlvbmFsID0gZmFsc2U7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRSxHQUFHLEFBQUMsQ0FBQyxBQUFDLE9BQU8sQ0FBRSxLQUFLLEFBQUUsQ0FBQyJ9 */</style>`;
