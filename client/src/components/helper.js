const starlize = (num, arr) => {
  let counter = 0
  while (num > 1) {
  num = num - 1;
  arr.push(<Full />);
  counter++;
  }
  if(num < 0.5) {
  arr.push('half');
  }
  else {
  arr.push('full');
  }
  counter++;
  while(5 - counter > 0) {
  arr.push('empty');
  counter++;
  }
  return arr;
}

export default starlize;