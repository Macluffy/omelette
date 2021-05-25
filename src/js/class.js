let personnage ={
    nom:"ali",
    lieu:[],
    argent:100,
    maindroite:[],
    maingauche:[],
    sedeplacer(depart,ali,position,arriver){
        depart.personne.splice(depart.personne.indexOf(ali),1)
        this.lieu.splice(0,1)
        arriver.personne.push(ali)
        this.lieu.push(position)
        console.log(`${this.nom} est arriver a ${arriver.nom}`);
    },
    payer(produit){
        this.argent-=produit.prix
        console.log(`${produit.nom} a été acheté`);

    },
    couper(produit){
        produit.etat="couper"
        console.log(`${produit.nom} a été coupé`);

    }

}



let maison ={
    nom:"maison",
    personne:["ali"],

}

let couteau={
    nom:"couteau",
    action:"coupe",

}

class Ingredients {
    constructor(nom,etat,prix){
        this.nom=nom;
        this.etat=etat;
        this.prix=prix;

    }

}
let oignon = new Ingredients("oignon","entier",2)
let oeuf = new Ingredients("oeuf","entier",1)
let epice = new Ingredients("epice","moulu",3)

let epicerie={
    produit:[oignon,oeuf,epice],
    nom:"lidl",
    personne:[],
    panier:{
            nom:"panier",
            nbr:10,
            type:"petit",
            contenu:[],
    }
}

let poele={
    contenu:[],
    cuire(){
        // let p = poele.contenu.indexOf(produit)
        // let r = poele.contenu[p]
        // r.etat="cuit"
        poele.contenu.etat="cuit"

        setTimeout(function(){console.log(`${poele.contenu[0].nom} a été cuit`);}, 4000);
    }
}
poele.contenu.push()

let bol={
    contenu:[],
    melange(om){
        let newmelange={
            nom:om,
            etat:"non cuit"
        }
        
        poele.contenu.push(newmelange);
        // console.log(`${newmelange.nom} a été melanger`);
    }
}

export{personnage,maison,couteau,oignon,oeuf,epice,epicerie,poele,bol}