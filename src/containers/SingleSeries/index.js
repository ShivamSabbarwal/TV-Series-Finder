import React, { Component } from "react"
import Loader from "../../components/Loader"

export class SingleSeries extends Component {
  state = {
    show: null,
  }

  componentDidMount = () => {
    const { id } = this.props.match.params

    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => response.json())
      .then(json => this.setState({ show: json }))
  }

  render() {
    const { show } = this.state
    console.log(show)

    return (
      <div>
        {show === null && <Loader />}
        {show !== null && (
          <div>
            <h1>{show.name}</h1>
            <p>
              <img src={show.image.medium} alt={show.name}></img>
            </p>
            <p>
              <strong>Premiered</strong> - {show.premiered}
            </p>
            <p>
              <strong>Rating</strong> - {show.rating.average}/10
            </p>
            <p>
              <strong>Episodes</strong> - {show._embedded.episodes.length}
            </p>
            <h3>Summary</h3>
            <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
          </div>
        )}
      </div>
    )
  }
}

export default SingleSeries
