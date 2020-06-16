import React, { Component } from "react"
import Intro from '../../components/Intro'
import SeriesList from "../../components/SeriesList"
import Loader from "../../components/Loader"

export class index extends Component {
  state = {
    series: [],
    seriesName: "",
    isFetching: false,
  }

  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isFetching: true })
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(series => this.setState({ series, isFetching: false }))
  }

  render() {
    const { series, seriesName, isFetching } = this.state

    return (
      <div>
        <Intro message="Here you can find all if your favourite tv series!" />
        <div>
          <input
            type="text"
            value={seriesName}
            onChange={this.onSeriesInputChange}
          />
        </div>
        {!isFetching && series.length === 0 && seriesName.trim() === "" && (
          <p>Enter Series Name into the input</p>
        )}
        {!isFetching && series.length === 0 && seriesName.trim() !== "" && (
          <p>No TV Series found with this name into the input</p>
        )}
        {isFetching && <Loader />}
        {!isFetching && <SeriesList list={series} />}
      </div>
    )
  }
}

export default index
