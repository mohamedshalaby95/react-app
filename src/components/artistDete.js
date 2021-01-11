import React,{Component} from 'react'
import { NavLink as Link, useParams } from 'react-router-dom';
import Album from './homechild/albus';


export default class ArtistDetels extends Component{
   
    constructor(props){
        super(props);
        this.url=`http://localhost:3004/artists/${this.props.match.params.id}`;
        this.state={
            artist:[],
        }
    }
    currentsrc;
    
    renderArtist(artists=[]){
        this.currentsrc=`../images/covers/${artists.cover}.jpg`;
       
        
      
       
        return (
            
        <div className="container">
         < div class="row">
             <div class="col-sm-2"> </div>
             <div class="col-sm-8 rowstyle ">  
             <Link activeClassName="active" to={'/'} ><h1  className="text-muted m-3 text-center home-link">music=db</h1></Link>
               <div class="row">
                  <div class="col-sm-2"></div>
                  <div class="col-sm-6">
                     <img class="img-fluid" src={this.currentsrc} />
                   
                  </div>
                  <div class="col-sm-3"></div>
               </div>
               <div class="row">
                  <div class="col-sm-3"></div>
                  <div class="col-sm-5">
                     
                     <h1 className="text-white text-center mb-2">{artists.name}</h1>
                  </div>
                  <div class="col-sm-3"></div>
               </div>
               <div class="row">
                  <div class="col-sm-2"></div>
                  <div class="col-sm-8">
                     
                     <p className="text-white text-center mb-2">{artists.bio}</p>
                  </div>
                  <div class="col-sm-2"></div>
               </div>
              
               <div class="row">
                 
                 
                     
              
                    <div class="col-sm-12"> 
                    <h1 class="text-center m-5"> this is artist albums:</h1>
                    <Album news={this.state.artist } /> </div>
                
                   
                
                  
               </div>
             </div>
             <div class="col-sm-2"> </div>
         </div>
         
        </div>
       ) 
       
            } 
    
    render(){
    console.log(this.props)
        return (<div> {this.renderArtist(this.state.artist)}</div>)
    }
    componentDidMount(){
        fetch(this.url,{method:'GET'})
        .then(response => response.json())
        .then((data) =>{ this.setState({artist:data})
    console.log(this.state.artist)});
}
}
