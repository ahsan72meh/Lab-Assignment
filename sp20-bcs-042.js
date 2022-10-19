// // Ahsan Mehmood SP20-bcs-042

// Question 1 Answer

// import React from 'react';
// import { SectionList, StyleSheet, Text, View } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 14,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })

// const SectionListBasics = () => {
//     return (
//       <View style={styles.container}>
//         <SectionList
//           sections={[
//             {title: 'Name which start from (A)', data: ['Azan', 'Anam', 'Anaya', 'Adeel', 'Ahmad']},
//             {title: 'Name which start from (K)', data: ['Kelsen', 'Kumar Sangakara']},
//             {title: 'Name which start from (S)', data: ['Shakeel', 'Subhan', 'Sujan']},
            
            
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//           renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//           keyExtractor={(item, index) => `basicListEntry-${item.title}`}
//         />
//       </View>
//     );
// }

// export default SectionListBasics;


// Question 2 Answer
import {
  StyleSheet, View, 

} from 'react-native';



export default function App() {

  return (


    <View style={styles.container}>

      <View style={styles.Box}
      >
        <View style={styles.black} />
        <View style={styles.white} />
        

        <View style={styles.black} />
        <View style={styles.white} />
        

        <View style={styles.black} />
        <View style={styles.white} />
        

        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.white} />
        <View style={styles.black} />
        
        <View style={styles.white} />
        <View style={styles.black} />
        
        <View style={styles.white} />
        <View style={styles.black} />
        
        <View style={styles.white} />
        <View style={styles.black} />
        
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        
        <View style={styles.black} />
        <View style={styles.white} />
        
        <View style={styles.black} />
        <View style={styles.white} />
        
        <View style={styles.white} />
        <View style={styles.black} />
        
        <View style={styles.white} />
        <View style={styles.black} />
        
        <View style={styles.white} />
        <View style={styles.black} />
        
        <View style={styles.white} />
        <View style={styles.black} />


        <View style={styles.black} />
        <View style={styles.white} />
        

        <View style={styles.black} />
        <View style={styles.white} />
        

        <View style={styles.black} />
        <View style={styles.white} />
        

        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.white} />
        <View style={styles.black} />
        
        <View style={styles.white} />
        <View style={styles.black} />
        
        <View style={styles.white} />
        <View style={styles.black} />
        
        <View style={styles.white} />
        <View style={styles.black} />
        
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        
        <View style={styles.black} />
        <View style={styles.white} />
        
        <View style={styles.black} />
        <View style={styles.white} />
        
        <View style={styles.white} />
        <View style={styles.black} />
        
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        
        <View style={styles.white} />
        <View style={styles.black} />
        


        


        
        
        
      </View>
    

</View>

  );}




const styles = StyleSheet.create({
  container:{

    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"red"
  

  },
  Box:{
    height:480,
    width:480,
    backgroundColor:"Red",
    borderStyle:'solid',
    flexDirection:"row",
    flexWrap:"wrap",
    alignContent:"flex-start",
    
  },
  black:{
    backgroundColor:"black",
    width:60,
    height:60,
  },
  white:{
    backgroundColor:"white",
    width:60,
    height:60,
   
  }
});