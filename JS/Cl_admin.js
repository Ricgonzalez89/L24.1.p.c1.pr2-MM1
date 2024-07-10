export default class Cl_admin{
    constructor(){
        this.contPartido = 0;
        this.acumVictoria = 0;
    }

    procesarJuego(j){
        //Contar partidos
        this.contPartido++;

        //Acumular victorias
        if (j.resultado === 1)
            this.acumVictoria++;
    }

    calcPorcentajeVictoria(){
        if (this.contPartido > 0)
            return (this.acumVictoria / this.contPartido) * 100;
        else
            return 0.0;
    }
}