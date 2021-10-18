import React from 'react'

/*class Header extends React.Component{
    render(){
        return(
           <h1>React Todos App</h1>
        )
    }
}*/


const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }
    return (
      <header style={headerStyle}>
        <h1 
        style={{
        fontSize: "6rem",
        fontWeight: "600",
        marginBottom: "2rem",
        lineHeight: "1em",
        color: "#ececec",
        textTransform: "lowercase",
        textAlign: "center",
      }}
      >
      Todos App</h1>
      </header>
    )
  }

export default Header