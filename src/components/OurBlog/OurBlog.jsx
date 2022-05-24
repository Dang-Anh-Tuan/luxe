import React, { useEffect } from "react";
import { ContainerSession } from "../container/ContainerSession";
import { WrapperPage } from "../CommonStyle/BaseStyle/BaseStyle.styled";
import { Heading } from "../common/Session/Heading";
import { ContainerRow } from "../common/Session/ContainerRow";
import { FlexItem4 } from "../common/Session/FlexItem4";
import {
  StyledOurBlog,
  BlogLink,
  ContainerBlogItem,
  ContainerBlogLink,
  ImageBlog,
  LabelImageBlog,
  LabelImageBlogDay,
  LabelImageBlogMonth,
} from "./OurBlog.styled";

const listBlog = [
  {
    theme: "/image/image-1.jpg",
    title: "Most Expensive Hotel",
    day: "09",
    month: "AUG",
  },
  {
    theme: "/image/image-2.jpg",
    title: "1st Anniversary of Luxe Hotel",
    day: "09",
    month: "AUG",
  },
  {
    theme: "/image/image-3.jpg",
    title: "Discover New Adventure",
    day: "09",
    month: "AUG",
  },
];

function OurBlog() {
  let listBlogCopy = [...listBlog];
  let blogItems = [];
  let blogList = [];

  const sizeLoop = Math.floor(listBlogCopy.length / 3);
  for (let j = 0; j <= sizeLoop; j++) {
    for (let i = 0; i <= 2; i++) {
      let item = listBlogCopy.shift();
      item &&
        blogItems.push(
          <FlexItem4>
            <ContainerBlogItem>
              <ImageBlog src={item.theme}></ImageBlog>
              <LabelImageBlog>
                <LabelImageBlogDay>{item.day}</LabelImageBlogDay>
                <LabelImageBlogMonth>{item.month}</LabelImageBlogMonth>
              </LabelImageBlog>
              <ContainerBlogLink>
                <BlogLink to="/service">{item.title}</BlogLink>
              </ContainerBlogLink>
            </ContainerBlogItem>
          </FlexItem4>
        );
    }
    blogList.push(<ContainerRow>{blogItems}</ContainerRow>);
    blogItems = [];
  }

  return (
    <StyledOurBlog>
      <ContainerSession>
        <WrapperPage>
          <Heading>OUR BLOG</Heading>
          {blogList}
        </WrapperPage>
      </ContainerSession>
    </StyledOurBlog>
  );
}

export default OurBlog;
