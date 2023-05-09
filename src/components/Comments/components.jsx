import styled from "styled-components";

export const CommentsSection = styled.div`
  display: flex;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  background: rgba(132, 129, 129, 0.5);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  border: 1px solid rgba(132, 129, 129, 0.25);
  position: absolute;
  top: 64px;
  margin: 0 auto;
  z-index: 10;
`;

export const CommentsContainer = styled.div`
  /* display: flex; */
  width: 1200px;
  min-height: 100vh;
  background-color: #9fa1a3;
`;

export const CommentsHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1136px;
  height: 48px;
  padding: 0 32px;
  background-color: #000;
  position: sticky;
  top: 64px;
`;

export const CloseContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 12px;
    font-weight: 700;
    color: #fff;
  }

  svg {
    width: 24px;
    height: 24px;
    color: #878a8c;
  }
`;

export const LikesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  border-left: 1px solid #878a8c;
  border-right: 1px solid #878a8c;
  padding: 0 8px;

  span {
    font-size: 12px;
    font-weight: 700;
    color: #fff;
  }

  svg {
    width: 24px;
    height: 24px;
    color: #878a8c;
    cursor: pointer;
  }
`;

export const PostCommentsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-top: 24px;
`;

export const CommentsLeftContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 700px;
  height: 100%;
  background-color: #fff;
`;

export const CommentsRightContainer = styled.div`
  width: 100%;
  max-width: 300px;
  background-color: transparent;
`;

export const UserDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;

  p {
    font-size: 12px;
    color: #1c0e02;
    font-weight: 700;
  }

  span {
    font-size: 12px;
    color: #787c7e;
    font-weight: 600;
  }
`;

export const PostTitleContainer = styled.div`
  h4 {
    font-size: 20px;
    padding: 8px 0;
  }
`;

export const ImagePostContainer = styled.div`
  width: 100%;
  max-width: 575px;
  /* height: 100%; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Post = styled.div``;

export const Likes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 8px 0 4px;
`;
export const SaveSharePostContainer = styled.div`
  display: flex;
  padding: 16px 4px;
  gap: 12px;
  span {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #878a8c;
    gap: 4px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const UserCommentInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  gap: 8px;

  span {
    padding: 2px;
  }

  textarea {
    width: 100%;
    max-width: 620px;
    border: 1px solid #787a7c;
    font-family: "Noto Sans", sans-serif;

    ::placeholder {
      padding: 4px;
      font-size: 18px;
    }
  }
`;

export const CommentButtonContainer = styled.div`
  width: 100%;
  max-width: 620px;
  display: flex;
  justify-content: center;
  padding: 12px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100px;
    height: 24px;
    border-radius: 10px;
    border: none;
    background-color: #717d7e;
    color: #fff;
    font-family: "Noto Sans", sans-serif;
    font-weight: 600;
    font-size: 12px;
    cursor: pointer;
  }
`;

export const UsersCommentsContainer = styled.div``;

export const CommentContainer = styled.div``;

export const UserNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    font-size: 12px;
    font-weight: 600;
  }

  span {
    font-size: 12px;
    font-weight: 500;
    color: #787a7c;
  }

  svg {
    width: 32px;
    height: 32px;
    color: var(--color-orange);
  }
`;

export const UserComment = styled.div`
  padding: 12px 12px 12px 36px;

  span {
    padding: 4px;
  }
`;

export const CommentReplyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
  }
`;

export const CommentLikes = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 12px 12px 12px 36px;

  span {
    font-size: 12px;
    font-weight: 700;
    cursor: default;
  }

  svg {
    width: 24px;
    height: 24px;
    color: var(--color-orange);
    cursor: pointer;
  }
`;

export const ColorBar = styled.div`
  width: 100%;
  height: 28px;
  background-color: #0079d3;
`;

export const BlogInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: white;
  border-radius: 4px;
  margin-bottom: 16px;

  span {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 16px;
    font-weight: 600;
    svg {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 1px solid aquamarine;
      background-color: aquamarine;
      color: blueviolet;
    }
  }
`;

export const DescriptionParagraph = styled.p`
  padding: 8px 0;
  font-size: 14px;
  font-weight: 400;
`;

export const BlogCreationDateParagraph = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 0 16px 0;
  border-bottom: 1px solid #7c7c7c;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const BlogStatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;

  p {
    font-size: 16px;
    font-weight: 600;
    color: black;
    span {
      font-size: 12px;
      color: #7c7c7c;
    }
  }
`;

export const BlogEssentialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: white;
  border-radius: 4px;
  margin-bottom: 16px;

  h3 {
    font-size: 14px;
    padding-bottom: 24px;
  }
`;

export const EssentialsButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  button {
    width: 100%;
    height: 32px;
    background-color: transparent;
    border-radius: 16px;
    border: 1px solid #0079d3;
    color: #0079d3;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;

    :hover {
      background-color: #f2f8fc;
    }
  }
`;

export const BlogRulesContainer = styled.div`
  background-color: white;
  padding: 8px;
  border-radius: 4px;

  h3 {
    padding-bottom: 24px;
    font-size: 14px;
  }
`;

export const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  span {
    font-size: 14px;
    font-weight: 400;
  }
`;