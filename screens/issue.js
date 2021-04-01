import React from 'react'
import {View,Text, TextInput, TouchableOpacity} from 'react-native'
export default class IssueScreen extends React.Component{

    constructor(){
      super()
      this.state={
        hasCameraPermissions:null,
        scanned:false,
        buttonState:'normal',
        scannedData:'',
      }
    }
    cameraPermission(){
      const{status}=Permissions.askAsync(Permissions.CAMERA)
      this.setState({
        hasCameraPermissions:status==="granted",
        buttonState:'clicked',
        scanned:false
      })
    }
    handledBarcodeScanned=({type,data})=>{
      this.setState({
        scanned:true,
        scannedData:data,
        buttonState:'normal'
      })
    }
    render(){
      if(this.state.buttonState==="clicked"&&this.state.hasCameraPermissions===true){
        return(
          <BarCodeScanner onBarCodeScanned={scanned?undefined:this.handledBarcodeScanned}></BarCodeScanner>
        )
      }
      else if(buttonState==='normal'){
      return(
          <View>
            <TextInput></TextInput>
            <TouchableOpacity onPress={this.cameraPermission}><Text>Scan</Text></TouchableOpacity>
            <TextInput></TextInput>
            <TouchableOpacity><Text>Scan</Text></TouchableOpacity>
          </View>
      )
      }
    }
}