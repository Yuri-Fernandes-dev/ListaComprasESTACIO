import { View, Text, TextInput, Pressable, FlatList } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";

export default function Home() {
  const [lista, setLista] = useState([]); 
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(""); 

  // Adicionar item
  function adicionarItem() {
    if (nome.trim() === "" || quantidade.trim() === "") return;

    const novoItem = {
        
      nome: nome,
      quantidade: quantidade,
    };

    setLista([...lista, novoItem]); // adiciona sem alterar o array original
    setNome(""); // limpa inputs
    setQuantidade("");
  }

  // Remover item
  function removerItem(id) {
    const novaLista = lista.filter((item) => item.id !== id);
    setLista(novaLista);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>

      {/* Inputs */}
      <View style={styles.inputs}>
        <TextInput
          style={styles.text1}
          placeholder="Nome da mercadoria"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.text2}
          placeholder="Qtd"
          value={quantidade}
          onChangeText={setQuantidade}
          keyboardType="numeric"
        />
      </View>

      {/* Botão Adicionar */}
      <Pressable style={styles.btn} onPress={adicionarItem}>
        <Text style={styles.btnText}>Adicionar</Text>
      </Pressable>

      {/* Lista de Compras */}
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

            
          <View style={styles.item}>
            <Text style={styles.itemText}>
              {item.nome} - Qtd: {item.quantidade}
            </Text>
            <Pressable
              style={styles.btnRemover}
              onPress={() => removerItem(item.id)}
            >
              <Text style={styles.btnText}>Remover</Text>
            </Pressable>
          </View>
        )}
        style={styles.containerLista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 10,
  },

  titulo: {
    textAlign: "center",
    marginTop: 70,
    fontWeight: "bold",
    fontSize: 30,
    color: '#003153'
  },

  inputs: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  text1: {
    backgroundColor: "#fff",
    padding: 10,
    width: 250,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },

  text2: {
    backgroundColor: "#fff",
    marginLeft: 10,
    width: 80,
    paddingLeft: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },

  btn: {
    backgroundColor: "#168ed3",
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  containerLista: {
    backgroundColor: "#fff",
    marginTop: 20,
    borderRadius: 5,
    borderTopColor: "#168ed3",
    borderTopWidth: 1,
    borderLeftColor: "#168ed3",
    borderLeftWidth: 1,
    borderRightColor: "#168ed3",
    borderRightWidth: 1,
    padding: 10,
    maxHeight: 400, // opcional para rolar
  },

  item: {
    backgroundColor: '#ADD8E6', 
    padding: 10,
    borderRadius: 5,
    
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  itemText: {
    fontSize: 16,
  
    fontWeight: 'bold'

  },

  btnRemover: {
    backgroundColor: "#d32f2f",
    padding: 5,
    borderRadius: 5,
  },
});