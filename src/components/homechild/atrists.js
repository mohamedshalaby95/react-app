
import React,{Component} from'react';
import {NavLink as Link } from 'react-router-dom';

export default class Artist extends Component{
    
    constructor(){
        super()
        this.url="http://localhost:3004/artists"
        this.state={
            artist:[],
            
        }
    }
   
    currentsrc;
    renderArtist(artists=[]){
        console.log(artists.length)
        console.log(artists)
        if( artists.length>0 && artists ){
          

            return artists.map((items) =>{
                this.currentsrc=`./images/covers/${items.cover}.jpg`;
          console.log(this.currentsrc)
          return( <div class="position-relative" >
              <img className="img-fluid m-3" src={this.currentsrc} alt="notfound" />
          {/* <button class=" mybutton btn btn-primary" onClick={() =>{
                          history.push(`/atrist/${items.id}`)
                            }}>{items.name}</button> */}
           <Link activeClassName="active" className=" mybutton"to={`/artist/${items.id}`} >{items.name}</Link>                 
            </div>
           )

            })
        }
        return (
            <div> <p>not found artist </p></div>
        )
    }
    render(){
        console.log(this.state.artist)
        return (
        <div> {this.renderArtist(this.state.artist)}</div>
        )
        
    }
    
    componentDidMount(){
        fetch(this.url,{method:'GET'})
        .then(response => response.json())
        .then((data) =>{ this.setState({artist:data})
    console.log(data)});
}




}