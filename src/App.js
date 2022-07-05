import Head from './header';
import Sdata from './data';
import Card from './Box'
import List from './List';



function App() {
  return (
    <>
    <Head></Head>
   {
     Sdata.map((val)=>{
       return(
        <Card
        title={val.title} {...onclick=()=>{
          return(
            <List/>
          )
        }}/>
       );

     })
   }
   
    </>
  );
}

export default App;
