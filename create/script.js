let keller6 = [
    "Alexandre Vandewiele",
    "Antoine Lansman",
    "Bastien Venturi",
    "Carole Gérard",
    "Dorian Vanden Eynde",
    "Elisabeth Leyder",
    "Elodie Ali",
    "Justin Michel",
    "Justine Frigo",
    "Justine Leleu",
    "Kimi Lefort",
    "Layla",
    "Lidwine Carenne",
    "Lucas Beauloi",
    "Marie Tara",
    "Mathias Barbier",
    "Okly",
    "Pierre Marien",
    "Robin Piot",
    "Rosalie Boulard",
    "Stephane Comblez",
    "Tim Besmet",
    "Toms",
    "Valentin Lefort",
    "Alexandre Vens",
    "Virginie Dourson"
  ];

  let randomizeKeller = keller6.sort(() => Math.random() - 0.5);
  

  randomizeKeller.forEach((keller6) => {

    let selectArticle = document.querySelector('article');
    let newSection = document.createElement('section');
    let paragraph = document.createElement('p');
    let learner = document.createTextNode(keller6);

    selectArticle.appendChild(newSection);
    newSection.appendChild(paragraph);
    paragraph.appendChild(learner);

    function randColor(){

        function rand(){
            return Math.floor(Math.random() * 256);
        }
        let x = rand();
        let y = rand();
        let z = rand();
        let mycolor = `rgb(${x}, ${y}, ${z})`;
        
        let avrg = (x + y + z) / 3;
        paragraph.style.backgroundColor = mycolor;
        
        if (avrg <= 128) {
            paragraph.style.color = `rgb(255, 255, 255)`;
        }
    }
    randColor();  
  });
  

