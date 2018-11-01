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
            <div id='review_start'>
              <img src={r.avatarUrl}/>
              <div id='review_info'>
                <div id='reviewer_name'>{r.name}</div>
                <div id='review_time'>{r.review_time.slice(0, 4)}</div>
              </div>
            </div>
            <div id='review_body'><p>{r.review_body}</p></div>
            <div id='dividing'>
            <div id='line'></div>
            </div>
          </div>
          );
        })}
      </div>
    );
  }
};

export default Reviews;
