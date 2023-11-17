const calc = {
    symbols: ['+','-','*','/','='],

    memory:[],
    screenMemory: '',

    key:function(numb){
        document.querySelector('.screen').innerHTML +=numb;
        this.screenMemory += ''+numb;
        console.log("Valor de memoria de pantalla:", this.screenMemory)
    },

    keySymbols: function(symbol){
        document.querySelector('.screen').innerHTML += symbol;
        this.memory.push(this.screenMemory);
        this.memory.push(symbol);
        this.screenMemory = '';
        console.log("Memoria de pantalla actual", this.screenMemory);
    },

    borrar: function(){
        this.memory = [];
        this.screenMemory= '';
        document.querySelector('.screen').innerHTML = "";
    },

    resultado: function(){
        this.memory.push(this.screenMemory);

        for(i=0; i<this.memory.length; i++){
            if(this.memory[i]=== this.symbols[0]){
                let res = Number(this.memory[i-1]) + Number(this.memory[i+1])
                document.querySelector('.screen').innerHTML = res;
                this.screenMemory= res;
                this.memory.push(res);
                console.log(this.memory);

            }else if(this.memory[i]=== this.symbols[1]){
                let res = Number(this.memory[i-1]) - Number(this.memory[i+1])
                document.querySelector('.screen').innerHTML = res;
                this.screenMemory= res;
                this.memory.push(res);
                console.log(this.memory);

            }else if(this.memory[i]=== this.symbols[2]){
                let res = Number(this.memory[i-1]) * Number(this.memory[i+1])
                document.querySelector('.screen').innerHTML = res;
                this.screenMemory= res;
                this.memory.push(res);
                console.log(this.memory);

            }else if(this.memory[i]=== this.symbols[3]){
                let res = Number(this.memory[i-1]) / Number(this.memory[i+1])
                document.querySelector('.screen').innerHTML = res;
                this.screenMemory= res;
                this.memory.push(res);
                console.log(this.memory);

            }
        }


    }

}