import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Footer extends Component {
    render() {
        return (
            <div className="wrap" style={{ padding: "30px", fontSize: "10px", color: "grey" }} >
                <div>
                    <div>
                        <Link to="/form" >
                        <button>
                            Apply As A Teacher
                        </button>
                        </Link>
                    </div>
                    <div style={{textAlign:"center",marginTop:"20px"}}>
                        Dipit Sharma and Eklavya
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
