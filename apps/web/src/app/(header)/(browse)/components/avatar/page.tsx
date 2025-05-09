"use client";

import profileImage from "@/assets/images/chat-emoticon.webp";
import { Grid } from "@/components/layouts/grid";
import { Avatar } from "@ellie-ui/core";

export default function AvatarPage() {
  return (
    <Grid>
      <Grid.Item>
        <Avatar>
          <Avatar.Image src="invalid-url" />
          <Avatar.Fallback>U</Avatar.Fallback>
        </Avatar>
      </Grid.Item>
      <Grid.Item>
        <Avatar>
          <Avatar.Image src={profileImage.src} alt="프로필 이미지" />
          <Avatar.Fallback>U</Avatar.Fallback>
        </Avatar>
      </Grid.Item>
    </Grid>
  );
}
