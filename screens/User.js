import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const User = (props) => {
  const { params } = props.route;
  const id = params ? params.id : null;
  const pw = params ? params.pw : null;
  const name = params ? params.name : null;
  const nickname = params ? params.nickname : null;
  const phone = params ? params.phone : null;

  // 임시 프로필 이미지 URL입니다. 원하는 이미지로 변경하세요.
  const profileImage = 'https://phinf.pstatic.net/contact/20220629_281/1656514108645cym9y_PNG/profileImage.png';

  return (
    <View style={styles.container}>
      <Image style={styles.profileImage} source={{ uri: profileImage }} />
      <View style={styles.infoContainer}>
        <Text style={styles.label}>ID</Text>
        <Text style={styles.value}>{id}</Text>
        <Text style={styles.label}>PW</Text>
        <Text style={styles.value}>{pw}</Text>
        <Text style={styles.label}>NAME</Text>
        <Text style={styles.value}>{name}</Text>
        <Text style={styles.label}>NICKNAME</Text>
        <Text style={styles.value}>{nickname}</Text>
        <Text style={styles.label}>PHONE</Text>
        <Text style={styles.value}>{phone}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  infoContainer: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333333',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#999999',
    marginBottom: 15,
  },
});

export default User;
