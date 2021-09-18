import React, {} from 'react'; 
import '../css/app.css'; 

const App = () => {

    let img1 = 'https://github.com/kevin-powell/responsive-made-easy/blob/master/img/image-01.jpg?raw=true';
    let img2 = 'https://github.com/kevin-powell/responsive-made-easy/blob/master/img/image-02.jpg?raw=true';


  return       ( 


    <div className="main-container">


    <div className="header bg-light">
        <p>Lorem, ipsum dolor.</p>
        <h1 className='font-playfair'>Responsive layouts don’t have to be a struggle</h1>
    </div>


    <div className="box1">
        <h1>Quality Designs</h1>

        <div className="wrapper">

        <div className="sbox">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi itaque mollitia sequi culpa nam temporibus tempora magnam veritatis aut quam possimus molestias iste, vero voluptates?</div>

        <div className="sbox">Fuga doloribus inventore provident consectetur autem voluptates iure temporibus quas dicta. Nemo at excepturi soluta expedita veniam eos alias. Non quos iste consectetur modi laborum?</div>


        </div>
        
    </div>


    <div className="box1 bg-dark box2">
     
        
        <div className="wrapper">

        <div className="sbox">
            <h1>Made custom for you</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, fugit repellendus quos nostrum sint dicta?</p>
        </div>

        <div className="sbox">
            <img src={img1} alt="" />
        </div>


        </div>
        
    </div>


    <div className="box1 bg-brown box2">
     
        
     <div className="wrapper">

     <div className="sbox">
         <img src={img2} alt="" />
     </div>

     <div className="sbox">
         <h1>Created with care</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sequi perferendis, saepe beatae provident dolore, similique tempora, dicta optio necessitatibus iste repudiandae ipsum facere! Omnis doloremque tempore commodi maxime!</p>
     </div>




     </div>
     
 </div>





        {/* end of .main-container */}
    </div>

)
};

export default App;