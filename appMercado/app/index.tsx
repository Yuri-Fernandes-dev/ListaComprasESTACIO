import { View, Text, TextInput, Button, Pressable } from "react-native";
import { StyleSheet } from "react-native";




export default function Home(){
    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>Lista de Compras</Text>


            {/* Inputs */}

            <View style={styles.inputs}>
                <TextInput style={styles.text1} placeholder="Nome da mercadoria"></TextInput>
                <TextInput style={styles.text2} placeholder="Qtd"></TextInput>              

            </View>

            {/* Botão */}

            <Pressable style={styles.btn}>
                <Text style={styles.btnText}> Adicionar</Text>
            </Pressable>

            {/* Lista de compras */}

            <View style={styles.containerLista}>

            </View>
            
            
        </View>   
        
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 10,
    },

    titulo: {
        textAlign: 'center',
        marginTop: 70,
        fontWeight: 'bold',
        fontSize: 30,
    },


    inputs: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 20,
        
        
    },
    text1: {
        
        backgroundColor: '#fff',
        padding: 10,
        width: 250,
        borderRadius: 5,
        boxShadow: '1px 1px 2px #168ed3ff',
        

        
    },
    text2: {
        backgroundColor: '#fff',
        marginLeft: 10,
        width: 80,
        paddingLeft: 10,
        borderRadius: 5,
        
        boxShadow: '1px 1px 2px #168ed3ff',
    },

    btn: {
        backgroundColor: '#168ed3ff',
       
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        
        
       
        
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },


    containerLista: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20,
        borderRadius: 5,
        borderTopColor: '#168ed3ff',
        borderTopWidth: 1,
        borderLeftColor: '#168ed3ff',
        borderLeftWidth: 1,
        borderRightColor: '#168ed3ff',
        
      
       
        boxShadow: '2px 2px 2px #168ed3ff',
        
    }

    
})