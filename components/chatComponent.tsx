import { StyleSheet, Text, TouchableHighlight, View,  Image } from 'react-native'
import React, { FC } from 'react'
import { Link } from 'expo-router'
import Colors from '@/constants/Colors'
import { format } from 'date-fns';

interface ChatItemProps {
    id: string;
    name: string;
    date: string;
    unseenCount: string;
    backgroundColor: string;
    img: string;
    message: string;
  }

  const Chats: React.FC<ChatItemProps> = ({ id, name, date, unseenCount, backgroundColor, img, message }) => {
  return (
    <Link href={('/(tabs)/chats')} style={{ flex: 1, width:'100%', backgroundColor:'orange', paddingHorizontal:4}} >
        <TouchableHighlight activeOpacity={0.6} underlayColor={Colors.lightGray} style={{ flex: 1, width:'100%', backgroundColor:'black', paddingHorizontal:10}}>
            <View style={styles.containerItems}>
                <View style={styles.itemContainer}>
                    <View style={styles.iconname}>
                    <Image source={{ uri: img }} style={styles.profileImage} />
                    <View style={styles.namecontainer}>
                    <Text 
                        style={styles.username}>{name}</Text>
                        <View style={styles.timeContainer}>
                        <Text style={styles.description}>
                        {message.split(' ').length > 10
                            ? message.split(' ').slice(0, 10).join(' ') + '...'
                            : message}
                        </Text>
                        </View>
                    </View>
                    </View>
                    <View style={styles.timeEllipse}>
                    <Text style={styles.description}>{format(date, 'MM.dd.yy')}</Text>
                    {unseenCount !== undefined && parseInt(unseenCount) > 0 && (
                        <Text style={styles.unseenCount}>{unseenCount}</Text>
                    )}
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    </Link>
  )
}

export default Chats

const styles = StyleSheet.create({
    favorite:{
        backgroundColor: Colors.background,
        padding:8,
        marginLeft:10,
        color:Colors.gray,
      },
      containerItems:{
        paddingLeft:12,
        paddingRight:12,
        backgroundColor:'blue'
      },
      profileImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
      },
      favoriteContainer:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        gap:8,
        alignItems:'center',
        padding:12
      },
      favoriteIcon:{
        backgroundColor: Colors.background,
        color: Colors.green,
        borderRadius: 100,
        padding:6,
      },
      iconText:{
        fontWeight:'bold',
        fontSize: 16,
        color: Colors.gray
      },
      recent:{
        backgroundColor: Colors.background,
        padding:8,
        marginLeft:10,
        color:Colors.gray
      },
      namecontainer:{
        flexDirection: 'column',
        marginLeft:10,
      },
      iconname:{
        flexDirection: 'row',
        alignItems:'center'
      },
      username:{
        fontWeight : 'bold',
        fontSize: 18,
      },
      description:{
        fontSize: 10,
        color: Colors.gray,
        marginTop: 2,
      },
      icon:{
        color:Colors.gray
      },
      itemContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingTop:8,
        paddingBottom:8,
        backgroundColor:'red',
      },
      timeContainer:{
        flexDirection: 'row',
        alignItems:'center',
        gap:4
      },
      timeEllipse:{
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap:2,
      },
      unseenCount:{
        backgroundColor: Colors.green,
        borderRadius: 100,
        padding:4,
        fontSize:10,
        width:20,
        height:20,
        textAlign:'center'
      }
})