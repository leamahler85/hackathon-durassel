import React, { useState } from "react";
import UserContext from "../contexts/UserContext";


const GlobalContext = ({ children }) => {
  const [user, setUser] = useState();

  const generatorId = () => {
    let number = Math.random();
    number.toString(36);
    let id = number.toString(36).substr(2, 9);
    return id
  }
  const initialList = [
    {
      id: "a",
      header: "Robin",
      text: "I'll be always here for you Batman",
      type: "PostIt",
    },
    {
      id: "b",
      // source: "https://www.youtube.com/1ZJTuep3w5g",
      text: "You know nothing John Snow",
      type: "video",
    },
    {
      id: "c",
      link: "https://react-bootstrap.github.io/",
      text: "A great link for you to check ...",
      type: "link",
    },
    {
      id: "d",
      img_source:
        "https://aws.vdkimg.com/film/6/9/9/3/6993_backdrop_scale_1280xauto.jpg",
      text: "Come Surfing Buddy",
      type: "image",
    },
  ];
  const [list, setList] = useState(initialList);
  const [postTitle, setPostTitle] = useState(" ");
  const [postText, setPostText] = useState(" ");
  const handleChangeTitle = (event) => {
    setPostTitle(event.target.value);
  };

  const handleRemove = (id)=>{
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }
  const handleChangeText = (event) => {
    setPostText(event.target.value);
  };
  const addArticle = () => {
    setList([
      ...list,
      {
        id: generatorId(),
        header: postTitle,
        text: postText,
        type: "PostIt",
      },
    ]);
  };
  const handleSubmit = (event) => {
    addArticle();
    setPostTitle(" ");
    setPostText(" ");
    event.preventDefault();
  };
  const addImage = () => {
    setList([
      ...list,
      {
        id: generatorId(),
        img_source: postTitle,
        text: postText,
        type: "image",
      },
    ]);
  };
  const handleSubmitImage = (event) => {
    addImage();
    setPostTitle(" ");
    setPostText(" ");
    event.preventDefault();
  };
  const addLink = () => {
    setList([
      ...list,
      {
        id: generatorId(),
        link: postTitle,
        text: postText,
        type: "link",
      },
    ]);
  };
  const handleSubmitLink = (event) => {
    addLink();
    setPostTitle(" ");
    setPostText(" ");
    event.preventDefault();
  };
  const addVideo = () => {
    setList([
      ...list,
      {
        id: generatorId(),
        source: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        text: postText,
        type: "video",
      },
    ]);
  };
  const handleSubmitVideo = (event) => {
    addVideo();
    setPostTitle(" ");
    setPostText(" ");
    event.preventDefault();
  };
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        initialList,
        list,
        setList,
        postTitle,
        setPostTitle,
        setPostText,
        handleChangeTitle,
        handleChangeText,
        addArticle,
        addImage,
        addLink,
        addVideo,
        handleSubmit,
        handleSubmitImage,
        handleSubmitLink,
        handleSubmitVideo,
        handleRemove,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default GlobalContext;
