import React, {Component} from 'react';
import '../css/styles.css'



class Header extends Component{

    state = {
        keywords:''
    }


    inputChangeHandler = (event) => {
        this.setState({
            keywords: event.target.value
        })
    }

    render(){

        // const style = {
        //     background:'red'
        // }

        // if(this.state.keywords !==''){
        //     style.background = 'blue'
        // } else{
        //     style.background = 'red'
        // }


        return(
            <header>
            <div className="logo">Logo</div>
            <input type="text" 
            onChange={this.inputChangeHandler} 
            />
     
            </header>
        )  
    } 
}

 export default Header;
