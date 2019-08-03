import React, { useEffect, useState } from "react";
import {
  Avatar,
  List,
  Layout,
  Button,
  Text,
  ListItem
} from "react-native-ui-kitten";
import { View, Image } from "react-native";
import { SafeAreaView } from "react-navigation";
import Icon from "react-native-vector-icons/Feather";
import Axios from "axios";

const FeedEntry = ({ item }) => (
  <ListItem>
    <View
      style={{ margin: 12, flexDirection: "row", alignItems: "flex-start" }}
    >
      <Avatar style={{ marginTop: 4 }} source={{ uri: item.author.avatar }} style={{width: 40, height: 40}} />
      <View style={{ marginLeft: 12, flex: 1 }}>
      { item.media && item.media.length > 0 && <Image source={{uri: item.media[0].uri}} style={{width: '100%', height: 100}} />}
        <Text category="s1">{item.author.name}</Text>
        <Text style={{ flex: 1 }} category="p2">
          {item.body}
        </Text>
        { item.type === "poll" && 
          <List
            renderItem={renderPoll}
            data={item.options}
            keyExtractor={item => item.id}
          />
        }
        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            justifyContent: "flex-start"
          }}
        >
          <Icon style={{ marginRight: 12 }} name="heart" size={18} />
          <Icon style={{ marginRight: 12 }} name="share" size={18} />
          <Icon style={{ marginRight: 12 }} name="message-square" size={18} />
        </View>
      </View>
    </View>
  </ListItem>
);

const renderPoll = option => (
  <ListItem
    title={option.item.text}
    description={`Responses: ${option.item.responses}`}
    titleStyle={{ color: '#000' }}
    descriptionStyle={{ color: '#000' }}
    style={{ color: '#000' }}
  />
);

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:7070/").then(({ data }) => {
      setPosts(data || []);
    });
  }, []);
  return posts;
};

const Feed = () => {
  const posts = usePosts();
  return (
    <Layout style={{ flex: 1 }}>
      <List
        renderItem={FeedEntry}
        data={posts}
        keyExtractor={item => item.id}
      />
      <SafeAreaView>
        <Layout
          style={{ paddingHorizontal: 20, paddingTop: 12, paddingBottom: 20 }}
        >
          <Button>Post</Button>
        </Layout>
      </SafeAreaView>
    </Layout>
  );
};

Feed.navigationOptions = {
  title: "Social"
};

export default Feed;
