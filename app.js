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
     },

     autosNuevos: function() {
        let autosDisponibles = this.autosParaLaVenta()
        let autos0km = autosDisponibles.filter(function(autos) {
           return autos.km < 100;
        });
        return autos0km;
     },

     listaDeVentas: function() {
        let autosVendidos = this.autos.filter(function(autos) {
           return autos.vendido == true;
        });
        let ganancias = [];
        autosVendidos.forEach(function(autos) {
           ganancias.push(autos.precio);
        })
        return ganancias;
     },

     totalDeVentas: function() {
        let ganancias = this.listaDeVentas();
        let gananciasTotales = ganancias.reduce(function(valorAnterior, valorActual) {
           return valorAnterior + valorActual;
        }, 0);
        return gananciasTotales;
     },
     
     puedeComprar: function(auto, persona) {
        let puedeOno = auto.precio <= persona.capacidadDePagoTotal && (auto.precio / auto.cuotas) <= persona.capacidadDePagoEnCuotas ? true : false;
        return puedeOno;
     },

     autosQuePuedeComprar: function(persona) {
      let autosDisponibles = this.autosParaLaVenta();
      let autosComprables = autosDisponibles.filter((auto) => {
         return this.puedeComprar(auto, persona) == true;
      });
      return autosComprables;
   }
}
module.exports = concesionaria;