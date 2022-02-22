import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CircularProgress from 'react-native-circular-progress-indicator';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize: 28, fontWeight: 50}}>Attendance Interface</Text>

      <View style={{top: 30, fontSize: 20, backgroundColor: 'orange'}}>
      <Text style={{fontSize: 24, fontWeight: 50}}>Students</Text> 
      </View >

      <View style={{top: 80}}>
      <Button
        title="Student 1"
        onPress={() => navigation.navigate('Student Profile')}
      />
      </View>

      <View style={{top: 80, fontSize: 20}}>
      <Button
        title="Student 2"
        onPress={() => navigation.navigate('Student Profile')}
      />
      </View>

      <View style={{top: 80}}>
      <Button
        title="Student 3"
        onPress={() => navigation.navigate('Student Profile')}
      />
      </View>

      <View style={{top: 80}}>
      <Button
        title="Student 4"
        onPress={() => navigation.navigate('Student Profile')}
      />
      </View>

      <View style={{top: 80}}>
      <Button
        title="Student 5"
        onPress={() => navigation.navigate('Student Profile')}
      />
      </View>
      <View style= {{top: 50}}>
      </View>

    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <>
    <View style={{alignItems: 'center'}}>
      <View>
      <Button
        title="Course 1"
        onPress={() => navigation.navigate('Mark Attendance')}
      />
      </View>

      <View style={{flex: 0, alignItems: 'center', flexDirection: "row", justifyContent: 'center'}}>
      <Text style={{right: 60}}>Present</Text>
      <Text>Absent</Text>
      <Text style={{left: 60}}>Leaves</Text>
      </View>

      <View style={{flex: 0, alignItems: 'center', flexDirection: "row", justifyContent: "center"}}>
      <CircularProgress
      value={70}
      radius={50}
      textColor={'green'}
      activeStrokeColor={'green'}
      inActiveStrokeOpacity={0.2}
      inActiveStrokeWidth={20}
      activeStrokeWidth={20}
      />
      <CircularProgress
      value={20}
      radius={50}
      textColor={'red'}
      activeStrokeColor={'red'}
      inActiveStrokeOpacity={0.2}
      inActiveStrokeWidth={20}
      activeStrokeWidth={20}
      />
      <CircularProgress
      value={10}
      radius={50}
      textColor={'orange'}
      activeStrokeColor={'orange'}
      inActiveStrokeOpacity={0.2}
      inActiveStrokeWidth={20}
      activeStrokeWidth={20}
      />
      </View>
    

    <View style={{alignItems: 'center'}}>
      <View>
      <Button
        title="Course 2"
        onPress={() => navigation.navigate('Mark Attendance')}
      />
      </View>
    </View>
    <View style={{flex: 0, alignItems: 'center', flexDirection: "row", justifyContent: 'center'}}>
      <Text style={{right: 60}}>Present</Text>
      <Text>Absent</Text>
      <Text style={{left: 60}}>Leaves</Text>
      </View>

      <View style={{flex: 0, alignItems: 'center', flexDirection: "row", justifyContent: "center"}}>
      <CircularProgress
      value={75}
      radius={50}
      textColor={'green'}
      activeStrokeColor={'green'}
      inActiveStrokeOpacity={0.2}
      inActiveStrokeWidth={20}
      activeStrokeWidth={20}
      />
      <CircularProgress
      value={24}
      radius={50}
      textColor={'red'}
      activeStrokeColor={'red'}
      inActiveStrokeOpacity={0.2}
      inActiveStrokeWidth={20}
      activeStrokeWidth={20}
      />
      <CircularProgress
      value={1}
      radius={50}
      textColor={'orange'}
      activeStrokeColor={'orange'}
      inActiveStrokeOpacity={0.2}
      inActiveStrokeWidth={20}
      activeStrokeWidth={20}
      />
      </View>

    <View style={{alignItems: 'center'}}>
      <View>
      <Button
        title="Course 3"
        onPress={() => navigation.navigate('Mark Attendance')}
      />
      </View>
    </View>
    <View style={{flex: 0, alignItems: 'center', flexDirection: "row", justifyContent: 'center'}}>
      <Text style={{right: 60}}>Present</Text>
      <Text>Absent</Text>
      <Text style={{left: 60}}>Leaves</Text>
      </View>

      <View style={{flex: 0, alignItems: 'center', flexDirection: "row", justifyContent: "center"}}>
      <CircularProgress
      value={50}
      radius={50}
      textColor={'green'}
      activeStrokeColor={'green'}
      inActiveStrokeOpacity={0.2}
      inActiveStrokeWidth={20}
      activeStrokeWidth={20}
      />
      <CircularProgress
      value={15}
      radius={50}
      textColor={'red'}
      activeStrokeColor={'red'}
      inActiveStrokeOpacity={0.2}
      inActiveStrokeWidth={20}
      activeStrokeWidth={20}
      />
      <CircularProgress
      value={35}
      radius={50}
      textColor={'orange'}
      activeStrokeColor={'orange'}
      inActiveStrokeOpacity={0.2}
      inActiveStrokeWidth={20}
      activeStrokeWidth={20}
      />
      </View>

    <View style={{alignItems: 'center'}}>
      <View>
      <Button
        title="Course 4"
        onPress={() => navigation.navigate('Mark Attendance')}
      />
      </View>
    </View>
    <View style={{flex: 0, alignItems: 'center', flexDirection: "row", justifyContent: 'center'}}>
      <Text style={{right: 60}}>Present</Text>
      <Text>Absent</Text>
      <Text style={{left: 60}}>Leaves</Text>
      </View>

      <View style={{flex: 0, alignItems: 'center', flexDirection: "row", justifyContent: "center"}}>
      <CircularProgress
      value={90}
      radius={50}
      textColor={'green'}
      activeStrokeColor={'green'}
      inActiveStrokeOpacity={0.2}
      inActiveStrokeWidth={20}
      activeStrokeWidth={20}
      />
      <CircularProgress
      value={10}
      radius={50}
      textColor={'red'}
      activeStrokeColor={'red'}
      inActiveStrokeOpacity={0.2}
      inActiveStrokeWidth={20}
      activeStrokeWidth={20}
      />
      <CircularProgress
      value={0}
      radius={50}
      textColor={'orange'}
      activeStrokeColor={'orange'}
      inActiveStrokeOpacity={0.2}
      inActiveStrokeWidth={20}
      activeStrokeWidth={20}
      />
      </View>
    </View>
    </>
    
  );
}

function AttendanceScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>"Mark Attendance using Facial Recognition"</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Student Profile" component={DetailsScreen} />
        <Stack.Screen name="Mark Attendance" component={AttendanceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
