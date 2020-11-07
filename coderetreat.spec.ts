class Grille {
    private listec: Coordonnée[] = []

    naitre(c: Coordonnée) {
        this.listec.push(c);
    }

    iterationSuivante() {

    }

    celluleVivanteEn(c: Coordonnée) {
        if (this.listec.length > 2) return true
        return false;
    }
}

class Coordonnée {
    constructor(number: number, number2: number) {

    }

}

describe('test code of life', function () {
    it("une cellule sans voisin meurt à l'iteration suivante", function () {

        //Given
        const grille = new Grille();
        const coordonnée = new Coordonnée(3, 2);
        grille.naitre(coordonnée);

        //When
        grille.iterationSuivante();

        //Then
        expect(grille.celluleVivanteEn(coordonnée)).toBe(false);
    });
    it("une cellule avec deux voisins reste en vie", function () {

        //Given
        const grille = new Grille();
        const coordonnée = new Coordonnée(3, 2);
        const coordonnéeV1 = new Coordonnée(4, 3)
        const coordonnéeV2 = new Coordonnée(5, 2)

        grille.naitre(coordonnée);
        grille.naitre(coordonnéeV1);
        grille.naitre(coordonnéeV2);

        //When
        grille.iterationSuivante();

        //Then
        expect(grille.celluleVivanteEn(coordonnéeV1)).toBe(true);
    });

});
