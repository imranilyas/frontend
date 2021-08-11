import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';
import React from 'react';
import ViewBatch from '../../screens/ViewBatch';
import Navigation from '..';
import AddEditBatch from '../../screens/AddEditBatch';
import Curricula from '../../screens/Curricula';
import AddEditCurriculum from '../../screens/AddEditCurriculum';
import ClientScreen from '../../screens/Clients_Old';
import EditClient from '../../components/clients_old/EditClient';
import AddClient from '../../screens/AddClient';
import AddDemandScreen from '../../components/clients_old/AddDemandScreen';
import EditDemandScreen from '../../components/clients_old/EditDemandScreen';
import CreateTrainer from '../../screens/CreateTrainer';
import ViewEditTrainer from '../../screens/ViewEditTrainer';
import ViewClient from '../../screens/ViewClient';
//see what happens
//please import your screen and put in your screen in components-kai
const Stack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name='Main' component={Navigation} />
      <Stack.Screen name='ViewBatch' component={ViewBatch} />
      <Stack.Screen name='AddEditBatch' component={AddEditBatch} />
      <Stack.Screen
        name='AddTrainer'
        component={CreateTrainer}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name='ViewEditTrainer'
        component={ViewEditTrainer}
        options={{ headerShown: true }}
      />
      {/** add your view/addedit screens here */}
      <Stack.Screen name='Curricula' component={Curricula} />
      <Stack.Screen name='AddEditCurriculum' component={AddEditCurriculum} />
      <Stack.Screen name='ViewClient' component={ViewClient} />
      <Stack.Screen name='AddClient' component={AddClient} />
      {/* <Stack.Screen name='Clients' component={ClientScreen} />
      <Stack.Screen name='EditClient' component={EditClient} />
      <Stack.Screen name='AddClient' component={AddClient} />
      <Stack.Screen name='AddDemand' component={AddDemandScreen} />
      <Stack.Screen name='EditDemand' component={EditDemandScreen} /> */}
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
