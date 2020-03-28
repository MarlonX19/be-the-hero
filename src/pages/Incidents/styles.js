import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 15,
        color: '#737380'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    incidentList: {
        marginTop: 24,
    },

    incident: {
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

    detailButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    detailButtonText: {
        color: '#e02141',
        fontSize: 15,
        fontWeight: 'bold',
    }
})
