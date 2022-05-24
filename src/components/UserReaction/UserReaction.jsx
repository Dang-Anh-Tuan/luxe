import React from "react";
import { ContainerSessionPrimary } from "../container/ContainerSession";
import {
  ContainerNameReaction,
  ContainerReactionContent,
  ContainerReactionItem,
  NameReaction,
  ReactionContent,
  StyledUserReaction,
} from "./UserReaction.styled";
import { WrapperPage } from "../CommonStyle/BaseStyle/BaseStyle.styled";
import { HeadingColorWhite } from "../common/Session/Heading";
import { ContainerRow } from "../common/Session/ContainerRow";
import { FlexItem4 } from "../common/Session/FlexItem4";

const listReaction = [
  {
    reaction: `“If you’re looking for a top quality hotel look no further. 
    We were upgraded free of charge to the Premium Suite, thanks so much”`,
    name: "John Doe",
  },
  {
    reaction: `““Me and my wife had a delightful weekend
    get away here, the staff were so friendly and attentive. Highly Recommended””`,
    name: "Rob Smith",
  },
  {
    reaction: `““If you’re looking for a top quality hotel look no further.
    We were upgraded free of charge to the Premium Suite, thanks so much””`,
    name: "John Doe",
  },
];

function UserReaction() {
  return (
    <StyledUserReaction>
      <ContainerSessionPrimary>
        <WrapperPage>
          <HeadingColorWhite>HAPPY CUSTOMER SAYS...</HeadingColorWhite>
          <ContainerRow>
            {listReaction.map((item, index) => (
              <FlexItem4 key={index}>
                <ContainerReactionItem>
                  <ContainerReactionContent>
                    <ReactionContent>{item.reaction}</ReactionContent>
                  </ContainerReactionContent>
                  <ContainerNameReaction>
                    <NameReaction>{item.name}</NameReaction>
                  </ContainerNameReaction>
                </ContainerReactionItem>
              </FlexItem4>
            ))}
          </ContainerRow>
        </WrapperPage>
      </ContainerSessionPrimary>
    </StyledUserReaction>
  );
}

export default UserReaction;
