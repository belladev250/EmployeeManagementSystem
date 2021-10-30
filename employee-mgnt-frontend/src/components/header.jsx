import React, { Component } from 'react'

class Header extends Component {
   

    render() {
        return (
            <div>
                <header style={{ marginBottom:"3em"}}>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div  style={{color:"white",
                        padding:'12px',
                        fontSize:'2em'
                    }}>Employee Management App</div>
                    </nav>
                </header>
            </div>

        )
    }
}

export default Header