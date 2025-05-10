// Les Entrées de variables 
 // Le menu burger 
 const menuBurger = document.getElementById('menuBurger'); // bouton mobile
 const groupLinks = document.querySelector(".groupLinks"); // menu
 const emplacement = document.querySelector(".emplacement"); // lien survol
 const close = document.getElementById('close');

//  const emplacementHidden = document.querySelector('.emplacementHidden')
 const arrowDown = document.getElementById('arrowDown')
 const emplacementHidden = document.querySelector('.emplacementHidden')
 
//  The Menu For Mobile

// arrowDown.addEventListener('click' , (e) => {
    // emplacementHidden.classList.add('hidden')

    // e.preventDefault()
// }) ;


 
 // Gestion sur desktop
   emplacement.addEventListener("mouseenter", () => {
   groupLinks.classList.add('open');
 });

 
 emplacement.addEventListener("mouseleave", () => {
   
   setTimeout(() => {
     if (!groupLinks.matches(':hover')) {
       groupLinks.classList.remove('open');
     }
   }, 100);
 });
 
   groupLinks.addEventListener("mouseleave", () => {
   groupLinks.classList.remove('open');
 });
 
   groupLinks.addEventListener("mouseenter", () => {
   groupLinks.classList.add('open');
 });
 
 // Gestion sur mobile

 menuBurger.addEventListener("click", (e) => {
   e.stopPropagation();
   groupLinks.classList.toggle('open');
 });
 
 

close.addEventListener('click', () => {
    groupLinks.classList.remove('open') 
}) ;
 

 // Groupe Links2

    const group2Content = document.querySelector(".group2Content")
    const aPropos = document.querySelector(".aPropos")

    aPropos.addEventListener('mouseenter', (e) => {
        group2Content.classList.add('open1')
        e.stopPropagation()
    })

    // The time out 

    aPropos.addEventListener("mouseleave", () => {
   
        setTimeout(() => {
          if (!group2Content.matches(':hover')) {
            group2Content.classList.remove('open1');
          }
        }, 100);
      });
    

    // The Link and the red line

    const link = document.getElementById('link')
    const cafeLink = document.querySelector('.cafeLink')

    link.addEventListener('mouseover', function(event) {
        if(cafeLink.style.display ==='block') {
            cafeLink.style.display = 'none'
            event.stopPropagation()
        }else if (cafeLink.style.display === 'block') {
            cafeLink.style.display = 'none'
        } else {
            cafeLink.style.display = 'block'
        }
    }) ;

    document.addEventListener ('mouseout' , function () {
        cafeLink.style.display = 'block'
    }) ; 

    const manufactoryLink = document.querySelector('.manufactoryLink')
    const manufactory = document.querySelector('.manufactory')

    manufactoryLink.addEventListener('mouseover', function(event) {
        if(manufactory.style.display ==='block') {
            manufactory.style.display = 'none'
            event.stopPropagation()
        }else if (manufactory.style.display === 'none') {
            manufactory.style.display = 'block'
        } else {
            manufactory.style.display = 'none'
        }
    }) ;

    document.addEventListener ('mouseout', function() {
        manufactory.style.display = 'block'
    }) ;

    const freeLink = document.querySelector('.freeLink')
    const paidLink = document.querySelector('.paidLink')

    paidLink.addEventListener('mouseover' , function(event) {
        if (paidLink.style.display === 'block') {
            freeLink.style.display = 'none'
            event.stopPropagation()
        } else if (paidLink.style.display === 'none') {
            freeLink.style.display = 'block'
        } else {
            freeLink.style.display = 'none'
        }
    }) ; 

    document.addEventListener('mouseout' , function() {
        freeLink.style.display  = 'block'
    }) ;

    const commandLink1  =  document.querySelector('.commandLink1 ')
    const bigLink1 = document.querySelector('.bigLink1')

    bigLink1.addEventListener('mouseover' , function(event) {
        if(commandLink1.style.display === 'block') {
            commandLink1.style.display = 'none'
            event.stopPropagation ()
        } else if (commandLink1.style.display === 'none') {
            commandLink1.style.display = 'block'
        } else {
            commandLink1.style.display = 'none'
        }
    });

     document.addEventListener('mouseout', function() {
        commandLink1.style.display  = 'block'
     }) ;


     
    const commandLink2  =  document.querySelector('.commandLink2 ')
    const bigLink2 = document.querySelector('.bigLink2')

    bigLink2.addEventListener('mouseover' , function(event) {
        if(commandLink2.style.display === 'block') {
            commandLink2.style.display = 'none'
            event.stopPropagation ()
        } else if (commandLink2.style.display === 'none') {
            commandLink2.style.display = 'block'
        } else {
            commandLink2.style.display = 'none'
        }
    });

     document.addEventListener('mouseout', function() {
        commandLink2.style.display  = 'block'
     }) ;


    // Arrow Left 

    const arrowLeft1 = document.getElementById('arrowLeft1')
    const arrow1 = document.querySelector('.arrow1') 

    arrow1.addEventListener('mouseenter', function() {
        arrowLeft1.style.transform = 'translateX(10px)'
    }); 

    arrow1.addEventListener('mouseleave', function () {
        arrowLeft1.style.transform = 'translateX(0)'
    }) ;



    

