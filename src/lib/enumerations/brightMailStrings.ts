import {
  BrandedStringKeyValue,
  createI18nStringKeys,
} from '@digitaldefiance/i18n-lib';

export const BrightMailComponentId = 'BrightMail';

export const BrightMailStrings = createI18nStringKeys(BrightMailComponentId, {
  // Menu
  MenuLabel: 'MenuLabel',

  // Inbox
  Inbox_Title: 'Inbox_Title',
  Inbox_Empty: 'Inbox_Empty',
  Inbox_Error: 'Inbox_Error',
  Inbox_Retry: 'Inbox_Retry',
  Inbox_UnreadCountTemplate: 'Inbox_UnreadCountTemplate',

  // Compose
  Compose_Title: 'Compose_Title',
  Compose_To: 'Compose_To',
  Compose_Cc: 'Compose_Cc',
  Compose_Bcc: 'Compose_Bcc',
  Compose_Subject: 'Compose_Subject',
  Compose_Body: 'Compose_Body',
  Compose_Send: 'Compose_Send',
  Compose_SendSuccess: 'Compose_SendSuccess',
  Compose_SendError: 'Compose_SendError',
  Compose_InvalidRecipient: 'Compose_InvalidRecipient',
  Compose_Attachments: 'Compose_Attachments',

  // Thread
  Thread_Error: 'Thread_Error',
  Thread_BackToInbox: 'Thread_BackToInbox',
  Thread_Reply: 'Thread_Reply',
  Thread_Forward: 'Thread_Forward',

  // Delete
  Delete_Confirm: 'Delete_Confirm',
  Delete_ConfirmBulkTemplate: 'Delete_ConfirmBulkTemplate',
  Delete_Success: 'Delete_Success',
  Delete_ErrorTemplate: 'Delete_ErrorTemplate',

  // Sidebar / Navigation
  Nav_Inbox: 'Nav_Inbox',
  Nav_Sent: 'Nav_Sent',
  Nav_Drafts: 'Nav_Drafts',
  Nav_Trash: 'Nav_Trash',
  Nav_Labels: 'Nav_Labels',
  Nav_Compose: 'Nav_Compose',
  Nav_MailFolders: 'Nav_MailFolders',

  // Actions
  Action_Delete: 'Action_Delete',
  Action_MarkAsRead: 'Action_MarkAsRead',
  Action_Cancel: 'Action_Cancel',

  // General
  Loading: 'Loading',
} as const);

export type BrightMailStringKey = BrandedStringKeyValue<
  typeof BrightMailStrings
>;

export type BrightMailStringKeyValue = BrightMailStringKey;
