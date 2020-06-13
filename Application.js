import React,{Component} from 'react';
import HighScore from './HighScore';
import './style.css'

class Application extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
            overTen:false,
        }
    }
    clickMe=()=>{
        this.setState({count:this.state.count+1});
    }
    componentDidUpdate(props, state){
        if(this.state.count>10 && this.state.count !==state.count && !this.state.overTen){
            console.log('Update overTen');
            this.setState({overTen:true});
        }
    }
    resetCount=(e)=>{
        this.setState({
            count:0,
            overTen:false,
        })
    }
    render(){
        let {count}=this.state;
        return (
           <div>
               <center>
        <h1 >You Click the button {count} times</h1>
        <HighScore
        overTen={this.state.overTen}
        onReset={(e)=>this.resetCount()}
        
        />

                <button onClick={() => this.clickMe()}>Click Me</button>

               </center>
            
           </div>
           
        );
    }
}

export default Application