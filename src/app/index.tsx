import {View, Text} from "react-native"
export default function Index () {
    return (
        <View>
            <Text>
                Hello world!
            </Text>
        </View>

    )
    class Carro {
        private marca: string;
        private modelo: string;
        constructor(marca: string, modelo: string){
            this.marca= marca; //atributo protegido
            this.modelo= modelo; //atributo protegido

        }
        mostrarInfo() {
            return 'Carro: $ {this.marca} - $ {this.modelo}';
        }
        setMarca(marca: string){
            this.marca=marca;
        }
        setModelo(modelo: string){
            this.modelo=modelo;
        }
    

    }
 
class CarroEletrico extends Carro {
    private autonomia: number;
constructor (marca: string,modelo:string,autonomia:number){
    super(marca,modelo);
    this.autonomia=autonomia; //atributo específico da classe carro elétrico

}
mostrarInfo (){
    return '$ {super.mostrarInfo()} - Autonomia: $ {this.autonomia} km';
}
}
const meuCarro = new Carro ("Toyota", "Corolla");
console.log(meuCarro.mostrarInfo());

const meuCarroEletrico = new CarroEletrico ("Tesla", "Model S", 600)
console.log (meuCarroEletrico.mostrarInfo());
 } 