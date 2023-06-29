import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const About = () => {
    return (
        <View style={styles.container}>
             <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={true}>
          <Text style={styles.title}>About Us</Text>
          <Text style={styles.content}>
           <Text style={{color:"#0a0a67" , fontSize:18}}> Engage </Text> is a social networking app designed to connect people who want to share and enjoy various experiences together. Whether you have extra movie tickets, concert passes, or other event tickets, Engage provides a platform for you to connect with like-minded individuals who are interested in joining you.
          </Text>
          <Text style={styles.content}>
            Our mission is to foster new connections, promote social interaction, and create memorable experiences through our app. We believe that sharing these experiences with unknown people can lead to exciting new friendships and opportunities.
          </Text>
          <Text style={styles.content}>
            At Engage, we are continuously working to enhance our app and provide a seamless user experience. We value your feedback and suggestions, so please don't hesitate to reach out to us with any questions, concerns, or ideas for improvement.
          </Text>
          <Text style={styles.content}>
            Thank you for choosing Engage. Let's connect, share, and make unforgettable memories together!
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
        backgroundColor: '#f5fefd',
        top:'4.5%'
      },
      title: {
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
        marginBottom: 10,
        color: '#0a0a67',
      },
      content: {
        fontSize: 16,
        marginBottom: 10,
        color: '#14171a',
        fontFamily: 'Montserrat-Regular'
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
        fontFamily: "",
        color: "#0a0a67",
        marginTop: 30,
        fontFamily: 'Montserrat-ExtraBold'
      },
    });
    

export default About;