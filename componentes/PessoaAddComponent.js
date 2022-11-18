import { StyleSheet, Text, View } from 'react-native'
// useState é um hook do React 
import React, { useState} from 'react'
import {
    Card,
    Input
} from '@rneui/themed'
const PessoaAddComponent = () => {
  // os hooks do react, necessariamente são chamados dentro de uma função que define o componete 
  const [nome , setNome] = useState ('') 
  const [idade, setIdade] = useState ('')
  const [hobby, setHobby] = useState ('')
  return (
    //fragment 
    <>
      <Card>
        <Card.Title>Cadastro de Pessoas</Card.Title>
        <Card.Divider></Card.Divider>
        <Input
        style={ styles.textInput}
        placeholder='Digite o nome'
        leftIcon={{type: "font-awesome" , name:"user"}}/>
        <Input
        style={ styles.textInput}
        placeholder="Digite a Idade"
        leftIcon={{type :"font-awesome" , name: "info"}}/>
        <Input
        style={styles.textInput}
        placeholder="Digite o Hobby"
        leftIcon={{type :"font-awesome" , name: "heart"}}/>
      
      <Button
      title="Ok"
      buttonStyle={styles.button}/>
      
      </Card>
    </>
  )
}

export default PessoaAddComponent

const styles = StyleSheet.create({
    button:{
        borderRadius: 8
    },
    textInput:{
        textAlign: 'center',
        margin: 0,
        padding: 0
    }
})