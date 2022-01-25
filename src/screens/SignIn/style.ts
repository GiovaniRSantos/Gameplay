import { StyleSheet } from 'react-native';

//criando estilizacao
export const style = StyleSheet.create({
        //criando componente container
    container: {
        flex: 1,
        //justifyContent centraliza no meio da tela verticalmente
        justifyContent: 'center',
        //alignItems centraliza no meio da tela horizontalmente
        alignItems: 'center'
    },
    //criando componente input
    input: {
        //height - altura
        height: 50,
        //width - largura
        width: 200,
        //borderBottomWidth - borda de 2 pixels
        borderBottomWidth: 2
    }
});