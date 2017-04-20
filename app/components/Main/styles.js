import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor:'#E91E63',
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:10,
    borderBottomColor:'#ddd'
  },
  headerText: {
    color:'white',
    fontSize:18,
    padding:26
  },
  scrollContainer:{
    flex:1,
    marginBottom:100
  },
  footer:{
    position:'absolute',
    alignItems:'center',
    right:0,
    left:0,
    bottom:0
  },
  addButton:{
    backgroundColor:"#E91E63",
    height:70,
    width:70,
    borderRadius:50,
    borderColor:'#ccc',
    alignItems:'center',
    justifyContent:'center',
    elevation:8,
    marginBottom:-35,
    zIndex:10
  },
  addButtonText:{
    color:'#fff',
    fontSize:20
  },
  textInput:{
    alignSelf:'stretch',
    color:'#fff',
    padding:20,
    paddingTop:46,
    backgroundColor:'#252525',
    borderTopWidth:2,
    borderTopColor:'#ededed',
    fontStyle:'italic'
  }
});

export default styles;
