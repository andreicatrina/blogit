import { React, useState } from "react";

import {
  CountryDiv,
  FeedContainer,
  FilterPostsContainer,
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

import Fotor from "../../Assets/Fotor_AI.png";
import congress from "../../Assets/congress.jpg";
import football from "../../Assets/football.jpg";
import politician from "../../Assets/politician.jpg";
import stockMarket from "../../Assets/stockMarket.jpg";
import netflix from "../../Assets/netflix.jpg";

export const LandingPage = () => {
  const [openPopular, setOpenPopular] = useState(false);
  const [openGaming, setOpenGaming] = useState(false);
  const [openSports, setOpenSports] = useState(false);

  function onClickPopular() {
    if (openPopular === false) {
      setOpenPopular(true);
    } else {
      setOpenPopular(false);
    }
  }

  function onClickGaming() {
    if (openGaming === false) {
      setOpenGaming(true);
    } else {
      setOpenGaming(false);
    }
  }

  function onClickSports() {
    if (openSports === false) {
      setOpenSports(true);
    } else {
      setOpenSports(false);
    }
  }

  return (
    <LandingPageSection>
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
          <TopicContainer>
            <span>Gaming</span>
            <BiDownArrow />
          </TopicContainer>
          <TopicContainer>
            <span>Sports</span>
            <BiDownArrow />
          </TopicContainer>
          <TopicContainer>
            <span>Crypto</span>
            <BiDownArrow />
          </TopicContainer>
          <TopicContainer>
            <span>Television</span>
            <BiDownArrow />
          </TopicContainer>
          <TopicContainer>
            <span>Business</span>
            <BiDownArrow />
          </TopicContainer>
          <TopicContainer>
            <span>Celebrity</span>
            <BiDownArrow />
          </TopicContainer>
          <TopicContainer>
            <span>Science</span>
            <BiDownArrow />
          </TopicContainer>
          <TopicContainer>
            <span>More Topics</span>
            <BiDownArrow />
          </TopicContainer>
        </TopicsContainer>
      </SideMenuContainer>
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
        <PopularContainer>
          <LeftContainer>
            <PostsContainer>
              <PopularPostsTitleDiv>
                <h4>Popular posts</h4>
              </PopularPostsTitleDiv>
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
            </PostsContainer>
            <NewsFeedContainer>
              <NewsFeedPost>
                <PostLikesContainer>
                  <AiFillPlusCircle />
                  <span>532</span>
                  <AiFillMinusCircle />
                </PostLikesContainer>
                <PostContainer>right</PostContainer>
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
