import{personnage,maison,couteau,oignon,oeuf,epice,epicerie,poele,bol} from"./class.js";

let exo=()=>{
    personnage.sedeplacer(maison,"ali","maison",maison);
console.log(maison);
console.log(personnage.lieu);
personnage.sedeplacer(maison,"ali","epicerie",epicerie);
personnage.maindroite.push(epicerie.panier);

epicerie.panier.nbr=epicerie.panier.nbr-1;
console.log(epicerie.panier);
console.log(`${personnage.nom} a pris un ${epicerie.panier.nom} de type ${epicerie.panier.type} dans sa main`);
console.log(personnage.maindroite);
// console.log(epicerie.panier);

let n=epicerie.produit.length
for(let i=0;i<n;i++){
    personnage.maindroite[0].contenu.push(epicerie.produit[i])
    console.log(personnage.maindroite[0].contenu);
}
for(let i=0;i<n;i++){
    epicerie.produit.shift()
    console.log(epicerie.produit);
}


console.log(personnage.maindroite[0].contenu);
console.log(epicerie.produit);
console.log(`${personnage.nom} a mis dans son panier ${oignon.nom}`);
console.log(`${personnage.nom} a mis dans son panier  ${oeuf.nom} `);
console.log(`${personnage.nom} a mis dans son panier  ${epice.nom}`);
let h =personnage.maindroite[0].contenu.length
console.log();
let payerarticle=()=>{
    for(let i=0;i<h;i++){
        personnage.payer(personnage.maindroite[0].contenu[i])
        console.log(personnage.maindroite[0].contenu);
    }
}

payerarticle()
console.log(personnage);
console.log(personnage.argent);
personnage.sedeplacer(epicerie,"ali","maison",maison)
for(let i=0;i<h;i++){
    bol.contenu.push(personnage.maindroite[0].contenu[i])
    
    console.log(personnage.maindroite[0].contenu);  // attention
}
for(let i=0;i<h;i++){
personnage.maindroite[0].contenu.shift() 
}
 // attention

personnage.sedeplacer(maison,"ali","epicerie",epicerie)
personnage.maindroite.splice(0,1)
console.log(epicerie.panier);
epicerie.panier.nbr=epicerie.panier.nbr+1

console.log(`${personnage.nom} a bien deposer son ${epicerie.panier.nom}de type ${epicerie.panier.type} dans le ${epicerie.nom}`);
console.log(epicerie.panier);
personnage.sedeplacer(epicerie,"ali","maison",maison)
console.log(`${personnage.nom} va faire une omelette`);
console.log(bol.contenu);


for(let i=0;i<3;i++){
    if(bol.contenu[i].etat == "entier"){
        personnage.couper(bol.contenu[i])

    }
}


bol.melange("omelette")
console.log(poele.contenu);



bol.contenu.shift()
bol.contenu.shift()
bol.contenu.shift()
console.log(bol.contenu);
console.log(poele.contenu);
console.log(poele.contenu);
poele.cuire()
}
export{exo}