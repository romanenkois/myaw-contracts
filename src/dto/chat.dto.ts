import { MessageTypeResponseDto } from './message.dto';

export interface ChatGroupResponseDto {
  id: string;
  name: string;
  chats: (PrivateChatResponseDto | GroupChatResponseDto)[];
}

export type ChatGroupTypeResponseDto = 'private' | 'group';

export interface ChatGroupRequestDtoBase<T extends ChatGroupTypeResponseDto> {
  id: string;
  type: T;
  lastMessageId: string;
  lastMessageTimestamp: string;
  lastMessageType: MessageTypeResponseDto;
  lastMessageContent: string | null;
}

export interface PrivateChatResponseDto extends ChatGroupRequestDtoBase<'private'> {
  participantId: string;
}

export interface GroupChatResponseDto extends ChatGroupRequestDtoBase<'group'> {
  name: string;
  participantIds: string[];
}
