let autos = require('./autos');
let concesionaria = {
    autos: autos,
 
    buscarAuto: function(patente) {
        for (let i = 0; i < this.autos.length; i++) {
            if (this.autos[i].patente == patente) {
                return this.autos[i];
            }
        }
        return null;
    },

    venderAuto: function(patente) {
        let autoBuscado = this.buscarAuto(patente)
        if (autoBuscado != null && autoBuscado.vendido ==          false) {
            return autoBuscado.vendido = true;
        }
        return null;
    },
    autosParaLaVenta: function() {
        let autosDisponibles = this.autos.filter( function(estadoDeAuto) {
            return estadoDeAuto.vendido == false;
        });
        return autosDisponibles;
     }
}