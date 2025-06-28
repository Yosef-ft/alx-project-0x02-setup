export interface CardProps{
    userId?: number,
    title: string,
    content: string
}


export interface PostPageProps{
    post: CardProps[]
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: { title: string; content: string }) => void;
}



export interface ButtonProps {
    title: string;
    size?: "small" | "medium" | "large";
    shape?: "rounded-sm" | "rounded-md" | "rounded-full";
    onClick?: () =>void;
}


export interface APIResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}