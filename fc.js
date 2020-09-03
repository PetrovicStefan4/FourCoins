let polja = document.querySelectorAll('.elem');
let izbor = document.querySelectorAll('.choice');
let pa = document.getElementById('btn-pa');
let textWinner = document.querySelector('.text-winner');

let nizPopunjenih = [];
let nizPrazna = [];
let nizPrvog = [];
let nizDrugog = [];
let br = 0;
let end = 0;






izbor.forEach(x=>{
  
    x.addEventListener('click',(e)=>{
        e.preventDefault();
        let upisan=0;
        if (end == 1) {upisan =1};

        for (i=60; i>=10; i=i-10){
           
            if (upisan !== 1){
                let poljaDno = eval(i+parseInt(x.id));
             
                let boji = document.getElementById(`${poljaDno}`);
            
                if (nizPopunjenih.includes(poljaDno) == false && boji.classList.value.includes('dp') == false){
    
                    
                        if (br%2 == 0 ){
                            boji.classList.add('prvi');
                            nizPopunjenih.push(boji.id);
                            nizPrvog.push(boji.id);
                            boji.classList.add('dp');
                            br++;
                            upisan = 1;
                        }
            
                        else if (br%2 == 1 ) {
                            boji.classList.add('drugi');
                            nizPopunjenih.push(boji.id);
                            nizDrugog.push(boji.id)
                            br++;
                            boji.classList.add('dp');
                            upisan = 1;
                            }
                              
                    }
            }
       
      }


                    if (pobednik_v(nizPrvog) || pobednik_u(nizPrvog) || pobednik_da(nizPrvog) || pobednik_dd(nizPrvog)){
                        console.log('Pobedio je prvi igrac');
                        kraj();
                        krajni_ispis_r(nizPopunjenih.length);

                        end = 1;

                    }

                    if (pobednik_v(nizDrugog) || pobednik_u(nizDrugog) || pobednik_da(nizDrugog) || pobednik_dd(nizDrugog)){
                        console.log('Pobedio je drugi igrac');
                        kraj();
                        krajni_ispis_y(nizPopunjenih.length);
                        end = 1;
                    }
                    
                   
    });
    

});



if (br%2 == 0){
izbor.forEach(x=>{
    x.classList.toggle('red'); 
    x.addEventListener('click',(e)=>{
        e.preventDefault();
            for(i=0; i<7; i++){
                izbor[i].classList.toggle('red'); 
                izbor[i].classList.toggle('yellow');
                
                if (end == 1){
                    izbor[i].classList.value = 'choice';
                }

            }    
    });

   
})

}





// Funkcija pobednik vodoravno

let pobednik_v= (y) =>{
    let pob=false;

    if(pob == false) {
    for (i=60; i>=10; i=i-10){
        let x1 = eval(parseInt(`${i}`)+1);
        let x2 = eval(parseInt(`${i}`)+2);
        let x3 = eval(parseInt(`${i}`)+3);
        let x4 = eval(parseInt(`${i}`)+4);
        let x5 = eval(parseInt(`${i}`)+5);
        let x6 = eval(parseInt(`${i}`)+6);
        let x7 = eval(parseInt(`${i}`)+7);



        if (y.includes(`${x1}`) && 
            y.includes(`${x2}`) &&
            y.includes(`${x3}`) &&
            y.includes(`${x4}`)
            || 
            y.includes(`${x2}`) &&
            y.includes(`${x3}`) &&
            y.includes(`${x4}`) &&
            y.includes(`${x5}`) 
            || 
            y.includes(`${x3}`) &&
            y.includes(`${x4}`) &&
            y.includes(`${x5}`) &&
            y.includes(`${x6}`) 
            || 
            y.includes(`${x4}`) &&
            y.includes(`${x5}`) &&
            y.includes(`${x6}`) &&
            y.includes(`${x7}`) 
            )
                            {
                                console.log('Vodravno');
                               pob =true;
                            }            
        }
    }
        return pob;
}

// Funkcija pobednik uspravno

let pobednik_u= (y) =>{
    let pob=false;

    if(pob == false) {
        for(i=1; i<8; i++){
            let x1 = eval(parseInt(`${i}`)+60);
            let x2 = eval(parseInt(`${i}`)+50);
            let x3 = eval(parseInt(`${i}`)+40);
            let x4 = eval(parseInt(`${i}`)+30);
            let x5 = eval(parseInt(`${i}`)+20);
            let x6 = eval(parseInt(`${i}`)+10);

        
            if (y.includes(`${x1}`) && 
            y.includes(`${x2}`) &&
            y.includes(`${x3}`) &&
            y.includes(`${x4}`)
            || 
            y.includes(`${x2}`) &&
            y.includes(`${x3}`) &&
            y.includes(`${x4}`) &&
            y.includes(`${x5}`) 
            || 
            y.includes(`${x3}`) &&
            y.includes(`${x4}`) &&
            y.includes(`${x5}`) &&
            y.includes(`${x6}`) 
          
            )
                            {
                                console.log('Uspravno');
                            pob =true;
                            }            
                        }
                    }
        return pob;    
    }


   // Funkcija pobednik dijagonala

    let pobednik_da= (y) =>{
        let pob=false;
    
        if(pob == false) {
            for(i=11; i<=67; i++){

                if (i%8 !==0 || i%9 !==0 || i%0 !==0){
                let x1 = eval(parseInt(`${i}`));
                let x2 = eval(parseInt(`${i}`)-9);
                let x3 = eval(parseInt(`${i}`)-18);
                let x4 = eval(parseInt(`${i}`)-27);
                let x5 = eval(parseInt(`${i}`)-36);
                let x6 = eval(parseInt(`${i}`)-45);
                
                        if (y.includes(`${x1}`) && 
                        y.includes(`${x2}`) &&
                        y.includes(`${x3}`) &&
                        y.includes(`${x4}`)
                        || 
                        y.includes(`${x2}`) &&
                        y.includes(`${x3}`) &&
                        y.includes(`${x4}`) &&
                        y.includes(`${x5}`) 
                        || 
                        y.includes(`${x3}`) &&
                        y.includes(`${x4}`) &&
                        y.includes(`${x5}`) &&
                        y.includes(`${x6}`) 
                        )
                                        {
                                        console.log('Dijagonala A');  
                                        pob =true;
                                        }            
                                    }
                        }
                        
                                }
            return pob;    
        }
    

        let pobednik_dd= (y) =>{
            let pob=false;
        
            if(pob == false) {
                for(i=67; i>=1; i--){
    
                    if (i%8 !==0 || i%9 !==0 || i%0 !==0){
                    let x1 = eval(parseInt(`${i}`));
                    let x2 = eval(parseInt(`${i}`)-11);
                    let x3 = eval(parseInt(`${i}`)-22);
                    let x4 = eval(parseInt(`${i}`)-33);
                    let x5 = eval(parseInt(`${i}`)-44);
                    let x6 = eval(parseInt(`${i}`)-55);
    
                
                    if (y.includes(`${x1}`) && 
                    y.includes(`${x2}`) &&
                    y.includes(`${x3}`) &&
                    y.includes(`${x4}`)
                    || 
                    y.includes(`${x2}`) &&
                    y.includes(`${x3}`) &&
                    y.includes(`${x4}`) &&
                    y.includes(`${x5}`) 
                    || 
                    y.includes(`${x3}`) &&
                    y.includes(`${x4}`) &&
                    y.includes(`${x5}`) &&
                    y.includes(`${x6}`) 
                    )
                                    {
                                    console.log('Dijagonala D');    
                                    pob =true;
                                    }            
                                }
                    }
                    
                            }
                return pob;    
            }
        

//   Funkvija kraj
let z= 0;

let kraj = () => {
    let animacija = [];
    polja.forEach(x=>{
        if (x.classList.value.includes('dp') == false){
            animacija.push(x);
            
        }
        
    })

    if (z<animacija.length-1){
        let timer = setInterval( function(){
        animacija[z].classList.add('tamno');
            if (z<42-br-1){
                z++;
            }
        
        if (z>42-br-1){
            clearInterval(timer);
        }
        },30);
    }
};



// Funkcija padajuci elementi


// let fallingElementsNum = (x) => {
//     let padajuci = [];
//     polja.forEach(x=>{
//         if (x.classList.value.includes('dp') == false){
//             padajuci.push(x);
//         }
        
//     })

//          let empty = -1;
//         for (let z=0; z<=padajuci.length-1; z++){
//             if (parseInt(padajuci[z].id  % 10 )== parseInt(x.id) ){
//                 empty++;
//             }
//             }
//                 // let z1 = 10+parseInt(x.id);
//                 // console.log(z1);


//             for (let z1=10+parseInt(x.id); z1<=empty*10+x.id; z1=z1+10){
//                 if (br%2 == 0){
//                     setTimeout(function(){
//                         let idAnim =  (z1); 
//                         let tdAnim =  document.getElementById(`${idAnim}`);
//                             if(tdAnim.classList.value.includes('dp')){
//                                 tdAnim.classList.add('prvi');
//                             }
//                             console.log(idAnim);
//                     }, 400);
//                     setTimeout(function(){
//                         let idAnim =  (z1); 
//                         let tdAnim =  document.getElementById(`${idAnim}`);
//                         if(tdAnim.classList.value.includes('dp')){
//                             tdAnim.classList.remove('prvi');
//                         }
//                     }, 1000);
//                 }

            


//                 else if (br%2 == 1){
//                     setTimeout(function(){
//                         let idAnim =  (z1); 

//                              document.getElementById(`${idAnim}`).classList.add('drugi');
//                             console.log(idAnim);
//                     }, 400);
//                     setTimeout(function(){
//                         let idAnim =  (z1); 
//                         document.getElementById(`${idAnim}`).classList.remove('drugi');
//                             console.log(idAnim);
//                             console.log(z1);
//                             z1 = z1 +10;
//                     }, 1000);
//                 }
                
//             }
//             return empty;
// }


// let fallingElementsAnim = (x) => {
//     console.log(fallingElementsNum(x));


pa.addEventListener('click',(e)=>{
    e.preventDefault();
    location.reload();
})

let krajni_ispis_r = (y) => {
    setTimeout(() => {
                        pa.style.display = 'inline-block';
                        textWinner.innerHTML = `RED IS A WINNER`;
                        textWinner.style.display = 'inline-block';
    }, (42-y)*30);
}


let krajni_ispis_y  = (y) => {
    setTimeout(() => {
        pa.style.display = 'inline-block';
        textWinner.innerHTML = `YELLOW IS A WINNER`;
        textWinner.style.display = 'inline-block';
    }, (42-y)*30);
}


                        