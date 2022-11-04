import React from "react";
import { View, Button, Text, StyleSheet, TextInput } from 'react-native'
class Dataform extends React.Component {
  constructor() {
    super();
    this.state = {
      Name1: "Ahsan Mehmood",
      phone1: "11",
      Name2: "Fatima M",
      phone2: "22",
      Name3: "Kashif Nabeel",
      phone3: "33",
      phonetex:"",
      nametex:"",
      messg:"",
    }
  }
  Updatename(){
 var namx= this.state.nametex
 var phox=this.state.phonetex
 if(this.state.phone1===phox){
 this.setState({
Name1: namx,
messg: ""
 }) 
 }
 else if(this.state.phone2===phox){
  this.setState({
 Name2: namx,
 messg: ""
  })}
  else if(this.state.phone3===phox){
    this.setState({
   Name3: namx,
   messg: ""
    })
  }
  else{
  this.setState({
   messg: this.state.messg + "Enter No from the stored one"
    })
  }
}
  render() {
    return (
      <View style={styles.maincontainer}>
 <View style={{paddingTop:"15%"}}>
  <Text style={{fontSize:18, fontWeight:"bold", marginLeft:"4%", marginBottom:15 }}>Updation Form</Text>
        <Text style={{ color:"white", borderWidth: 1, marginLeft:"4%", width: 120, marginBottom: 4, marginTop: 4 }}>{this.state.Name1}
        </Text>
        <Text style={{ color:"white", borderWidth: 1,marginLeft:"4%", width: 120, marginBottom: 4, marginTop: 4 }}>{this.state.Name2}
        </Text>
        <Text style={{ color:"white", borderWidth: 1, marginLeft:"4%", width: 120, marginBottom: 4, marginTop: 4 }}>{this.state.Name3}
        </Text>
        <Text>{this.state.messg}</Text>
        <View>
          <TextInput style={styles.inputstyle} onChangeText={(e)=>{this.setState({nametex:e})}} autoCapatilize="none" autoCorrect={false}></TextInput>
          <TextInput style={styles.inputstyle} onChangeText={(c)=>{this.setState({phonetex:c})}} autoCapatilize="none" autoCorrect={false}></TextInput>
        <Button title="Edit" onPress={()=>{this.Updatename()}} style={{width:25, borderColor:1}}></Button>
        </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  maincontainer:
  {
    flex:1,
        alignContent: "center",
        borderWidth:1,
        borderColor: "rgba(0,0,0,0.3)", 
        alignItems: "center",
        height: "110%",
        paddingHorizontal: 30,
        paddingTop: 30,
        backgroundColor: "rgb(112, 246, 181)",
  },
  inputstyle: {
    borderWidth: 1,
    width: 150,
    margintop: 4,
    marginBottom: 4,
    color:"white",
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
   // fontFamily: "regular",
    fontSize: 18,
  },
//   LoginButton:{
//     borderWidth: 1,
//     width:"25ch",
//     marginTop: 10,
//     marginBottom: 5,
//     paddingHorizontal:15,
//     paddingVertical: 7,
//     backgroundColor: "rgb(0, 139, 255)"

// }
})

export default Dataform;