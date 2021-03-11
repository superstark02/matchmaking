import React, { Component } from 'react'
import SearchAppBar from '../Components/AppBar'
import Footer from '../Components/Footer'
import MyList from '../Components/MyList'

export class Home extends Component {
    render() {
        return (
            <div>
                <SearchAppBar />
                <MyList />
                <Footer/>
            </div>
        )
    }
}

export default Home
