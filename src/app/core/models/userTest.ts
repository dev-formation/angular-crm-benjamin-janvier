export class User {
    email: string;
    prenom: string;
    nom: string;
    id: number;
    constructor(email: string, prenom: string, nom: string, id: number) {
        this.email = email;
        this.prenom = prenom;
        this.nom = nom;
        this.id = id;
    }
}