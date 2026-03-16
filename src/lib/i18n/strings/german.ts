import { ComponentStrings } from '@digitaldefiance/i18n-lib';
import {
  BrightMailStringKey,
  BrightMailStrings,
} from '../../enumerations/brightMailStrings';

export const BrightMailGermanStrings: ComponentStrings<BrightMailStringKey> = {
  // Menu
  [BrightMailStrings.MenuLabel]: 'BrightMail',

  // Inbox
  [BrightMailStrings.Inbox_Title]: 'Posteingang',
  [BrightMailStrings.Inbox_Empty]: 'Noch keine E-Mails',
  [BrightMailStrings.Inbox_Error]:
    'Posteingang konnte nicht geladen werden',
  [BrightMailStrings.Inbox_Retry]: 'Erneut versuchen',
  [BrightMailStrings.Inbox_UnreadCountTemplate]: '{COUNT} ungelesen',

  // Compose
  [BrightMailStrings.Compose_Title]: 'Verfassen',
  [BrightMailStrings.Compose_To]: 'An',
  [BrightMailStrings.Compose_Cc]: 'Cc',
  [BrightMailStrings.Compose_Bcc]: 'Bcc',
  [BrightMailStrings.Compose_Subject]: 'Betreff',
  [BrightMailStrings.Compose_Body]: 'Nachricht',
  [BrightMailStrings.Compose_Send]: 'Senden',
  [BrightMailStrings.Compose_SendSuccess]: 'E-Mail erfolgreich gesendet',
  [BrightMailStrings.Compose_SendError]:
    'E-Mail konnte nicht gesendet werden',
  [BrightMailStrings.Compose_InvalidRecipient]:
    'Bitte fügen Sie mindestens einen gültigen Empfänger hinzu',
  [BrightMailStrings.Compose_Attachments]: 'Anhänge',
  [BrightMailStrings.Compose_ExternalRecipientsWarning]:
    'ECIES-Verschlüsselung ist für externe Empfänger nicht verfügbar. Das Senden ist deaktiviert, solange externe Adressen bei aktivierter Verschlüsselung vorhanden sind.',
  [BrightMailStrings.Compose_ExternalRecipientsWarningTemplate]:
    'Externe Empfänger ({ADDRESSES}) befinden sich außerhalb der lokalen Domäne und können keine ECIES-verschlüsselten Nachrichten empfangen.',

  // Thread
  [BrightMailStrings.Thread_Error]:
    'Thread konnte nicht geladen werden',
  [BrightMailStrings.Thread_BackToInbox]: 'Zurück zum Posteingang',
  [BrightMailStrings.Thread_Reply]: 'Antworten',
  [BrightMailStrings.Thread_Forward]: 'Weiterleiten',

  // Delete
  [BrightMailStrings.Delete_Confirm]:
    'Sind Sie sicher, dass Sie löschen möchten?',
  [BrightMailStrings.Delete_ConfirmBulkTemplate]:
    '{COUNT} ausgewählte E-Mails löschen?',
  [BrightMailStrings.Delete_Success]: 'E-Mail gelöscht',
  [BrightMailStrings.Delete_ErrorTemplate]:
    'E-Mail konnte nicht gelöscht werden: {MESSAGE_ID}',

  // Sidebar / Navigation
  [BrightMailStrings.Nav_Inbox]: 'Posteingang',
  [BrightMailStrings.Nav_Sent]: 'Gesendet',
  [BrightMailStrings.Nav_Drafts]: 'Entwürfe',
  [BrightMailStrings.Nav_Trash]: 'Papierkorb',
  [BrightMailStrings.Nav_Labels]: 'Labels',
  [BrightMailStrings.Nav_Compose]: 'Verfassen',
  [BrightMailStrings.Nav_MailFolders]: 'E-Mail-Ordner',

  // Actions
  [BrightMailStrings.Action_Delete]: 'Löschen',
  [BrightMailStrings.Action_MarkAsRead]: 'Als gelesen markieren',
  [BrightMailStrings.Action_Cancel]: 'Abbrechen',

  // General
  [BrightMailStrings.Loading]: 'Wird geladen...',
};
