import React,{Component} from 'react';



class Header extends Component{

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render(){
        console.log('Header')
        return(
            <div>
                <h1 style={{fontFamily: "Monoton", color: "white",}} className='tc'>
                    Robot Friends
                </h1>
               
            </div>

        )
    }

}

export default Header;