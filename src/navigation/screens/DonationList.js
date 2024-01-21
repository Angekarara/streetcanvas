import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, ActivityIndicator } from 'react-native'

const { width } = Dimensions.get("screen");

const DonationList = () => {
    const [donations, setDonations] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const getAllDonations = async () => {
            const response = await axios.get("https://donation-api-2yeu.onrender.com/donations/all")
            setDonations(response.data.donations)
        }
        setLoading(false)
        getAllDonations()
    }, [])

    return (
        <View style={styles.container}>
            {
                loading ?
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" }}>
                        <ActivityIndicator size="large" color="white" />
                    </View>
                    :
                    <FlatList
                        data={donations}
                        renderItem={({ item }) => (
                            <View style={styles.metric}>
                                <View style={styles.metricNumber}>
                                    <Text style={styles.text}>FullNames: </Text>
                                    <Text style={styles.metricNumberText}>{item.FullNames}</Text>
                                </View>
                                <View style={styles.kidNumber}>
                                    <Text style={styles.text}>Email: </Text>
                                    <Text style={styles.metricNumberText}>{item.email}</Text>
                                </View>
                                <View style={styles.kidNumber}>
                                    <Text style={styles.text}>Location: </Text>
                                    <Text style={styles.metricNumberText}>{item.Location}</Text>
                                </View>
                                <View style={styles.kidNumber}>
                                    <Text style={styles.text}>phoneNumber: </Text>
                                    <Text style={styles.metricNumberText}>{item.phoneNumber}</Text>
                                </View>
                                <View style={styles.kidNumber}>
                                    <Text style={styles.text}>Donated to: </Text>
                                    <Text style={styles.metricNumberText}>{item.kidId.FullNames}</Text>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item) => item._id}
                    />

            }
        </View>
    )
}

export default DonationList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    },
    metric: {
        backgroundColor: "#fff",
        marginTop: 24,
        borderWidth: 2,
        borderColor: "#A7E821",
        width: width - 20,
        borderRadius: 10,
    },
    metricNumber: {
        paddingLeft: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    metricNumberText: {
        color: "black",
        fontSize: 16,
    },
    text: {
        color: "black",
        fontWeight: "bold",
        fontSize: 18,
    },
    kidNumber: {
        paddingLeft: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }
})
