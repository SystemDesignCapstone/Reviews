import React from 'react';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <div>
           This is review for house:
          {this.props.house}
        </div>
        {this.props.data.map((r, idx) => {
          return (
          <div key={idx}>
            <div>
              <img src={r.avatarUrl}/>
              <span>{r.name}</span>
            </div>
            <div><p>{r.review_body}</p></div>
          </div>
          );
        })}
      </div>
    );
  }
};

export default Reviews;
