

// const Album=({newlist}) =>{
//     console.log(newlist)
          
//         // const news=(newlist.map((items) =>{
//         // <div>{items.title}</div>
//         // }))
    
//         return(
//         <div className=" col-6 mr-5 ">
//           <div className="">
        
//           </div>
    
//         </div>
//         )}
//     export default Album;

import {Component} from 'react'

export default class Album extends Component{

constructor(props){
  super(props)
  this.state={
    arr:[]
  }
}
renderArtist(artists=[]){
  console.log(artists)
  
  if( artists.length>0 && artists ){
          

    return artists.map((items) =>{
        this.currentsrc=`../images/albums/${items.cover}.jpg`;
  console.log(this.currentsrc)
  return( <div class="bg-dark alumsImages">
    {/* <h1 class=" text-muted ">{items. title}</h1> */}
      <img className="  image-fluid text-center w-50" src={this.currentsrc} alt="notfound" />
  

      </div>
    
   )

    })
}

      }

render=() =>{
  this.state.arr=this.props

  console.log(this.state.arr.news.albums)
  return (
    <div> {this.renderArtist(this.state.arr.news.albums)}</div>
  )
}

}