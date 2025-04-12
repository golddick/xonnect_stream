type FormattedComment = {
    id: string;
    content: string;
    userId: string;
    createdAt: Date;
    user: {
      id: string;
      username: string;
      imageUrl: string;
    };
    replies: {
      id: string;
      content: string;
      createdAt: Date;
      user: {
        id: string;
        username: string;
        imageUrl: string;
      };
    }[];
    
  };

  export default FormattedComment
