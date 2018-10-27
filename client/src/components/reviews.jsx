class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
      <div> This is review for house: {this.props.data.review_body}</div>
      {this.props.data.map((r, idx) =>
        <div key={idx}>
        <div>
        <img src='https://lh3.googleusercontent.com/YOlgEiW-1DZ2GIsCuxKEYpwo885AWnX1PYf6MiZgaAYoOgdnqIxL8kZv0NjxhvJ_6iHLs-8Q=w128-h128-e365'/>
        <span>{r.reviewer_id}</span>
        </div>
        <div><p>{r.review_body}</p></div>
        </div>
        )}
      </div>
      )
  }
}

export default Reviews;