import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './pages/HomeScreen';
import BasicInfo from './pages/disease/BasicInfo';
import HightBloodPressure from './pages/disease/HightBloodPressure';
import Diabetes from './pages/disease/Diabetes';
import GFR from './pages/disease/GFR';
import Swelling from './pages/disease/Swelling';
import ChooseKnowledge from './pages/ChooseKnowledge';
import DiabetesKnowledge from './pages/knowledge/DiabetesKnowledge';
import HbpKnowledge from './pages/knowledge/HbpKnowledge';
import KidneyKnowledge from './pages/knowledge/KidneyKnowledge';


const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  BasicInfo: { screen: BasicInfo },
  HightBloodPressure: { screen: HightBloodPressure },
  Diabetes: { screen: Diabetes },
  GFR: { screen: GFR },
  Swelling: { screen: Swelling },
  ChooseKnowledge: { screen: ChooseKnowledge },
  DiabetesKnowledge: { screen: DiabetesKnowledge },
  HbpKnowledge: { screen: HbpKnowledge },
  KidneyKnowledge: { screen: KidneyKnowledge },
});

const App = createAppContainer(AppNavigator);

export default App;