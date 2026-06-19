export interface ChatGroupResponseDto {
  id: string;
  name: string;
  chats: (PrivateChatResponseDto | GroupChatResponseDto)[];
}

export interface ChatGroupRequestDtoBase {
  id: string;
  type: 'private-chat' | 'group-chat';
  lastMessageId: string;
  lastMessageTimestamp: string;
  lastMessageType: 'text';
  lastMessageContent: string | null;
}

export interface PrivateChatResponseDto extends ChatGroupRequestDtoBase {
  type: 'private-chat';
  participantId: string;
}

export interface GroupChatResponseDto extends ChatGroupRequestDtoBase {
  type: 'group-chat';
  name: string;
  participantIds: string[];
}
