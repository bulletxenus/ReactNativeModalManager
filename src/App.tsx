/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Modal, Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import modalManager from './ModalManagerV1'


function App(): React.JSX.Element {
  const [modal1Visible, setModal1Visible] = useState(false)
  const [modal2Visible, setModal2Visible] = useState(false)

  const closeModal1 = () => setModal1Visible(false)
  const openModal1 = () => setModal1Visible(true)

  const closeModal2 = () => setModal2Visible(false)
  const openModal2 = () => setModal2Visible(true)

  const onButton1Press = () => {
    modalManager.open({open: openModal1, close: closeModal1})
  }

  const onButton2Press = () => {
    modalManager.open({open: openModal2, close: closeModal2})
  }


  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.screenView}>
          <Text style={styles.title}>App</Text>
          <Pressable onPress={onButton1Press} style={styles.button}>
            <Text>Open modal 1</Text>
          </Pressable>
          <Pressable onPress={onButton2Press} style={styles.button}>
            <Text>Open modal 2</Text>
          </Pressable>
        </View>

        <Modal transparent presentationStyle={"overFullScreen"} visible={modal1Visible} animationType={'slide'} >
          <View style={styles.modalView}>
            <Text>Modal 1</Text>
            <Pressable onPress={onButton2Press} style={styles.button}>
              <Text>Open modal 2</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => manager.closeModal()}>
              <Text>Close this modal</Text>
            </Pressable>
          </View>
        </Modal>

        <Modal transparent presentationStyle={"overFullScreen"} visible={modal2Visible} animationType={'slide'}>
          <View style={styles.modalView}>
            <Text>Modal 2</Text>
            <Pressable onPress={onButton1Press} style={styles.button}>
              <Text>Open modal 1</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => manager.closeModal()}>
              <Text>Close this modal</Text>
            </Pressable>
          </View>
        </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 20,
    borderWidth: 1,
    borderColor: 'black'
  },
  screenView: {
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    margin: 20,
    marginTop: 150,
    height: 500,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 30
  },
  button: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  },
});

export default App;


