import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledOurBlog = styled.div``;

export const ContainerBlogItem = styled.div`
  position: relative;
  height: 360px;

  @media (max-width: 991px) {
    margin-bottom: 42px;
  }
`;

export const ImageBlog = styled.div`
  width: 100%;
  height: 300px;
  background-image: ${(props) => "url(" + props.src + ")"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LabelImageBlog = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.white};
  width: 78px;
  height: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LabelImageBlogDay = styled.div`
  font-size: 1.6rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.color.text};
`;

export const LabelImageBlogMonth = styled.div`
  margin-top: 6px;
  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.color.subText};
`;
export const ContainerBlogLink = styled.div`
  padding: 24px;
  border-style: solid;
  border-width: 1px;
  border-color: transparent #d8dbda #d8dbda #d8dbda;
`;

export const BlogLink = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  color: ${({ theme }) => theme.color.text};
  transition: 0.3s all ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;
