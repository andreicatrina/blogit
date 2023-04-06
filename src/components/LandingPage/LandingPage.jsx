import { React, useState } from "react";

import { Link } from "react-router-dom";

import {
  CountryDiv,
  FeedContainer,
  FilterPostsContainer as FilterPostsParent,
  FilterPostsTitleDiv,
  HotDiv,
  ImageContainer,
  ImageSpan,
  ImageTitle,
  LandingPageSection,
  LinksContainer,
  NewPostsDiv,
  PopularCommunitiesContainer,
  PopularContainer,
  PopularPostsTitleDiv,
  PopularTrendsContainer,
  PopularTrendsLink,
  PostsContainer,
  ShortcutLinksContainer,
  ShortcutLinksTitleContainer,
  SideMenuContainer,
  TopicContainer,
  TopicsContainer,
  TopicSpan,
  TopPostsDiv,
  TrendingSubjectsContainer,
  TrendingTodayContainer,
  TrendingTodayTitleContainer,
  LeftContainer,
  NewsFeedContainer,
  NewsFeedPost,
  PostLikesContainer,
  PostContainer,
  UpperPostContainer,
  UpperPostTextContainer,
  VisitPostButton,
  BlogNamePost,
  MiddleContainerPost,
  MiddlePostTitleContainer,
  PostImageContainer,
  DownPostContainer,
  SideMenuParent,
  TopicsSubcategotyContainer,
  FilterPostsContainer,
  PostViewMenu,
  FeedViewContainer,
} from "./components";

import { GiTronArrow } from "react-icons/gi";
import { BiDownArrow } from "react-icons/bi";
import { TbFlame } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdNewReleases } from "react-icons/md";
import { BiBarChartAlt2 } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { RiStackshareLine } from "react-icons/ri";
import { AiOutlineSave } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { TfiMenuAlt } from "react-icons/tfi";
import { TfiLayoutMenuV } from "react-icons/tfi";

import Fotor from "../../Assets/Fotor_AI.png";
import congress from "../../Assets/congress.jpg";
import football from "../../Assets/football.jpg";
import politician from "../../Assets/politician.jpg";
import stockMarket from "../../Assets/stockMarket.jpg";
import netflix from "../../Assets/netflix.jpg";
import Post1 from "../../Assets/Post1.jpg";
import Post2 from "../../Assets/Post2.jpg";
import Post3 from "../../Assets/Post3.png";

export const LandingPage = () => {
  const [openPopular, setOpenPopular] = useState(true);
  const [openGaming, setOpenGaming] = useState(false);
  const [openSports, setOpenSports] = useState(false);

  const [feedView, setFeedView] = useState(false);

  const [classicView, setClassicView] = useState(false);

  function onClickPopular() {
    if (openPopular === false) {
      setOpenPopular(true);
      setOpenGaming(false);
      setOpenSports(false);
    } else {
      setOpenPopular(false);
    }
  }

  function onClickGaming() {
    if (openGaming === false) {
      setOpenGaming(true);
      setOpenPopular(false);
      setOpenSports(false);
    } else {
      setOpenGaming(false);
    }
  }

  function onClickSports() {
    if (openSports === false) {
      setOpenSports(true);
      setOpenPopular(false);
      setOpenGaming(false);
    } else {
      setOpenSports(false);
    }
  }

  function onClickMenuView() {
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
    <LandingPageSection>
      <SideMenuParent>
        <SideMenu />
      </SideMenuParent>
      <FeedContainer>
        <TrendingTodayContainer>
          <TrendingTodayTitleContainer>
            <h4>Trending today</h4>
          </TrendingTodayTitleContainer>
          <TrendingSubjectsContainer>
            <ImageContainer>
              <img src={stockMarket} alt="" />
              <ImageTitle>
                Credit Suisse <br />
                <ImageSpan>Credit Suisse now under 2 bucks premarket</ImageSpan>
              </ImageTitle>
            </ImageContainer>
            <ImageContainer>
              <img src={football} alt="" />
              <ImageTitle>
                Erling Haaland <br />
                <ImageSpan>{`[L'equipe] Erling Haaland receives 10/10`}</ImageSpan>
              </ImageTitle>
            </ImageContainer>
            <ImageContainer>
              <img src={netflix} alt="" />
              <ImageTitle>
                Ted Lasso <br />
                <ImageSpan>Can't even enjoy TV in peace now</ImageSpan>
              </ImageTitle>
            </ImageContainer>
            <ImageContainer>
              <img src={politician} alt="" />
              <ImageTitle>
                Ron DeSantis <br />
                <ImageSpan>
                  GOP senators push back on Desantis over Ukraine
                </ImageSpan>
              </ImageTitle>
            </ImageContainer>
          </TrendingSubjectsContainer>
        </TrendingTodayContainer>
        <PopularContainer
          marginAuto={classicView ? "0" : "0 auto"}
          maxWidth={classicView ? "100%" : "1300px"}
        >
          <LeftContainer
            maxWidth={classicView ? "100%" : "600px"}
            alignItems={classicView ? "" : "center"}
          >
            <PostsContainer
              maxWidth={classicView ? "100%" : "600px"}
              alignItems={classicView ? "flex-start" : "center"}
            >
              <PopularPostsTitleDiv>
                <h4>Popular posts</h4>
              </PopularPostsTitleDiv>
              <FilterPostsParent maxWidth={classicView ? "100%" : "600px"}>
                <FilterPostsContainer>
                  <HotDiv>
                    <TbFlame />
                    <span>Hot</span>
                  </HotDiv>
                  <CountryDiv>
                    <span>Romania</span>
                    <IoMdArrowDropdown />
                  </CountryDiv>
                  <NewPostsDiv>
                    <MdNewReleases />
                    <span>New</span>
                  </NewPostsDiv>
                  <TopPostsDiv>
                    <BiBarChartAlt2 />
                    <span>Top</span>
                  </TopPostsDiv>
                </FilterPostsContainer>
                <PostViewMenu onClick={onClickMenuView}>
                  <HiOutlineMenuAlt4 />
                  <IoIosArrowDown />
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
                </PostViewMenu>
              </FilterPostsParent>
            </PostsContainer>
            <NewsFeedContainer
              maxWidth={classicView ? "100%" : "600px"}
              gap={classicView ? "0" : "20px"}
            >
              <NewsFeedPost>
                <PostLikesContainer>
                  <AiFillPlusCircle />
                  <span>532</span>
                  <AiFillMinusCircle />
                </PostLikesContainer>
                <PostContainer>
                  <UpperPostContainer>
                    <UpperPostTextContainer>
                      <BlogNamePost>
                        {`blog>europe •`}
                        <span>
                          Posted by {`u/SteO153`}
                          <span> ~6h ago</span>
                        </span>
                      </BlogNamePost>
                    </UpperPostTextContainer>
                    <VisitPostButton>Visit</VisitPostButton>
                  </UpperPostContainer>
                  <MiddleContainerPost>
                    <MiddlePostTitleContainer>
                      <h4>
                        Florence mayor Dario Nardella (R) stopping a climate
                        activists spraying paint on Palazzo Vecchio
                        <span>Picture</span>
                      </h4>
                    </MiddlePostTitleContainer>
                    <PostImageContainer>
                      <img
                        src={Post1}
                        alt=""
                        width={classicView ? "100px" : "100%"}
                        height={classicView ? "80px" : "100%"}
                      />
                    </PostImageContainer>
                  </MiddleContainerPost>
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
              </NewsFeedPost>
              <NewsFeedPost>
                <PostLikesContainer>
                  <AiFillPlusCircle />
                  <span>365</span>
                  <AiFillMinusCircle />
                </PostLikesContainer>
                <PostContainer maxWidth={classicView ? "100%" : "575px"}>
                  <UpperPostContainer>
                    <UpperPostTextContainer>
                      <BlogNamePost>
                        {`blog>Romania •`}
                        <span>
                          Posted by {`u/RoeO153`}
                          <span> ~2h ago</span>
                        </span>
                      </BlogNamePost>
                    </UpperPostTextContainer>
                    <VisitPostButton>Visit</VisitPostButton>
                  </UpperPostContainer>
                  <MiddleContainerPost>
                    <MiddlePostTitleContainer>
                      <h4>
                        Care-i faza cu ceapa? Am fost azi in Carrefour, tot la
                        6.49 era. Nu mai creste ceapa in solul romanesc? A ajuns
                        sa coste 1kg de ceapa cat 1 litru de benzina.
                        <span>Serios</span>
                      </h4>
                    </MiddlePostTitleContainer>
                    <PostImageContainer>
                      <img
                        src={Post2}
                        alt=""
                        width={classicView ? "100px" : "100%"}
                        height={classicView ? "80px" : "100%"}
                      />
                    </PostImageContainer>
                  </MiddleContainerPost>
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
              </NewsFeedPost>
              <NewsFeedPost>
                <PostLikesContainer>
                  <AiFillPlusCircle />
                  <span>260</span>
                  <AiFillMinusCircle />
                </PostLikesContainer>
                <PostContainer>
                  <UpperPostContainer>
                    <UpperPostTextContainer>
                      <BlogNamePost>
                        {`blog>Romania •`}
                        <span>
                          Posted by {`u/slamdrunker`}
                          <span> ~4h ago</span>
                        </span>
                      </BlogNamePost>
                    </UpperPostTextContainer>
                    <VisitPostButton>Visit</VisitPostButton>
                  </UpperPostContainer>
                  <MiddleContainerPost>
                    <MiddlePostTitleContainer>
                      <h4>
                        Cand sinceritatea nu e un asset pentru angajator
                        <span>Funny</span>
                      </h4>
                    </MiddlePostTitleContainer>
                    <PostImageContainer>
                      <img
                        src={Post3}
                        alt=""
                        width={classicView ? "100px" : "100%"}
                        height={classicView ? "80px" : "100%"}
                      />
                    </PostImageContainer>
                  </MiddleContainerPost>
                  <DownPostContainer>
                    <span>
                      <FiMessageSquare />
                      32 Comments
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
              </NewsFeedPost>
            </NewsFeedContainer>
          </LeftContainer>
          <PopularCommunitiesContainer>
            <ShortcutLinksContainer>
              <ShortcutLinksTitleContainer onClick={onClickPopular}>
                <h4>POPULAR COMMUNITIES</h4>
                <IoIosArrowDown />
              </ShortcutLinksTitleContainer>
              {openPopular ? (
                <LinksContainer>
                  <a href="">AskBlogIt</a>
                  <a href="">NoStupidQuestions</a>
                  <a href="">Minecraft</a>
                  <a href="">AskMen</a>
                  <a href="">ExplainLikeImFive</a>
                </LinksContainer>
              ) : null}

              <ShortcutLinksTitleContainer onClick={onClickGaming}>
                <h4>Gaming</h4>
                <IoIosArrowDown />
              </ShortcutLinksTitleContainer>
              {openGaming ? (
                <LinksContainer>
                  <a href="">StardewValley</a>
                  <a href="">FortniteCompetitive</a>
                  <a href="">Warframe</a>
                  <a href="">totalwar</a>
                  <a href="">Fallout</a>
                  <a href="">RocketLeague</a>
                  <a href="">yugioh</a>
                  <a href="">fo76</a>
                </LinksContainer>
              ) : null}

              <ShortcutLinksTitleContainer onClick={onClickSports}>
                <h4>Sports</h4>
                <IoIosArrowDown />
              </ShortcutLinksTitleContainer>
              {openSports ? (
                <LinksContainer>
                  <a href="">running</a>
                  <a href="">soccer</a>
                  <a href="">bjj</a>
                  <a href="">MMA</a>
                  <a href="">hockey</a>
                  <a href="">formula1</a>
                  <a href="">CFB</a>
                  <a href="">MTB</a>
                  <a href="">cycling</a>
                  <a href="">rugbyunion</a>
                </LinksContainer>
              ) : null}
            </ShortcutLinksContainer>
          </PopularCommunitiesContainer>
        </PopularContainer>
      </FeedContainer>
    </LandingPageSection>
  );
};

export const SideMenu = () => {
  const [gameTopics, setGameTopics] = useState(false);
  const [sportTopics, setSportTopics] = useState(false);
  const [cryptoTopics, setCryptoTopics] = useState(false);
  const [televisionTopics, setTelevisionTopics] = useState(false);
  const [businessTopics, setBusinessTopics] = useState(false);
  const [celebrityTopics, setCelebrityTopics] = useState(false);
  const [scienceTopics, setScienceTopics] = useState(false);

  function onClickGameTopics() {
    if (gameTopics === false) {
      setGameTopics(true);
      setSportTopics(false);
      setCryptoTopics(false);
      setTelevisionTopics(false);
      setBusinessTopics(false);
      setCelebrityTopics(false);
      setScienceTopics(false);
    } else {
      setGameTopics(false);
    }
  }
  function onClickSportTopics() {
    if (sportTopics === false) {
      setSportTopics(true);
      setGameTopics(false);
      setCryptoTopics(false);
      setTelevisionTopics(false);
      setBusinessTopics(false);
      setCelebrityTopics(false);
      setScienceTopics(false);
    } else {
      setSportTopics(false);
    }
  }
  function onClickCryptoTopics() {
    if (cryptoTopics === false) {
      setCryptoTopics(true);
      setGameTopics(false);
      setSportTopics(false);
      setTelevisionTopics(false);
      setBusinessTopics(false);
      setCelebrityTopics(false);
      setScienceTopics(false);
    } else {
      setCryptoTopics(false);
    }
  }
  function onClickTelevisionTopics() {
    if (televisionTopics === false) {
      setTelevisionTopics(true);
      setGameTopics(false);
      setSportTopics(false);
      setCryptoTopics(false);
      setBusinessTopics(false);
      setCelebrityTopics(false);
      setScienceTopics(false);
      setBusinessTopics(false);
    } else {
      setTelevisionTopics(false);
    }
  }
  function onClickBusinessTopics() {
    if (businessTopics === false) {
      setBusinessTopics(true);
      setGameTopics(false);
      setSportTopics(false);
      setCryptoTopics(false);
      setCelebrityTopics(false);
      setScienceTopics(false);
      setTelevisionTopics(false);
    } else {
      setBusinessTopics(false);
    }
  }
  function onClickCelebrityTopics() {
    if (celebrityTopics === false) {
      setCelebrityTopics(true);
      setGameTopics(false);
      setSportTopics(false);
      setCryptoTopics(false);
      setTelevisionTopics(false);
      setScienceTopics(false);
      setBusinessTopics(false);
    } else {
      setCelebrityTopics(false);
    }
  }
  function onClickScienceTopics() {
    if (scienceTopics === false) {
      setScienceTopics(true);
      setGameTopics(false);
      setSportTopics(false);
      setCryptoTopics(false);
      setTelevisionTopics(false);
      setCelebrityTopics(false);
    } else {
      setScienceTopics(false);
    }
  }
  return (
    <SideMenuContainer>
      <PopularTrendsContainer>
        <span>FEEDS</span>
        <PopularTrendsLink>
          Daily Trends
          <GiTronArrow />
        </PopularTrendsLink>
      </PopularTrendsContainer>
      <TopicsContainer>
        <TopicSpan>TOPICS</TopicSpan>
        <TopicContainer onClick={onClickGameTopics}>
          <Link to="/topic/gaming">Gaming</Link>
          <BiDownArrow />
        </TopicContainer>
        {gameTopics ? (
          <TopicsSubcategotyContainer>
            <span>Call of Duty: Warzone</span>
            <span>Minecraft</span>
            <span>Watch Dogs: Legion</span>
            <span>Path of Exile</span>
            <span>World of Warcraft</span>
          </TopicsSubcategotyContainer>
        ) : null}
        <TopicContainer onClick={onClickSportTopics}>
          <Link to="/topic/sports">Sports</Link>
          <BiDownArrow />
        </TopicContainer>
        {sportTopics ? (
          <TopicsSubcategotyContainer>
            <span>NFL</span>
            <span>NBA</span>
            <span>Football</span>
            <span>Tennis</span>
            <span>UFC</span>
            <span>Premier League</span>
          </TopicsSubcategotyContainer>
        ) : null}
        <TopicContainer onClick={onClickCryptoTopics}>
          <span>Crypto</span>
          <BiDownArrow />
        </TopicContainer>
        {cryptoTopics ? (
          <TopicsSubcategotyContainer>
            <span>Bitcoin</span>
            <span>Cardano</span>
            <span>DogeCoin</span>
            <span>Algorand</span>
            <span>Litecoin</span>
            <span>Bitcoin Cash</span>
          </TopicsSubcategotyContainer>
        ) : null}
        <TopicContainer onClick={onClickTelevisionTopics}>
          <span>Television</span>
          <BiDownArrow />
        </TopicContainer>
        {televisionTopics ? (
          <TopicsSubcategotyContainer>
            <span>Real Housewives</span>
            <span>The Bachelor</span>
            <span>90 Day Finance</span>
            <span>Wife Swap</span>
            <span>My 600-lb Life</span>
            <span>Married at First Sight</span>
            <span>Tulsa King</span>
          </TopicsSubcategotyContainer>
        ) : null}
        <TopicContainer onClick={onClickBusinessTopics}>
          <span>Business</span>
          <BiDownArrow />
        </TopicContainer>
        {businessTopics ? (
          <TopicsSubcategotyContainer>
            <span>Game Stop</span>
            <span>Moderna</span>
            <span>Pfizer</span>
            <span>Walgreens</span>
            <span>Best Buy</span>
            <span>SpaceX</span>
            <span>Tesla</span>
          </TopicsSubcategotyContainer>
        ) : null}
        <TopicContainer onClick={onClickCelebrityTopics}>
          <span>Celebrity</span>
          <BiDownArrow />
        </TopicContainer>
        {celebrityTopics ? (
          <TopicsSubcategotyContainer>
            <span>Kim Kardashian</span>
            <span>Doja Cat</span>
            <span>Natalie Portman</span>
            <span>Henry Cavill</span>
            <span>Keanu Reeves</span>
            <span>Jamie Lee Curtis</span>
            <span>Sylvester Stallone</span>
          </TopicsSubcategotyContainer>
        ) : null}
        <TopicContainer onClick={onClickScienceTopics}>
          <span>Science</span>
          <BiDownArrow />
        </TopicContainer>
        {scienceTopics ? (
          <TopicsSubcategotyContainer>
            <span>Physics</span>
            <span>Chemistry</span>
            <span>Mathematics</span>
            <span>Biology</span>
            <span>Rockets</span>
            <span>Airplanes</span>
            <span>Cars</span>
            <span>Electricity</span>
            <span>Thermodynamics</span>
            <span>Optics</span>
            <span>Electronics</span>
            <span>Mechanics</span>
            <span>Renewables</span>
          </TopicsSubcategotyContainer>
        ) : null}
        <TopicContainer>
          <span>More Topics</span>
          <BiDownArrow />
        </TopicContainer>
      </TopicsContainer>
    </SideMenuContainer>
  );
};

