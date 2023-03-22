/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
*/

//Creiamo una funzione che genera il template delle card
function generateTemplate() {
    //Dichiariamo l'array di oggetti coi dati in nostro possesso
    const staff = [
        {
            firstName: "Wayne",
            surname: "Barnett",
            role: "Founder & CEO",
            image: "wayne-barnett-founder-ceo.jpg",

        },

        {
            firstName: "Angela",
            surname: "Caroll",
            role: "Chief Editor",
            image: "angela-caroll-chief-editor.jpg",

        },

        {
            firstName: "Walter",
            surname: "Gordon",
            role: "Office Manager",
            image: "walter-gordon-office-manager.jpg",

        },

        {
            firstName: "Angela",
            surname: "Lopez",
            role: "Social Media Manager",
            image: "angela-lopez-social-media-manager.jpg",

        },

        {
            firstName: "Scott",
            surname: "Estrada",
            role: "Developer",
            image: "scott-estrada-developer.jpg",

        },

        {
            firstName: "Barbara",
            surname: "Ramos",
            role: "Graphic Designer",
            image: "barbara-ramos-graphic-designer.jpg",

        },
    ]
    //Crea template bootstrap 
    const container = document.getElementById("maincontent");
    const row = document.createElement("div");
    const col = document.createElement("div");
    const card = document.createElement("div");
    const img = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");
    col.appendChild(card);
    card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    row.classList.add("row");
    col.classList.add("col-12", "col-lg-4", "col-md-6", "d-flex", "justify-content-center", "pb-3");
    card.classList.add("card");
    card.style.width = "18rem";
    img.classList.add("card-img-top");
    cardBody.classList.add("card-body");
    cardTitle.classList.add("card-title", "fs-4");
    cardText.classList.add("card-text");
    
    //Inserisci i dati dall'array di oggetti ed ogni volta appendi la col clonandola
    for (i = 0; i < staff.length; i++) {
        const member = staff[i];
        cardTitle.textContent = `${member.firstName + " " + member.surname}`
        cardText.textContent = `${member.role}`;
        img.src = `img/${member.image}`;
        row.appendChild(col.cloneNode(true));
    }
    
    container.appendChild(row);//Appendi la row completa al container


}

generateTemplate();

