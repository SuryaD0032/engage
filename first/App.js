import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import LoginScreen from './mainpages/loginscreen';
import HomeScreen from './mainpages/HomeScreen';
import indexScreen from './mainpages/indexScreen';
import Slideshow from './bars/slideshow';
import CreateScreen from './mainpages/createScreen';
import Editprof from './userpages/editprofile';
import ProfileScreen from './mainpages/ProfileScreen';
import otherProf from './userpages/otherprofile';
import notification from './userpages/notification';
import SpecialCard from './cards&buttons/SpecialCard';
import SportsCard from './cards&buttons/SportsCard';
import EnterCard from './cards&buttons/EnterCard';
import Tabs from './bars/bottomnavbar';
import Search from './bars/search';
import PostScreen from './postpages/PostScreen';
import OtherProf1 from './userpages/otherprofile1';
import SavedScreen from './postpages/SavedScreen';
import PostedScreen from './postpages/YoursScreen';
import { Provider } from 'react-redux';
import store from './redux/store';
import Request from './postpages/RequestPage';
import Payment from './postpages/payment';
import DropdownMenu from './pages/menu';
import About from './pages/about';
import Privacy from './pages/privacy';
import Contactus from './pages/contactus';
import Language from './pages/languages';
import MyPage from './pages/page';


const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-BlackItalic': require('./assets/fonts/Montserrat-BlackItalic.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-BoldItalic': require('./assets/fonts/Montserrat-BoldItalic.ttf'),
    'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
    'Montserrat-ExtraBoldItalic': require('./assets/fonts/Montserrat-ExtraBoldItalic.ttf'),
    'Montserrat-ExtraLight': require('./assets/fonts/Montserrat-ExtraLight.ttf'),
    'Montserrat-ExtraLightItalic': require('./assets/fonts/Montserrat-ExtraLightItalic.ttf'),
    'Montserrat-Italic': require('./assets/fonts/Montserrat-Italic.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-LightItalic': require('./assets/fonts/Montserrat-LightItalic.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-SemiBoldItalic': require('./assets/fonts/Montserrat-SemiBoldItalic.ttf'),
    'Montserrat-ThinItalic': require('./assets/fonts/Montserrat-ThinItalic.ttf'),
    'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-MediumItalic': require('./assets/fonts/Montserrat-MediumItalic.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="index" component={indexScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="create" component={CreateScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Editprof" component={Editprof} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="other" component={otherProf} options={{ headerShown: false }}/>
        <Stack.Screen name="notification" component={notification} options={{ headerShown: false }}/>
        <Stack.Screen name="enter" component={EnterCard} options={{ headerShown: false }}/>
        <Stack.Screen name="special" component={SpecialCard} options={{ headerShown: false }}/>
        <Stack.Screen name="sports" component={SportsCard} options={{ headerShown: false }}/>
        <Stack.Screen name="tabs" component={Tabs} options={{ headerShown: false }}/>
        <Stack.Screen name="post" component={PostScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="other1" component={OtherProf1} options={{ headerShown: false }}/>
        <Stack.Screen name="saved" component={SavedScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="posted" component={PostedScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Request" component={Request} options={{ headerShown: false }}/>
        <Stack.Screen name="Pay" component={Payment} options={{ headerShown: false }}/>
        <Stack.Screen name="search" component={Search} options={{ headerShown: false }}/>
        <Stack.Screen name="menu" component={DropdownMenu} options={{ headerShown: false }}/>
        <Stack.Screen name="about" component={About} options={{ headerShown: false }}/>
        <Stack.Screen name="contact" component={Contactus} options={{ headerShown: false }}/>
        <Stack.Screen name="language" component={Language} options={{ headerShown: false }}/>
        <Stack.Screen name="privacy" component={Privacy} options={{ headerShown: false }}/>
        <Stack.Screen name="page" component={MyPage} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;


