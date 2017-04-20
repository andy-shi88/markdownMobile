import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  },
  conversation: {
    flex: 5,
  },
  messageList: {

  },
  messageBoxContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  messageBoxUser: {
    flex: 1,
    backgroundColor: '#29c43d',
    padding: 20,
    marginLeft: 10,
    marginRight: 40,
    marginTop: 20,
    borderRadius: 8,
    width: 50,
  },
  messageBoxRespond: {
    flex: 1,
    backgroundColor: '#1e9ea0',
    padding: 20,
    marginRight: 10,
    marginLeft: 40,
    marginTop: 20,
    borderRadius: 8,
    width: 300,
  },
  messageText: {
    color: "#ffffff",
    flex: 1
  },
  inputController: {
    flex: 1,
  },
  messageInput: {
    borderRadius: 5,
  },
  buttonSend: {
    flex: 1,
    marginBottom: 0
  }
});

export default styles;
