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
  BlogInfoContainer,
  BlogStatsContainer,
  DescriptionParagraph,
  BlogCreationDateParagraph,
  ColorBar,
  BlogEssentialsContainer,
  EssentialsButtonsContainer,
  RulesContainer,
  BlogRulesContainer,
} from "./components";

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
import { FcFolder } from "react-icons/fc";

import { posts } from "../../pages/LandingPage/posts.js";

export const Comments = (props) => {
  const [landingPosts, setLandingPosts] = useState(posts);

  const [getLorem, setGetLorem] = useState("");

  useEffect(() => {
    getRandomText();
  }, []);

  async function getRandomText() {
    const api =
      "https://baconipsum.com/api/?type=meat-and-filler&paras=1&sentences=4&format=text";

    try {
      let result = await axios.get(api);
      setGetLorem(result.data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CommentsSection>
      <CommentsContainer>
        <CommentsHeaderContainer>
          <LikesContainer>
            <FaArrowAltCircleUp />
            <span>700</span>
            <FaArrowAltCircleDown />
          </LikesContainer>
          <CloseContainer
            onClick={() => {
              props.toggleComments();
            }}
          >
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
                    <span>{getLorem}</span>
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
          <CommentsRightContainer>
            <ColorBar></ColorBar>
            <BlogInfoContainer>
              <span>
                <GiRobotAntennas />
                {`blog>europe`}
              </span>
              <DescriptionParagraph>
                Europe: 50(+6 countries), 230 languages, 746M people
              </DescriptionParagraph>
              <BlogCreationDateParagraph>
                <FcFolder />
                Created Jan 25, 2008
              </BlogCreationDateParagraph>
              <BlogStatsContainer>
                <p>
                  4.4m <span>Members</span>
                </p>
                <p>
                  5.7k <span>Online</span>
                </p>
                <p>
                  #49 <span>Ranked by Size</span>
                </p>
              </BlogStatsContainer>
            </BlogInfoContainer>
            <BlogEssentialsContainer>
              <h3>Essentials</h3>
              <EssentialsButtonsContainer>
                <button>Read the subblogit rules</button>
                <button>Read our geo policy</button>
                <button>Send feedback to mods</button>
                <button>Help and FAQ</button>
              </EssentialsButtonsContainer>
            </BlogEssentialsContainer>
            <BlogRulesContainer>
              <h3>{`blog>europe Rules`}</h3>
              <RulesContainer>
                <span>1. No Off-Topic posts</span>
                <span>2. No News articles older than 1 month</span>
                <span>
                  3. No Racism, Sexism, Homophobia, Genocide Denial etc
                </span>
                <span>
                  4. No duplicate posts Including different sources covering the
                  same story without providing new information.
                </span>
                <span>5. No Unlabeled NSFW images/videos</span>
                <span>
                  6. No Image macros, memes, reaction gifs and similar
                </span>
                <span>
                  7. No Personal Attacks personal attacks: Stick to the topic at
                  hand and remain civil towards other users - attacking ideas is
                  fine, attacking other users is not. This also includes calling
                  somebody a racist, a SJW, a commie, a Russian-bot, a shill or
                  similar in isolation. If you believe somebody is pushing an
                  agenda, report it or send us a mod mail. Don't take it to the
                  comments.
                </span>
              </RulesContainer>
            </BlogRulesContainer>
          </CommentsRightContainer>
        </PostCommentsContainer>
      </CommentsContainer>
    </CommentsSection>
  );
};
