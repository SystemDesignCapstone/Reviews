import React from 'react';

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.displayData = [];
    this.state = {
      accuracy: 0,
      showdata: this.displayData,
    };
    this.props = props;
    this.ave = 0;
    this.starlize = this.starlize.bind(this);
  }

  starlize(num) {
    let counter = 0
    while (num > 1) {
      num = num - 1;
      this.displayData.push(<Full />);
      counter++;
    }
    if (num < 0.5) {
      this.displayData.push(<Half />);
    } else {
      this.displayData.push(<Full />);
    }
    counter++;
    while (5 - counter > 0) {
      this.displayData.push(<Empty />);
      counter++;
    }
  };

  render() {
    if (this.props.star.length > 0) {
      const arr = this.props.star.map((a) => {
        return a.accuracy;
      });
      console.log('arr:', arr);
      const sum = arr.reduce((s, v) => {
        return s + (v || 0);
      }, 0);
      this.ave = sum / this.props.star.length;
      this.starlize(this.ave);
    }
    return (
      <div>
        <div>{this.ave}</div>
        <div>
          {this.displayData}
        </div>
      </div>
    );
  }
}

const Full = () => (
  <div>
    <span id="full">
      <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" >
        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 
        0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 
        446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 
        54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
      </svg>
    </span>
  </div>
);

const Empty = () => (
  <div>
    <span id="empty">
      <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" >
        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 
        0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 
        446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 
        54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
      </svg>
    </span>
  </div>
);

const Half = () => (
  <span id="half">
    <span id="bottom">
      <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" >
        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 
        0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 
        446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 
        54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
      </svg>
    </span>
    <span id="front">
      <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false">
        <path d="M510.2 23.3l1 767.3-226.1 172.2c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L58 
        447.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7.1-23.1 28.1-39.1 52.1-39.1z">
        </path>
      </svg>
    </span>
  </span>
);

export default Stars;
