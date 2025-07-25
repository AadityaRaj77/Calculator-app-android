import {View, Text, Image} from 'react-native';

const Index = () => {
      return(
        <View style = {{
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
        }}>
            <Image
            source={require('../assets/images/img.jpg')}
            style={{ width: 400, height: 400 }}
            />
      </View>
      );
}

export default Index;