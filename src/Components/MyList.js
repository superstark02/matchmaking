import React, { Component } from 'react'
import RecipeReviewCard from './Card'
import getCollection, { getQuery } from '../Database/getCollection'
import "./MyList.css"
import uploadData from '../Database/uploadData'
import { data } from '../Database/data'

var filteredClass = null

export class MyList extends Component {

    state = {
        shows: [],
        search: null
    }
    componentDidMount() {
        getCollection("Teachers").then(snap => {
            this.setState({ shows: snap })
        })

        //uploadData(data)
    }

    search = () => {
        getQuery("Teachers", this.state.search).then(snap=>{
            this.setState({shows:snap})
        })
    }

    render() {
        filteredClass = this.state.shows

        if (this.state.search && this.state.shows) {
            filteredClass = this.state.shows.filter(
                item =>
                    item.location.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            )
        }
        return (
            <div>
                <div className="wrap" style={{ margin: "20px 0px" }} >
                    <div style={{ margin: "0px 10px" }} >
                        Subject
                    </div>
                    <input placeholder="Search" className="search-box" />
                    <button type="submit" className="submit" >
                        Search
                    </button>
                </div>
                <div className="wrap" style={{ margin: "20px 0px" }} >
                    <div style={{ margin: "0px 10px" }} >
                        Experience
                    </div>
                    <input placeholder="Search" className="search-box" />
                    <button type="submit" className="submit" >
                        Search
                    </button>
                </div>
                <div className="wrap" style={{ margin: "20px 0px" }} >
                    <div style={{ margin: "0px 10px" }} >
                        Location
                    </div>
                    <input placeholder="Search" onChange={(e) => { this.setState({ search: e.target.value }) }}
                            value={this.state.search} className="search-box" />
                    <button type="submit" className="submit" onClick={this.search} >
                        Search
                    </button>
                </div>s
                <div className="wrap" >
                    <div className="wrapper" >
                        <div class="grid-container">
                            {
                                this.state.shows &&
                                this.state.shows.map(item => {
                                    return (
                                        <RecipeReviewCard
                                            image={item.image}
                                            name={item.name}
                                            location={item.location}
                                            desc={item.desc}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="wrap" >
                    <button>Load More</button>
                </div>
            </div>
        )
    }
}

export default MyList
