import { ComponentStrings } from '@digitaldefiance/i18n-lib';
import {
  BrightMailStringKey,
  BrightMailStrings,
} from '../../enumerations/brightMailStrings';

export const BrightMailUkrainianStrings: ComponentStrings<BrightMailStringKey> =
  {
    // Menu
    [BrightMailStrings.MenuLabel]: 'BrightMail',

    // Inbox
    [BrightMailStrings.Inbox_Title]: 'Вхідні',
    [BrightMailStrings.Inbox_Empty]: 'Електронних листів ще немає',
    [BrightMailStrings.Inbox_Error]: 'Не вдалося завантажити вхідні',
    [BrightMailStrings.Inbox_Retry]: 'Повторити',
    [BrightMailStrings.Inbox_UnreadCountTemplate]: '{COUNT} непрочитаних',

    // Compose
    [BrightMailStrings.Compose_Title]: 'Написати',
    [BrightMailStrings.Compose_To]: 'Кому',
    [BrightMailStrings.Compose_Cc]: 'Копія',
    [BrightMailStrings.Compose_Bcc]: 'Прихована копія',
    [BrightMailStrings.Compose_Subject]: 'Тема',
    [BrightMailStrings.Compose_Body]: 'Повідомлення',
    [BrightMailStrings.Compose_Send]: 'Надіслати',
    [BrightMailStrings.Compose_SendSuccess]:
      'Електронний лист успішно надіслано',
    [BrightMailStrings.Compose_SendError]:
      'Не вдалося надіслати електронний лист',
    [BrightMailStrings.Compose_InvalidRecipient]:
      'Будь ласка, додайте принаймні одного дійсного одержувача',
    [BrightMailStrings.Compose_Attachments]: 'Вкладення',
    [BrightMailStrings.Compose_ExternalRecipientsWarning]:
      'Шифрування ECIES недоступне для зовнішніх одержувачів. Надсилання вимкнено, поки присутні зовнішні адреси з увімкненим шифруванням.',
    [BrightMailStrings.Compose_ExternalRecipientsWarningTemplate]:
      'Зовнішні одержувачі ({ADDRESSES}) знаходяться за межами локального домену і не можуть отримувати повідомлення, зашифровані ECIES.',

    // Thread
    [BrightMailStrings.Thread_Error]: 'Не вдалося завантажити ланцюжок',
    [BrightMailStrings.Thread_BackToInbox]: 'Назад до вхідних',
    [BrightMailStrings.Thread_Reply]: 'Відповісти',
    [BrightMailStrings.Thread_Forward]: 'Переслати',

    // Delete
    [BrightMailStrings.Delete_Confirm]: 'Ви впевнені, що хочете видалити?',
    [BrightMailStrings.Delete_ConfirmBulkTemplate]:
      'Видалити {COUNT} вибраних листів?',
    [BrightMailStrings.Delete_Success]: 'Лист видалено',
    [BrightMailStrings.Delete_ErrorTemplate]:
      'Не вдалося видалити лист: {MESSAGE_ID}',

    // Sidebar / Navigation
    [BrightMailStrings.Nav_Inbox]: 'Вхідні',
    [BrightMailStrings.Nav_Sent]: 'Надіслані',
    [BrightMailStrings.Nav_Drafts]: 'Чернетки',
    [BrightMailStrings.Nav_Trash]: 'Кошик',
    [BrightMailStrings.Nav_Labels]: 'Мітки',
    [BrightMailStrings.Nav_Compose]: 'Написати',
    [BrightMailStrings.Nav_MailFolders]: 'Поштові теки',

    // Actions
    [BrightMailStrings.Action_Delete]: 'Видалити',
    [BrightMailStrings.Action_MarkAsRead]: 'Позначити як прочитане',
    [BrightMailStrings.Action_Cancel]: 'Скасувати',

    // General
    [BrightMailStrings.Loading]: 'Завантаження...',
  };
