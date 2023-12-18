import axios from 'axios';
import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Make sure to install @expo/vector-icons

export const AdminDashboard = () => {
    // const screenHeight = Dimensions.get('window').height;

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };
    const toggleShowPassword = () => {
        setFormData({
          ...formData,
          showPassword: !formData.showPassword,
        });
      };
    
    const handleSubmit = async () => {
        if (formData.username && formData.password) {
            try {
                const headers = {
                    Accept: 'application/json',
                };
                const response = await axios.post('https://skybillserver.vercel.app/register', formData, { headers });
                const { data } = response;
                const { success } = data;
                if (success) {
                    setFormData({
                        username: '',
                        password: '',
                    });
                    alert('User Registered');

                } else {
                    alert('Error', message || 'Registration failed');
                }
            } catch (error) {
                console.log(error.response.data.message)
                alert(" UserName and Password did not save")
            }
        } else {
            alert("Please Fill UserName and Password")
        }
    }
    return (
        // <ScrollView contentContainerStyle={[registerStyles.container,{height:screenHeight}]}>
        <ScrollView contentContainerStyle={registerStyles.container}>
            <Text style={registerStyles.heading}>Create New User</Text>
            <TextInput
                style={registerStyles.input}
                placeholder="UserName"
                onChangeText={(text) => handleChange('username', text)}
                value={formData.username}
            />
            {/* <TextInput
                style={registerStyles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => handleChange('password', text)}
                value={formData.password}
            /> */}

            <View style={registerStyles.passwordContainer}>
                <TextInput
                    style={registerStyles.passwordInput}
                    placeholder="Password"
                    secureTextEntry={!formData.showPassword} // Toggle secureTextEntry based on showPassword state
                    onChangeText={(text) => handleChange('password', text)}
                    value={formData.password}
                />
                <TouchableOpacity onPress={toggleShowPassword} style={registerStyles.showPasswordIcon}>
                    <FontAwesome name={formData.showPassword ? 'eye-slash' : 'eye'} size={20} color="#000" />
                </TouchableOpacity>
            </View>

            <View style={registerStyles.buttonContainer}>
                <TouchableOpacity style={registerStyles.button} onPress={handleSubmit}>
                    <Text style={registerStyles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const registerStyles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 1,
        paddingBottom: 1,
        height: 500,
    },
    heading: {
        fontSize: 18,
        marginBottom: 20,
        color: '#000',
        fontWeight: '700',
    },

    input: {
        height: 40,
        borderColor: 'gray',
        backgroundColor: "#D5F5E3",
        borderWidth: 2,
        marginBottom: 10,
        paddingLeft: 10,
        width: '100%',
        fontWeight: "500",
        borderRadius: 5,

    },
    buttonContainer: {
        flexDirection: "row",
        width: '100%',
    },
    button: {
        backgroundColor: '#145A32',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: "500"
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    passwordInput: {
        height: 40,
        borderColor: 'gray',
        backgroundColor: '#D5F5E3',
        borderWidth: 2,
        marginBottom: 10,
        paddingLeft: 10,
        width: '80%', // Adjust the width as needed
        fontWeight: '500',
        borderRadius: 5,
    },
    showPasswordIcon: {
        width: '20%', // Adjust the width as needed
        alignItems: 'center',
        justifyContent: 'center',
    },

});

