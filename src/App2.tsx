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
import {useModalManager} from "./useModalManager.hook";

const modalNames = {
  modal1: 'modal1',
  modal2: 'modal2'
}

function App2(): React.JSX.Element {
  const [modal1Visible, setModal1Visible] = useState(false)
  const [modal2Visible, setModal2Visible] = useState(false)

  const closeModal1 = () => setModal1Visible(false)
  const openModal1 = () => setModal1Visible(true)

  const closeModal2 = () => setModal2Visible(false)
  const openModal2 = () => setModal2Visible(true)

  const [open1, close1, dismiss1] = useModalManager(modalNames.modal1, openModal1, closeModal1)
  const [open2, close2, dismiss2] = useModalManager(modalNames.modal2, openModal2, closeModal2)

  const onButton1Press = () => {
    open1()
  }

  const onButton2Press = () => {
    open2()
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

      <Modal
        onDismiss={dismiss1} transparent presentationStyle={"overFullScreen"} visible={modal1Visible} animationType={'slide'} >
        <View style={styles.modalView}>
          <Text>Modal 1</Text>
          <Pressable onPress={onButton2Press} style={styles.button}>
            <Text>Open modal 2</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={close1}>
            <Text>Close this modal</Text>
          </Pressable>
        </View>
      </Modal>

      <Modal onDismiss={dismiss2} transparent presentationStyle={"overFullScreen"} visible={modal2Visible} animationType={'slide'}>
        <View style={styles.modalView}>
          <Text>Modal 2</Text>
          <Pressable onPress={onButton1Press} style={styles.button}>
            <Text>Open modal 1</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={close2}>
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

export default App2;
