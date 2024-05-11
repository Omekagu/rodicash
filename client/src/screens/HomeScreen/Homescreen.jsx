import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import TransactionComp from '../../components/Home/TransactionComp';

const Homescreen = () => {
  return (
    <SafeAreaView style={{ margin: 15, height: '100%' }}>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}
      >
        <Text style={{ marginRight: 'auto', fontSize: 20, fontWeight: 'bold' }}>
          Home
        </Text>
        <Image
          source={{ uri: './assets/notification.png' }}
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'red',
            borderRadius: 10,
          }}
        />
      </View>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}
      >
        <Image
          source={{
            uri: 'data:image/png;base64,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',
          }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            marginRight: 10,
            borderWidth: 1,
          }}
        />
        <Text style={{ fontSize: 20 }}>Hello, Daze</Text>
      </View>
      <View
        style={{
          height: 150,
          width: '100%',
          padding: 20,
          backgroundColor: '#26a343',
          borderRadius: 20,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ marginRight: 'auto', color: '#fff' }}>
            Available cash
          </Text>

          <View
            style={{
              padding: 10,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#fff',
            }}
          >
            <Text style={{ color: '#fff' }}>Hide</Text>
          </View>
        </View>
        <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#fff' }}>
          $120,000. <Text style={{ fontSize: 15, lineHeight: 12 }}>00</Text>
        </Text>
      </View>

      <View style={{ alignItems: 'center', paddingVertical: 10 }}>
        <View
          style={{
            padding: 15,
            borderRadius: 30,
            borderWidth: 1,
          }}
        >
          <Text style={{}}>+ Add Money</Text>
        </View>
      </View>

      <View>
        <TransactionComp
          time={'10:00am'}
          title={'Princetech POS'}
          amount={'5,000'}
          transactionType={'cash out'}
        />
        <TransactionComp
          time={'10:00am'}
          title={'Princetech POS'}
          amount={'5,000'}
          transactionType={'cash out'}
        />
        <TransactionComp
          time={'10:00am'}
          title={'Princetech POS'}
          amount={'5,000'}
          transactionType={'cash out'}
        />
        <TransactionComp
          time={'10:00am'}
          title={'Princetech POS'}
          amount={'5,000'}
          transactionType={'cash out'}
        />
        <TransactionComp
          time={'10:00am'}
          title={'Princetech POS'}
          amount={'5,000'}
          transactionType={'cash out'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Homescreen;
