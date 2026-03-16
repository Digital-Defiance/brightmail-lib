import { ComponentStrings } from '@digitaldefiance/i18n-lib';
import {
  BrightMailStringKey,
  BrightMailStrings,
} from '../../enumerations/brightMailStrings';

export const BrightMailSpanishStrings: ComponentStrings<BrightMailStringKey> = {
  // Menu
  [BrightMailStrings.MenuLabel]: 'BrightMail',

  // Inbox
  [BrightMailStrings.Inbox_Title]: 'Bandeja de entrada',
  [BrightMailStrings.Inbox_Empty]: 'Aún no hay correos electrónicos',
  [BrightMailStrings.Inbox_Error]:
    'Error al cargar la bandeja de entrada',
  [BrightMailStrings.Inbox_Retry]: 'Reintentar',
  [BrightMailStrings.Inbox_UnreadCountTemplate]: '{COUNT} sin leer',

  // Compose
  [BrightMailStrings.Compose_Title]: 'Redactar',
  [BrightMailStrings.Compose_To]: 'Para',
  [BrightMailStrings.Compose_Cc]: 'Cc',
  [BrightMailStrings.Compose_Bcc]: 'Cco',
  [BrightMailStrings.Compose_Subject]: 'Asunto',
  [BrightMailStrings.Compose_Body]: 'Mensaje',
  [BrightMailStrings.Compose_Send]: 'Enviar',
  [BrightMailStrings.Compose_SendSuccess]:
    'Correo electrónico enviado con éxito',
  [BrightMailStrings.Compose_SendError]:
    'Error al enviar el correo electrónico',
  [BrightMailStrings.Compose_InvalidRecipient]:
    'Por favor, añada al menos un destinatario válido',
  [BrightMailStrings.Compose_Attachments]: 'Archivos adjuntos',
  [BrightMailStrings.Compose_ExternalRecipientsWarning]:
    'El cifrado ECIES no está disponible para destinatarios externos. El envío está deshabilitado mientras haya direcciones externas con el cifrado activado.',
  [BrightMailStrings.Compose_ExternalRecipientsWarningTemplate]:
    'Los destinatarios externos ({ADDRESSES}) están fuera del dominio local y no pueden recibir mensajes cifrados con ECIES.',
  [BrightMailStrings.Compose_BounceWarningTitle]:
    'Destinatarios no verificados',
  [BrightMailStrings.Compose_BounceWarningMessage]:
    'No se encontraron los siguientes destinatarios y su mensaje podría rebotar: {ADDRESSES}. ¿Enviar de todos modos?',
  [BrightMailStrings.Compose_BounceWarningSendAnyway]: 'Enviar de todos modos',

  // Thread
  [BrightMailStrings.Thread_Error]:
    'Error al cargar el hilo de conversación',
  [BrightMailStrings.Thread_BackToInbox]:
    'Volver a la bandeja de entrada',
  [BrightMailStrings.Thread_Reply]: 'Responder',
  [BrightMailStrings.Thread_Forward]: 'Reenviar',

  // Delete
  [BrightMailStrings.Delete_Confirm]:
    '¿Está seguro de que desea eliminar?',
  [BrightMailStrings.Delete_ConfirmBulkTemplate]:
    '¿Eliminar {COUNT} correos seleccionados?',
  [BrightMailStrings.Delete_Success]: 'Correo electrónico eliminado',
  [BrightMailStrings.Delete_ErrorTemplate]:
    'Error al eliminar el correo electrónico: {MESSAGE_ID}',

  // Sidebar / Navigation
  [BrightMailStrings.Nav_Inbox]: 'Bandeja de entrada',
  [BrightMailStrings.Nav_Sent]: 'Enviados',
  [BrightMailStrings.Nav_Drafts]: 'Borradores',
  [BrightMailStrings.Nav_Trash]: 'Papelera',
  [BrightMailStrings.Nav_Labels]: 'Etiquetas',
  [BrightMailStrings.Nav_Compose]: 'Redactar',
  [BrightMailStrings.Nav_MailFolders]: 'Carpetas de correo',

  // Actions
  [BrightMailStrings.Action_Delete]: 'Eliminar',
  [BrightMailStrings.Action_MarkAsRead]: 'Marcar como leído',
  [BrightMailStrings.Action_Cancel]: 'Cancelar',

  // General
  [BrightMailStrings.Loading]: 'Cargando...',
};
