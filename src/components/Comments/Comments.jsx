import { React, useEffect, useState } from "react";
import axios from "axios";

import {
  CommentsContainer,
  CommentsSection,
  CommentsHeaderContainer,
  CloseContainer,
  LikesContainer,
  PostCommentsContainer,
  CommentsLeftContainer,
  CommentsRightContainer,
  UserDetailsContainer,
  PostTitleContainer,
  ImagePostContainer,
  Post,
  Likes,
  SaveSharePostContainer,
  UserCommentInputContainer,
  CommentButtonContainer,
  UsersCommentsContainer,
  CommentContainer,
  UserNameContainer,
  UserComment,
  CommentReplyContainer,
  CommentLikes,
} from "./components";

import { posts } from "../../pages/LandingPage/posts.js";

import { MdClose } from "react-icons/md";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { GiRobotAntennas } from "react-icons/gi";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { RiStackshareLine } from "react-icons/ri";
import { AiOutlineSave } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

export const Comments = () => {
  const [landingPosts, setLandingPosts] = useState(posts);
  const [displayComments, setDisplayComments] = useState(false);

  const [getLorem, setGetLorem] = useState("");

  function onClickDisplayComments() {
    if (displayComments === false) {
      setDisplayComments(true);
    }
  }

  useEffect(() => {
    getRandomText();
  }, []);

  async function getRandomText() {
    const api =
      "https://baconipsum.com/api/?type=meat-and-filler&paras=1&sentences=4&format=text";

    try {
      let result = await axios.get(api);
      setGetLorem(result);
      console.log(getLorem);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CommentsSection display={displayComments ? "none" : "flex"}>
      <CommentsContainer>
        <CommentsHeaderContainer>
          <LikesContainer>
            <FaArrowAltCircleUp />
            <span>700</span>
            <FaArrowAltCircleDown />
          </LikesContainer>
          <CloseContainer onClick={onClickDisplayComments}>
            <MdClose />
            <span>Close</span>
          </CloseContainer>
        </CommentsHeaderContainer>
        <PostCommentsContainer>
          <CommentsLeftContainer>
            <Likes>
              <FaArrowAltCircleUp />
              <span>700</span>
              <FaArrowAltCircleDown />
            </Likes>
            <Post>
              <UserDetailsContainer>
                <p>{`blog>europe`}</p>
                <span>Posted by u/Ste0153</span>
                <span>3 hours ago</span>
              </UserDetailsContainer>
              <PostTitleContainer>
                <h4>
                  Florence mayor Dario Nardella (R) stopping a climate activist
                  spraying paint on Plazzo Vecchio
                </h4>
              </PostTitleContainer>
              <ImagePostContainer>
                <img src={landingPosts.post1.picture} alt="" />
              </ImagePostContainer>
              <SaveSharePostContainer>
                <span>
                  <FiMessageSquare />
                  700 Comments
                </span>
                <span>
                  <RiStackshareLine />
                  Share
                </span>
                <span>
                  <AiOutlineSave />
                  Save
                </span>
                <span>
                  <BsThreeDots />
                </span>
              </SaveSharePostContainer>
              <UserCommentInputContainer>
                <span>Comment as _AndreiOvidiu_</span>
                <textarea
                  placeholder="What are your thoughts?"
                  rows="7"
                  cols="50"
                ></textarea>
                <CommentButtonContainer>
                  <button>Comment</button>
                </CommentButtonContainer>
              </UserCommentInputContainer>
              <UsersCommentsContainer>
                <CommentContainer>
                  <UserNameContainer>
                    <GiRobotAntennas />
                    <p>Reagonson</p>
                    <span>4 hr. ago</span>
                  </UserNameContainer>
                  <UserComment>
                    <span>Comment...</span>
                  </UserComment>
                  <CommentReplyContainer>
                    <CommentLikes>
                      <AiOutlineMinusSquare />
                      <span>8k</span>
                      <AiOutlinePlusSquare />
                    </CommentLikes>
                    <span>
                      <FiMessageSquare />
                      Reply
                    </span>
                    <span>
                      <RiStackshareLine />
                      Share
                    </span>
                    <span>
                      <BsThreeDots />
                    </span>
                  </CommentReplyContainer>
                </CommentContainer>
              </UsersCommentsContainer>
            </Post>
          </CommentsLeftContainer>
          <CommentsRightContainer>b</CommentsRightContainer>
        </PostCommentsContainer>
      </CommentsContainer>
    </CommentsSection>
  );
};
