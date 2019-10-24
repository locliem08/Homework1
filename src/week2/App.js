import React, { Fragment } from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator, Linking } from 'react-native';
import moment from 'moment';
import { Card, Button, Icon } from 'react-native-elements';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loadding: true,
      pageNumber: 1,
      pageCount: -1
    };
  }

  componentDidMount() {
    this.getData();
  }

  filterForUniqueArticles = arr => {
    const cleaned = [];
    arr.forEach(itm => {
      let unique = true;
      cleaned.forEach(itm2 => {
        const isEqual = JSON.stringify(itm) === JSON.stringify(itm2);
        if (isEqual) unique = false;
      });
      if (unique) cleaned.push(itm);
    });
    return cleaned;
  };

  getData = async () => {
    if (this.state.pageCount == this.state.data.length)
      return;
    this.setState({ loadding: true });
    let response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=64a53666935249729d551c5e1d13f826&page=' + this.state.pageNumber);
    let res = await response.json();
    //---
    let temp = [...this.state.data];
    const newArticleList = this.filterForUniqueArticles(
      temp.concat(res.articles)
    );
    //---
    if (res.status == 'ok') {
      this.setState({ data: newArticleList, loadding: false, pageNumber: this.state.pageNumber + 1, pageCount: res.totalResults });
    } else
      this.setState({ loadding: false, data: null });
    console.log(res);
  }

  onPressItem = (url) => () => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log(`Don't know how to open URL: ${url}`);
      }
    });
  };

  renderArticleItem = ({ item }) => {
    return (
      <Card title={item.title} image={{ uri: item.urlToImage }}>
        <View style={styles.row}>
          <Text style={styles.label}>Source</Text>
          <Text style={styles.info}>{item.source.name}</Text>
        </View>
        <Text style={{}}>{item.content}</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Published</Text>
          <Text style={styles.info}>
            {moment(item.publishedAt).format('LLL')}
          </Text>
        </View>
        <Button icon={<Icon />} title="Read more" backgroundColor="#03A9F4" onPress={this.onPressItem(item.url)} />
      </Card>
    );
  };

  render() {
    if (this.state.data == null)
      return (
        <View style={styles.container}>
          <Text>Error =(</Text>
        </View>
      );
    return (
      <View style={styles.container}>
        {
          this.state.loadding && this.state.data.length == 0 ? <ActivityIndicator style={{ marginTop: 60 }} size='large' /> :
            <>
              <View style={styles.row}>
                <Text style={styles.label}>Articles Count:</Text>
                <Text style={styles.info}>{this.state.data.length}</Text>
              </View>
              <FlatList
                data={this.state.data}
                renderItem={this.renderArticleItem}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={this.getData}
                onEndReachedThreshold={0.2}
                ListFooterComponent={this.state.loadding ? <ActivityIndicator style={{ marginHorizontal: 10 }} size="large" /> :
                  (this.state.pageCount == this.state.data.length ? <Text style={{ textAlign: 'center', marginVertical: 10 }}>No more articles</Text> : null)}
              />
            </>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginBottom: 20
  },
  header: {
    height: 30,
    width: '100%',
    backgroundColor: 'pink'
  },
  row: {
    flexDirection: 'row'
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold'
  },
  info: {
    fontSize: 16,
    color: 'grey'
  }
});