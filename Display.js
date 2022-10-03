class Display{
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.tipoOperacion = undefined;
        this.calculator =  new Calculadora();
        this.valorActual = " ";
        this.valorAnterior = " ";
        this.signos = {
            sumar: "+",
            dividir: "%",
            multiplicar: "x",
            restar: "-",
        }
    }

    DeleteNumber(){
        this.valorActual =  this.valorActual.toString().slice(0,-1);
        this.Imprimir();
    }

    DeleteAll(){
        this.valorActual = "";
        this.valorAnterior = "";
        this.tipoOperacion = undefined;
        this.Imprimir();
    }

    AddNumber(numero){
        if (numero === "." && this.valorActual.includes(".")) return;
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.Imprimir();
        
        
    }

    Imprimir() {
        
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ""}`;
            
        localStorage.setItem("traer", JSON.stringify(this.valorAnterior))
        
        
        
        
        
        
        
    }

    computar(tipo) {
        this.tipoOperacion !== "igual" && this.Proceso();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = "";
        
        this.Imprimir();


    }

    Proceso() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterior)) return;

        this.valorActual = this.calculator[this.tipoOperacion](valorAnterior, valorActual);
    }

    guardar(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if (valorAnterior == " ") {
            localStorage.getItem("traer")
            this.Imprimir();
        }
    }

    

    

    

    
}

