import { ComponentStrings } from '@digitaldefiance/i18n-lib';
import {
  BrightMailStringKey,
  BrightMailStrings,
} from '../../enumerations/brightMailStrings';

export const BrightMailFrenchStrings: ComponentStrings<BrightMailStringKey> = {
  // Menu
  [BrightMailStrings.MenuLabel]: 'BrightMail',

  // Inbox
  [BrightMailStrings.Inbox_Title]: 'Boîte de réception',
  [BrightMailStrings.Inbox_Empty]: 'Aucun e-mail pour le moment',
  [BrightMailStrings.Inbox_Error]:
    'Échec du chargement de la boîte de réception',
  [BrightMailStrings.Inbox_Retry]: 'Réessayer',
  [BrightMailStrings.Inbox_UnreadCountTemplate]: '{COUNT} non lu(s)',

  // Compose
  [BrightMailStrings.Compose_Title]: 'Rédiger',
  [BrightMailStrings.Compose_To]: 'À',
  [BrightMailStrings.Compose_Cc]: 'Cc',
  [BrightMailStrings.Compose_Bcc]: 'Cci',
  [BrightMailStrings.Compose_Subject]: 'Objet',
  [BrightMailStrings.Compose_Body]: 'Message',
  [BrightMailStrings.Compose_Send]: 'Envoyer',
  [BrightMailStrings.Compose_SendSuccess]: 'E-mail envoyé avec succès',
  [BrightMailStrings.Compose_SendError]:
    "Échec de l'envoi de l'e-mail",
  [BrightMailStrings.Compose_InvalidRecipient]:
    'Veuillez ajouter au moins un destinataire valide',
  [BrightMailStrings.Compose_Attachments]: 'Pièces jointes',
  [BrightMailStrings.Compose_ExternalRecipientsWarning]:
    "Le chiffrement ECIES n'est pas disponible pour les destinataires externes. L'envoi est désactivé tant que des adresses externes sont présentes avec le chiffrement activé.",
  [BrightMailStrings.Compose_ExternalRecipientsWarningTemplate]:
    'Les destinataires externes ({ADDRESSES}) sont en dehors du domaine local et ne peuvent pas recevoir de messages chiffrés ECIES.',
  [BrightMailStrings.Compose_BounceWarningTitle]:
    'Destinataires non vérifiés',
  [BrightMailStrings.Compose_BounceWarningMessage]:
    'Les destinataires suivants sont introuvables et votre message pourrait être rejeté : {ADDRESSES}. Envoyer quand même ?',
  [BrightMailStrings.Compose_BounceWarningSendAnyway]: 'Envoyer quand même',

  // Thread
  [BrightMailStrings.Thread_Error]:
    'Échec du chargement du fil de discussion',
  [BrightMailStrings.Thread_BackToInbox]:
    'Retour à la boîte de réception',
  [BrightMailStrings.Thread_Reply]: 'Répondre',
  [BrightMailStrings.Thread_Forward]: 'Transférer',

  // Delete
  [BrightMailStrings.Delete_Confirm]:
    'Êtes-vous sûr de vouloir supprimer ?',
  [BrightMailStrings.Delete_ConfirmBulkTemplate]:
    'Supprimer {COUNT} e-mails sélectionnés ?',
  [BrightMailStrings.Delete_Success]: 'E-mail supprimé',
  [BrightMailStrings.Delete_ErrorTemplate]:
    "Échec de la suppression de l'e-mail : {MESSAGE_ID}",

  // Sidebar / Navigation
  [BrightMailStrings.Nav_Inbox]: 'Boîte de réception',
  [BrightMailStrings.Nav_Sent]: 'Envoyés',
  [BrightMailStrings.Nav_Drafts]: 'Brouillons',
  [BrightMailStrings.Nav_Trash]: 'Corbeille',
  [BrightMailStrings.Nav_Labels]: 'Libellés',
  [BrightMailStrings.Nav_Compose]: 'Rédiger',
  [BrightMailStrings.Nav_MailFolders]: 'Dossiers de messagerie',

  // Actions
  [BrightMailStrings.Action_Delete]: 'Supprimer',
  [BrightMailStrings.Action_MarkAsRead]: 'Marquer comme lu',
  [BrightMailStrings.Action_Cancel]: 'Annuler',

  // General
  [BrightMailStrings.Loading]: 'Chargement...',
};
