import Artist from "./homechild/atrists";
import Header from "./homechild/header";

const Home=() =>{
return(
    <div class="container"> 
    
    <div class="row">
    <Header />
    </div >
    <h1 className="text-center m-5 text-muted font-larger"> Brouse the artist</h1>
   <div class="row ">
   
       <div className="col-2 "></div>
       <div className="col-1  rowstyle"></div>
       <div className="col-6  rowstyle"><Artist /></div>
       <div className="col-1  rowstyle"></div>
       <div className="col-2"></div>
   </div>
    
    </div>
)
}

export default Home;