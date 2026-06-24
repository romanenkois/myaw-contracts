export type MessageResponseDto = TextMessageResponseDto;

export type MessageTypeResponseDto = 'text';
export type MessageStatusResponseDto = 'sending' | 'delivered' | 'send' | 'error';

export interface MessageResponseBaseDto<T extends MessageTypeResponseDto> {
  id: string;
  chatId: string;
  senderId: string;
  timestamp: string;
  status: MessageStatusResponseDto;
  type: T;
  content: Record<string, unknown>;
}

export interface TextMessageResponseDto extends MessageResponseBaseDto<'text'> {
  content: {
    text: string;
  };
}
