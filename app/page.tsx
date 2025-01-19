import {Button} from '@heroui/button'; 
import Header from './components/Header';
import Accueil from './components/Accueil';
import QuiSommesNous from './components/QuiSommesNous';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      {/* header*/}
      <Header/>
      <Accueil/>
      <QuiSommesNous/>    
      <Footer/>  
        
         
    </div>
  );
}
