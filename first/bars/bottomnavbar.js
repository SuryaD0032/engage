import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../mainpages/HomeScreen";
import CreateScreen from "../mainpages/createScreen";
import FavScreen from "../mainpages/FavScreen";
import PremiumScreen from "../mainpages/premiumScreen";
import NewScreen from "../mainpages/newScreen";
import { View, TouchableOpacity ,Image, Button} from "react-native";
import MyPage from "../pages/page";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity onPress={onPress} style={{top: -30,justifyContent:'center', alignItems:'center'}}>
  <View style={{height:60,width:60,borderRadius:30,backgroundColor:'#0A0A67'}}>
  {children}
  </View>
  </TouchableOpacity>
);

const TabScreen = ({ focused, icon }) => {
  const iconSource = focused ? icon.focused : icon.default;
  return <Image source={iconSource} style={{ width: 24, height: 24 }} />;
};


const Tabs = ({navigationState,handlecreate}) => {
  const focusedTab = navigationState.routes[navigationState.index].name;

    return(
        <Tab.Navigator  screenOptions={{  tabBarStyle: {  position: 'absolute',  borderTopLeftRadius:20, borderTopRightRadius:20, height: 61,   backgroundColor: '#E1E8ED', },    tabBarShowLabel: false,  }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false,tabBarIcon: ({ focused }) => {
        const icon = {
          default: require('../assets/icons/home.png'),
          focused: require('../assets/icons/homebing.png'),
        };
        return <TabScreen focused={focused} icon={icon} />;
      },}}
      />
            <Tab.Screen name="new" component={NewScreen}options={{headerShown: false,tabBarIcon: ({ focused }) => {
        const icon = {
          default: require('../assets/icons/new.png'),
          focused: require('../assets/icons/newbing.png'),
        };
        return <TabScreen focused={focused} icon={icon} />;
      },}}/>
            <Tab.Screen name="page" component={MyPage}options={{headerShown: false,
            tabBarIcon: ({focused}) => (
              <Image source={require('../assets/icons/plus.png')}
                resizeMode="contain" 
                style={{
                  height: 35,
                  width: 35,
                  tintColor:'white'
                }}
              />
            ),
            tabBarButton: (props) => (
            <CustomTabBarButton {...props} />)
            }} />
            <Tab.Screen name="Fav" component={FavScreen}options={{headerShown: false,tabBarIcon: ({ focused }) => {
        const icon = {
          default: require('../assets/icons/favorites.png'),
          focused: require('../assets/icons/favoritesbing.png'),
        };
        return <TabScreen focused={focused} icon={icon} />;
      },}}/>
            <Tab.Screen name="premium" component={PremiumScreen}options={{headerShown: false,tabBarIcon: ({ focused }) => {
        const icon = {
          default: require('../assets/icons/chat.png'),
          focused: require('../assets/icons/chatbing.png'),
        };
        return <TabScreen focused={focused} icon={icon} />;
      },}}/>
        </Tab.Navigator>

    );
}

export default Tabs;