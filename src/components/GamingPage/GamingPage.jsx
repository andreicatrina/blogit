import React, { useState } from "react";

import { SideMenu } from "../LandingPage/LandingPage";
import { PageLayout } from "../PageLayout/PageLayout";
import {
  BlogNamePost,
  CommunitiesContainer,
  CommunityContainerFour,
  CommunityContainerOne,
  CommunityContainerThree,
  CommunityContainerTwo,
  CommunitySpanContainer,
  DevelopersContainer,
  DevelopersSpanContainer,
  DistributorsContainer,
  DistributorsSpanContainer,
  DownPostContainer,
  FeedViewContainer,
  GamePostsContainer,
  GameTopicTitleContainer,
  GamingCommunitiesContainer,
  GamingFeedContainer,
  GamingLandingPage,
  MenuSelectionsContainer,
  MiddlePostContainer,
  MiddlePostTextContainer,
  PostContainer,
  PostLikesContainer,
  PostsViewContainer,
  PostTextContainer,
  PublishersContainer,
  PublishersSpanContainer,
  SelectedViewDiv,
  SelectViewDiv,
  SideMenuParent,
  SubtopicsContainer,
  SubtopicsSpanContainer,
  UpperPostContainer,
  UserPostContainer,
  WebitesSpanContainer,
  WebsitesContainer,
} from "./components";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { TfiMenuAlt } from "react-icons/tfi";
import { TfiLayoutMenuV } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { RiStackshareLine } from "react-icons/ri";
import { AiOutlineSave } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { AiOutlineRobot } from "react-icons/ai";
import { SiProbot } from "react-icons/si";
import { GiRobotAntennas } from "react-icons/gi";
import { RiSearchLine } from "react-icons/ri";

export function GamingPage() {
  const [feedView, setFeedView] = useState(false);
  const [classicView, setClassicView] = useState(false);

  function onClickFeedView() {
    if (feedView === false) {
      setFeedView(true);
    } else {
      setFeedView(false);
    }
  }

  function onClickClassicView() {
    if (classicView === false) {
      setClassicView(true);
    }
  }

  function onClickCardView() {
    if (classicView === true) {
      setClassicView(false);
    }
  }

  return (
    <PageLayout>
      <GamingLandingPage>
        <SideMenuParent>
          <SideMenu />
        </SideMenuParent>
        <GamingFeedContainer maxWidth={classicView ? "100%" : "950px"}>
          <GamePostsContainer classic={classicView ? "100%" : "640px"} gap={classicView ? "0" : "20px"}>
            <GameTopicTitleContainer padding={classicView ? "20px" : "0"}>
              <h2>Gaming</h2>
              <span>Topic on BlogIt</span>
            </GameTopicTitleContainer>
            <MenuSelectionsContainer padding={classicView ? "20px" : "0"}>
              <button>Posts</button>
              <button>Communities</button>
              <button>Related Topics</button>
            </MenuSelectionsContainer>
            <PostsViewContainer marginBottom={classicView ? "20px" : "0"}>
              <span>Posts about Gaming</span>
              <SelectViewDiv onClick={onClickFeedView}>
                <SelectedViewDiv>
                  <HiOutlineMenuAlt4 />
                  <IoIosArrowDown />
                </SelectedViewDiv>
                {feedView ? (
                  <FeedViewContainer>
                    <span onClick={onClickCardView}>
                      <HiOutlineMenuAlt4 />
                      Card
                    </span>
                    <span onClick={onClickClassicView}>
                      <TfiMenuAlt />
                      Classic
                    </span>
                    <span>
                      <TfiLayoutMenuV />
                      Compact
                    </span>
                  </FeedViewContainer>
                ) : null}
              </SelectViewDiv>
            </PostsViewContainer>
            <UserPostContainer
              borderRadius={classicView ? "0" : "4px"}
              borderBottom={classicView ? "1px solid #cfd0d1" : "none"}
            >
              <PostLikesContainer justifyCenter={classicView ? "center" : "flex-start"}>
                <AiFillPlusCircle />
                <span>2.4k</span>
                <AiFillMinusCircle />
              </PostLikesContainer>
              <PostContainer>
                <UpperPostContainer>
                  <BlogNamePost>
                    {`b>HobbyDrama •`}
                    <span>
                      Posted by {`u/GoneRampant`}
                      <span> 1y ago</span>
                    </span>
                  </BlogNamePost>
                </UpperPostContainer>
                <MiddlePostContainer>
                  <MiddlePostTextContainer>
                    <h4>
                      [Video Games] The Xbox One: How Microsoft cost themselves an entire console generation with one
                      bad announcement after another
                    </h4>
                    <span>Hobby History (Medium)</span>
                  </MiddlePostTextContainer>
                  <PostTextContainer display={classicView ? "none" : "flex"}>
                    <span>
                      Introduction <br /> wars have always been a part of video games, going all the way back to the 90s
                      with the feud between Sega and Nintendo. It makes sense from a tribalism perspective; consoles are
                      hefty purchases so you need to be able to feel secure that you bought the right one, especially if
                      you're a child as you may not have the funds to secure the competition unless your parents were
                      exceedingly generous. Today's post focuses on one such entry into the console war, and how
                      focusing on the wrong aspects cost its parent company the entire generation in terms of PR and
                      public image. This is the story of the Xbox One.
                      <br /> The setup <br /> In 2000, Microsoft would enter the console market race with the original
                      heavy-enough-to-be-a-murder-weapon Xbox. While it would fail to beat its primary competition,
                      Sony's Playstation 2, it would carve out a niche for itself in the Americas, helped by several
                      successful exclusives like Halo Combat Evolved and Halo 2, fantasy RPG Fable, and Star Wars:
                      Knights of the Old Republic. Then again, going blow to blow with the PS2 is no small feat given
                      it's the best selling console of all time as of writing at over a hundred and fifty five million
                      units.
                    </span>
                  </PostTextContainer>
                </MiddlePostContainer>
                <DownPostContainer>
                  <span>
                    <FiMessageSquare />
                    793 Comments
                  </span>
                  <span>
                    <RiStackshareLine />
                    Share
                  </span>
                  <span>
                    <AiOutlineSave />
                    Save
                  </span>
                  <BsThreeDots />
                </DownPostContainer>
              </PostContainer>
            </UserPostContainer>
            <UserPostContainer borderBottom={classicView ? "1px solid #cfd0d1" : "none"}>
              <PostLikesContainer justifyCenter={classicView ? "center" : "flex-start"}>
                <AiFillPlusCircle />
                <span>1.9k</span>
                <AiFillMinusCircle />
              </PostLikesContainer>
              <PostContainer>
                <UpperPostContainer>
                  <BlogNamePost>
                    {`b>HobbyDrama •`}
                    <span>
                      Posted by {`b/hardwareswap`}
                      <span> 1y ago</span>
                    </span>
                  </BlogNamePost>
                </UpperPostContainer>
                <MiddlePostContainer>
                  <MiddlePostTextContainer>
                    <h4>[USA-TX] [H] New Holiday Consoles (Xbox Series X, Nintendo Switch OLED, PS5 Disc)[W]</h4>
                    <span>CLOSED</span>
                  </MiddlePostTextContainer>
                  <PostTextContainer display={classicView ? "none" : "flex"}>
                    <span>
                      Introduction <br /> wars have always been a part of video games, going all the way back to the 90s
                      with the feud between Sega and Nintendo. It makes sense from a tribalism perspective; consoles are
                      hefty purchases so you need to be able to feel secure that you bought the right one, especially if
                      you're a child as you may not have the funds to secure the competition unless your parents were
                      exceedingly generous. Today's post focuses on one such entry into the console war, and how
                      focusing on the wrong aspects cost its parent company the entire generation in terms of PR and
                      public image. This is the story of the Xbox One.
                      <br /> The setup <br /> In 2000, Microsoft would enter the console market race with the original
                      heavy-enough-to-be-a-murder-weapon Xbox. While it would fail to beat its primary competition,
                      Sony's Playstation 2, it would carve out a niche for itself in the Americas, helped by several
                      successful exclusives like Halo Combat Evolved and Halo 2, fantasy RPG Fable, and Star Wars:
                      Knights of the Old Republic. Then again, going blow to blow with the PS2 is no small feat given
                      it's the best selling console of all time as of writing at over a hundred and fifty five million
                      units. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quos asperiores optio
                      sit, numquam vero!
                    </span>
                  </PostTextContainer>
                </MiddlePostContainer>
                <DownPostContainer>
                  <span>
                    <FiMessageSquare />
                    2293 Comments
                  </span>
                  <span>
                    <RiStackshareLine />
                    Share
                  </span>
                  <span>
                    <AiOutlineSave />
                    Save
                  </span>
                  <BsThreeDots />
                </DownPostContainer>
              </PostContainer>
            </UserPostContainer>
            <UserPostContainer borderBottom={classicView ? "1px solid #cfd0d1" : "none"}>
              <PostLikesContainer justifyCenter={classicView ? "center" : "flex-start"}>
                <AiFillPlusCircle />
                <span>196</span>
                <AiFillMinusCircle />
              </PostLikesContainer>
              <PostContainer>
                <UpperPostContainer>
                  <BlogNamePost>
                    {`b>HobbyDrama •`}
                    <span>
                      Posted by {`b/linux_gaming`}
                      <span> 11 months ago</span>
                    </span>
                  </BlogNamePost>
                </UpperPostContainer>
                <MiddlePostContainer>
                  <MiddlePostTextContainer>
                    <h4>I've finallt decided to pursue my true passion in life: create/develop my own video games!</h4>
                    <span>gamedev/testing</span>
                  </MiddlePostTextContainer>
                  <PostTextContainer display={classicView ? "none" : "flex"}>
                    <span>
                      Introduction <br /> wars have always been a part of video games, going all the way back to the 90s
                      with the feud between Sega and Nintendo. It makes sense from a tribalism perspective; consoles are
                      hefty purchases so you need to be able to feel secure that you bought the right one, especially if
                      you're a child as you may not have the funds to secure the competition unless your parents were
                      exceedingly generous. Today's post focuses on one such entry into the console war, and how
                      focusing on the wrong aspects cost its parent company the entire generation in terms of PR and
                      public image. This is the story of the Xbox One.
                      <br /> The setup <br /> In 2000, Microsoft would enter the console market race with the original
                      heavy-enough-to-be-a-murder-weapon Xbox. While it would fail to beat its primary competition,
                      Sony's Playstation 2, it would carve out a niche for itself in the Americas, helped by several
                      successful exclusives like Halo Combat Evolved and Halo 2, fantasy RPG Fable, and Star Wars:
                      Knights of the Old Republic. Then again, going blow to blow with the PS2 is no small feat given
                      it's the best selling console of all time as of writing at over a hundred and fifty five million
                      units. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quos asperiores optio
                      sit, numquam vero!
                    </span>
                  </PostTextContainer>
                </MiddlePostContainer>
                <DownPostContainer>
                  <span>
                    <FiMessageSquare />
                    692 Comments
                  </span>
                  <span>
                    <RiStackshareLine />
                    Share
                  </span>
                  <span>
                    <AiOutlineSave />
                    Save
                  </span>
                  <BsThreeDots />
                </DownPostContainer>
              </PostContainer>
            </UserPostContainer>
          </GamePostsContainer>
          <GamingCommunitiesContainer>
            <CommunitiesContainer>
              <p>TOP COMMUNITIES</p>
              <CommunityContainerOne>
                <HiUserGroup />
                <CommunitySpanContainer>
                  <span>b/gaming</span>
                  <span>20.4k members</span>
                </CommunitySpanContainer>
              </CommunityContainerOne>
              <CommunityContainerTwo>
                <AiOutlineRobot />
                <CommunitySpanContainer>
                  <span>b/Games</span>
                  <span>12.8k members</span>
                </CommunitySpanContainer>
              </CommunityContainerTwo>
              <CommunityContainerThree>
                <SiProbot />
                <CommunitySpanContainer>
                  <span>b/trueGaming</span>
                  <span>14.9k members</span>
                </CommunitySpanContainer>
              </CommunityContainerThree>
              <CommunityContainerFour>
                <GiRobotAntennas />
                <CommunitySpanContainer>
                  <span>b/GirlGamers</span>
                  <span>1.4m members</span>
                </CommunitySpanContainer>
              </CommunityContainerFour>
              <button>See more</button>
            </CommunitiesContainer>
            <PublishersContainer>
              <p>PUBLISHERS</p>
              <PublishersSpanContainer>
                <RiSearchLine />
                <span>2K Sports</span>
              </PublishersSpanContainer>
              <PublishersSpanContainer>
                <RiSearchLine />
                <span>505 Games</span>
              </PublishersSpanContainer>
              <PublishersSpanContainer>
                <RiSearchLine />
                <span>Activision Publishing</span>
              </PublishersSpanContainer>
              <PublishersSpanContainer>
                <RiSearchLine />
                <span>Apple Arcade</span>
              </PublishersSpanContainer>
              <PublishersSpanContainer>
                <RiSearchLine />
                <span>Aspyr</span>
              </PublishersSpanContainer>
              <button>See all publishers</button>
            </PublishersContainer>
            <WebsitesContainer>
              <p>WEBSITES</p>
              <WebitesSpanContainer>
                <RiSearchLine />
                <span>Destructoid</span>
              </WebitesSpanContainer>
              <WebitesSpanContainer>
                <RiSearchLine />
                <span>Dexerto</span>
              </WebitesSpanContainer>
              <WebitesSpanContainer>
                <RiSearchLine />
                <span>DSOGaming</span>
              </WebitesSpanContainer>
              <WebitesSpanContainer>
                <RiSearchLine />
                <span>DualShockers</span>
              </WebitesSpanContainer>
              <WebitesSpanContainer>
                <RiSearchLine />
                <span>Easy Allies</span>
              </WebitesSpanContainer>
              <button>See all websites</button>
            </WebsitesContainer>
            <DevelopersContainer>
              <p>DEVELOPERS</p>
              <DevelopersSpanContainer>
                <RiSearchLine />
                <span>2K Games</span>
              </DevelopersSpanContainer>
              <DevelopersSpanContainer>
                <RiSearchLine />
                <span>343 Industries</span>
              </DevelopersSpanContainer>
              <DevelopersSpanContainer>
                <RiSearchLine />
                <span>38 Studios</span>
              </DevelopersSpanContainer>
              <DevelopersSpanContainer>
                <RiSearchLine />
                <span>3D Realms</span>
              </DevelopersSpanContainer>
              <DevelopersSpanContainer>
                <RiSearchLine />
                <span>4A Games</span>
              </DevelopersSpanContainer>
              <button>See all developers</button>
            </DevelopersContainer>
            <SubtopicsContainer>
              <p>SUBTOPICS</p>
              <SubtopicsSpanContainer>
                <RiSearchLine />
                <span>Esports</span>
              </SubtopicsSpanContainer>
              <SubtopicsSpanContainer>
                <RiSearchLine />
                <span>Speedrunning</span>
              </SubtopicsSpanContainer>
            </SubtopicsContainer>
            <DistributorsContainer>
              <p>DISTRIBUTORS</p>
              <DistributorsSpanContainer>
                <RiSearchLine />
                <span>Battle.net</span>
              </DistributorsSpanContainer>
              <DistributorsSpanContainer>
                <RiSearchLine />
                <span>Epic Games Store</span>
              </DistributorsSpanContainer>
              <DistributorsSpanContainer>
                <RiSearchLine />
                <span>GOG.com</span>
              </DistributorsSpanContainer>
              <DistributorsSpanContainer>
                <RiSearchLine />
                <span>Google Play Games</span>
              </DistributorsSpanContainer>
              <DistributorsSpanContainer>
                <RiSearchLine />
                <span>Hunble Store</span>
              </DistributorsSpanContainer>
              <button>See all distributors</button>
            </DistributorsContainer>
          </GamingCommunitiesContainer>
        </GamingFeedContainer>
      </GamingLandingPage>
    </PageLayout>
  );
}
