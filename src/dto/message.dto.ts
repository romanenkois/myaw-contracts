export type MessageResponseDto = TextMessageResponseDto;

export type MessageTypeResponseDto = 'text';

export interface MessageResponseDtoBase<T extends MessageTypeResponseDto> {
  id: string;
  chatId: string;
  senderId: string;
  timestamp: string;
  type: T;
  content: Record<string, unknown>;
}

export interface TextMessageResponseDto extends MessageResponseDtoBase<'text'> {
  content: {
    text: string;
  };
}
