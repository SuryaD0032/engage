import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';

const Privacy = () => {
    return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={true}>
            <Text style={styles.title}>Privacy Policy</Text>
            <Text style={styles.subtitle}>Personal Identification Information</Text>
            <Text style={styles.para}>
              We may collect personal identification information from Users in various ways, including, but not limited to, when Users register an account on the App, post content, and in connection with other activities, features, or resources we make available on our App. Users may be asked for their name, email address, and other relevant information. We will collect personal identification information from Users only if they voluntarily submit such information to us.
            </Text>
            <Text style={styles.subtitle}>Non-Personal Identification Information</Text>
            <Text  style={styles.para}>
              We may collect non-personal identification information about Users whenever they interact with our App. Non-personal identification information may include the browser name, the type of device, and technical information about Users' means of connection to our App, such as the operating system and the Internet service providers utilized, and other similar information.
            </Text>
            <Text style={styles.subtitle}>How We Use Collected Information</Text>
            <Text  style={styles.para}>
              Engage Inc. may collect and use Users' personal information for the following purposes:
              {'\n\n'}
              - To improve customer service
              {'\n'}
              - To personalize User experience
              {'\n'}
              - To improve our App
              {'\n'}
              - To send periodic emails
            </Text>
            <Text style={styles.subtitle}>How We Protect Your Information</Text>
            <Text  style={styles.para}>
              We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information and data stored on our App.
            </Text>
            <Text style={styles.subtitle}>Sharing Your Personal Information</Text>
            <Text  style={styles.para}>
              We do not sell, trade, or rent Users' personal identification information to others.
            </Text>
            <Text style={styles.subtitle}>Security</Text>
            <Text  style={styles.para}>
            We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure.
However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
            </Text>
            <View style={styles.containerengage}>
              <Text style={styles.engage}> ENGAGE</Text>
            </View>
          </ScrollView>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5fefd",
        top:'4.9%'
      },
      title: {
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
        marginBottom: 10,
        color: "#0a0a67"
      },
      subtitle: {
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        marginTop: 10,
        color: "#14171a",
        marginBottom: 5,
      },
      containerengage: {
        marginTop: 20,
        height: 130,
        width: 420,
        borderTopWidth: 1,
        borderColor: "#0a0a67",
        alignSelf: "center"
      },
      engage: {
        alignSelf: "center",
        fontSize: 30,
        fontFamily: "Montserrat-ExtraBold",
        color: "#0a0a67",
        marginTop: 30
      },
      para: {
        fontFamily:'Montserrat-Regular'
      }
    });

export default Privacy;