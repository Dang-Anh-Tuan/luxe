import React from "react";
import {
  Grid3Col,
  WrapperPage,
} from "../CommonStyle/BaseStyle/BaseStyle.styled";
import { ContainerSession } from "../container/ContainerSession";
import {
  BlogLink,
  ContainerBlogItem,
  ContainerBlogLink,
  ImageBlog,
  LabelImageBlog,
  LabelImageBlogDay,
  LabelImageBlogMonth,
} from "../OurBlog/OurBlog.styled";

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
  {
    theme: "/image/image-4.jpg",
    title: "Most Expensive Hotel",
    day: "09",
    month: "AUG",
  },
  {
    theme: "/image/image-5.jpg",
    title: "1st Anniversary of Luxe Hotel",
    day: "09",
    month: "AUG",
  },
  {
    theme: "/image/image-1.jpg",
    title: "Discover New Adventure",
    day: "09",
    month: "AUG",
  },
];

function ListBlog() {
  return (
    <ContainerSession>
      <WrapperPage>
        <Grid3Col colGap={46} rowGap={46}>
          {listBlog.map((item, index) => (
            <ContainerBlogItem key={index}>
              <ImageBlog src={item.theme}></ImageBlog>
              <LabelImageBlog>
                <LabelImageBlogDay>{item.day}</LabelImageBlogDay>
                <LabelImageBlogMonth>{item.month}</LabelImageBlogMonth>
              </LabelImageBlog>
              <ContainerBlogLink>
                <BlogLink to="/service">{item.title}</BlogLink>
              </ContainerBlogLink>
            </ContainerBlogItem>
          ))}
        </Grid3Col>
      </WrapperPage>
    </ContainerSession>
  );
}

export default ListBlog;
