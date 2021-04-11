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
        search: null,
        search_subject: null,
        exp: null
    }

    componentDidMount() {
        getCollection("Teachers").then(snap => {
            this.setState({ shows: snap })
        })

        //uploadData(data)
    }

    loadMore = () => {
        getQuery("Teachers", this.state.shows[this.state.shows.length-1].exp).then(snap=>{
            var temp = this.state.shows
            var i = 0
            for(i; i < snap.length; i++){
                temp.push(snap[i])
            }

            this.setState({shows:temp})
        })
    }

    /*search = () => {
        getQuery("Teachers", this.state.search).then(snap => {
            this.setState({ shows: snap })
        })
    }*/

    render() {
        filteredClass = this.state.shows

        if (this.state.search && this.state.shows) {
            filteredClass = this.state.shows.filter(
                item =>
                    item.subject.toLowerCase().indexOf(this.state.search_subject.toLowerCase()) !== -1 &&
                    item.location.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 &&
                    item.exp >= this.state.exp
            )
        }
        return (
            <div>
                <div className="wrap" style={{ margin: "20px 0px" }} >
                    <div style={{ margin: "0px 10px" }} >
                        Subject
                    </div>
                    <input placeholder="Search" onChange={(e) => { this.setState({ search_subject: e.target.value }) }}
                        value={this.state.search_subject} className="search-box" />
                    <button type="submit" className="submit" >
                        Search
                    </button>
                </div>
                <div className="wrap" style={{ margin: "20px 0px" }} >
                    <div style={{ margin: "0px 10px" }} >
                        Experience
                    </div>
                    <input placeholder="Search" onChange={(e) => { this.setState({ exp: e.target.value }) }}
                        value={this.state.exp} className="search-box" />
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
                </div>
                <div className="wrap" >
                    <div className="wrapper" >
                        <div class="grid-container">
                            {
                                filteredClass &&
                                filteredClass.map(item => {
                                    return (
                                        <RecipeReviewCard
                                            image={item.image}
                                            name={item.name}
                                            location={item.location}
                                            desc={item.desc}
                                            subject={item.subject}
                                            exp={item.exp}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="wrap" >
                    <button onClick={this.loadMore}  >Load More</button>
                </div>
            </div>
        )
    }
}

export default MyList
