import { ComponentStrings } from '@digitaldefiance/i18n-lib';
import {
  BrightMailStringKey,
  BrightMailStrings,
} from '../../enumerations/brightMailStrings';

export const BrightMailAmericanEnglishStrings: ComponentStrings<BrightMailStringKey> =
  {
    // Menu
    [BrightMailStrings.MenuLabel]: 'BrightMail',

    // Inbox
    [BrightMailStrings.Inbox_Title]: 'Inbox',
    [BrightMailStrings.Inbox_Empty]: 'No emails yet',
    [BrightMailStrings.Inbox_Error]: 'Failed to load inbox',
    [BrightMailStrings.Inbox_Retry]: 'Retry',
    [BrightMailStrings.Inbox_UnreadCountTemplate]: '{COUNT} unread',

    // Compose
    [BrightMailStrings.Compose_Title]: 'Compose',
    [BrightMailStrings.Compose_To]: 'To',
    [BrightMailStrings.Compose_Cc]: 'Cc',
    [BrightMailStrings.Compose_Bcc]: 'Bcc',
    [BrightMailStrings.Compose_Subject]: 'Subject',
    [BrightMailStrings.Compose_Body]: 'Message',
    [BrightMailStrings.Compose_Send]: 'Send',
    [BrightMailStrings.Compose_SendSuccess]: 'Email sent successfully',
    [BrightMailStrings.Compose_SendError]: 'Failed to send email',
    [BrightMailStrings.Compose_InvalidRecipient]:
      'Please add at least one valid recipient',
    [BrightMailStrings.Compose_Attachments]: 'Attachments',

    // Thread
    [BrightMailStrings.Thread_Error]: 'Failed to load thread',
    [BrightMailStrings.Thread_BackToInbox]: 'Back to Inbox',
    [BrightMailStrings.Thread_Reply]: 'Reply',
    [BrightMailStrings.Thread_Forward]: 'Forward',

    // Delete
    [BrightMailStrings.Delete_Confirm]: 'Are you sure you want to delete?',
    [BrightMailStrings.Delete_ConfirmBulkTemplate]:
      'Delete {COUNT} selected emails?',
    [BrightMailStrings.Delete_Success]: 'Email deleted',
    [BrightMailStrings.Delete_ErrorTemplate]:
      'Failed to delete email: {MESSAGE_ID}',

    // Sidebar / Navigation
    [BrightMailStrings.Nav_Inbox]: 'Inbox',
    [BrightMailStrings.Nav_Sent]: 'Sent',
    [BrightMailStrings.Nav_Drafts]: 'Drafts',
    [BrightMailStrings.Nav_Trash]: 'Trash',
    [BrightMailStrings.Nav_Labels]: 'Labels',
    [BrightMailStrings.Nav_Compose]: 'Compose',
    [BrightMailStrings.Nav_MailFolders]: 'Mail folders',

    // Actions
    [BrightMailStrings.Action_Delete]: 'Delete',
    [BrightMailStrings.Action_MarkAsRead]: 'Mark as Read',
    [BrightMailStrings.Action_Cancel]: 'Cancel',

    // General
    [BrightMailStrings.Loading]: 'Loading...',
  };
