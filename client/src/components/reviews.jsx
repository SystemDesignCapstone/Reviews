class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
      <div> This is review for house: {this.props.house}</div>
      {this.props.data.map((r, idx) =>
        <div key={idx}>
        <div>
        <img src={r.avatar_url}/>
        <span>{r.username}</span>
        </div>
        <div><p>{r.review_body}</p></div>
        </div>
        )}
      </div>
      )
  }
}

export default Reviews;