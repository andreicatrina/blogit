import styled from "styled-components";

export const CommentsSection = styled.div`
  display: ${(props) => props.display};
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
  background-color: #fff;
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
  }

  svg {
    width: 24px;
    height: 24px;
    color: var(--color-orange);
  }
`;
