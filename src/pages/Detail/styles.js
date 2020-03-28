import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    incident: {
        marginTop: 35,
        padding: 24,
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 10
    },

    incidentProperty: {
        fontSize: 14,
        color: "#41414d",
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    contactBox: {
        marginTop: 5,
        padding: 24,
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 10
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380'
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    action: {
        backgroundColor: '#e02141',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    }

})