import React, { useState } from 'react'
import { View, Text, TextInput, Button, Image, Alert } from 'react-native'
import { supabase } from '../utils/supabase';
import { useAuth } from '../Context/Auth';

export default function Comment() {
  
  const [comment, setComment] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState('');
 
  return (
    <View>
      <Image style={{opacity:1,position:'absolute',zIndex:-1}} source={require("../assets/BG.jpg")} />
    <View style={{marginTop:'40%', paddingLeft:15, paddingRight:15,}}>
      <Text style={{fontSize:20, fontWeight:'600'}} >Comment</Text>
      <TextInput
        style={{ marginBottom:5, height: 40, borderColor: 'gray', borderWidth: 2, }} value={comment} onChangeText={setComment}
      />
      <Button
        title="comment"
        onPress={async () => {
          Alert.alert('ข้อความถูกส่งแล้ว!!!')
          const {data, error} = await supabase.from('comments').insert([{
            text: comment
          }]).select()

          if (error) {
            setErrorMsg(error.message)
            console.log('error', error)
          }
          setComment('');
          
        }}
        
      />
      <View style={{ marginTop:'20%',}}>
        <Text style={{justifyContent:'center', alignSelf:'center',fontSize:18,}}>แจ้งปัญหาและเสนอแนะ</Text>
        <Text style={{ alignSelf:'center',fontSize:18,}}>เกี่ยวกับสิ่งที่คุณอยากให้เราแก้ไขและปรับปรุง</Text>
        <Text style={{marginTop:10, alignSelf:'center',fontWeight:'600',fontSize:20,}}>ขอบคุณ</Text>
        
      </View>
    </View>
    </View>
  )
}
