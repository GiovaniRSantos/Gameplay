import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { style } from './style';

export function SignIn() {
    //criando vetor que recebe useState, entre '' define o valor inicial do vetor.
    //Entre [], primeiramente vem o nome do estado, depois qual a funcao que atualiza o estado (setText) nesse caso.
    const [text, setText] = useState('');
    return (
        <View style={style.container}>
            <Text>Digite seu nome</Text>
            <TextInput style={style.input}
                //onChangeText funcao que observa e passa o valor quando o estado mudar
                onChangeText={setText}
            />
            <Text>
                Voce digitou: { text}
            </Text>
        </View>
    );
}