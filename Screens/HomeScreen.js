import React, {useState} from "react";
import {ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Colors} from '../Colors';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets(); 
  const [connected, setConnected] = useState(false)
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState();


  const sendTextToPanel = () => {
    console.log(text)
  }

  const connectToPanel = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setConnected(true)
    },2000)
  }

  return(
    <View style={{paddingTop: top + 10, paddingHorizontal: 10, flex: 1, backgroundColor: Colors.dark900 }}>
      <Text style={style.text}>KPanel App</Text>

      <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{width: '90%', marginTop: 20, opacity: connected && !loading? 1 : .5}}>
          <TextInput 
            style={style.textInput} 
            onChangeText={setText}
            value={text}
            editable={connected && !loading}
            multiline={true}  
            placeholder='Envía texto al KPanel'
            placeholderTextColor='#757575'
          /> 

          <TouchableOpacity 
            style={style.button}
            disabled={!text}
            onPress={sendTextToPanel}
          >
            <Text style={{fontWeight: '600'}}>Enviar</Text>
          </TouchableOpacity>
        </View>

        {
          <TouchableOpacity 
            style={style.button_2}
            onPress={connectToPanel}
            disabled={loading}
          >
            {
              loading ? (
                <ActivityIndicator />
              ) : (
                <Text style={{fontWeight: '600'}}>Conectar KPanel</Text>
              )
            }
          </TouchableOpacity>
        }
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
  textInput: {
    height: 90,
    width: '100%',
    backgroundColor: '#424242',
    color: 'white',
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
    textAlignVertical: 'top',
    paddingHorizontal: 9
  },
  button:{
    height: 40, 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%',
    backgroundColor: '#1DDECB',
    borderBottomRightRadius: 9,
    borderBottomLeftRadius: 9
  },
  button_2:{
    height: 40,
    marginTop: 50,
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '90%',
    borderRadius: 9,
    backgroundColor: '#1DDECB',
  }
})
