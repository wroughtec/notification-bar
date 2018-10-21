// @flow

declare type PostType = {
  id: string,
  title: string
};

declare type LikeType = {
  id: string,
  name: ?string
};

declare type CommentType = {
  id: string,
  name: ?string,
  commentText: ?string
};

declare type NotificationType = {
  type: string,
  post: PostType,
  likes?: LikeType[],
  comments?: CommentType[]
};
