import { ComponentStrings } from '@digitaldefiance/i18n-lib';
import {
  BrightMailStringKey,
  BrightMailStrings,
} from '../../enumerations/brightMailStrings';

export const BrightMailJapaneseStrings: ComponentStrings<BrightMailStringKey> = {
  // Menu
  [BrightMailStrings.MenuLabel]: 'BrightMail',

  // Inbox
  [BrightMailStrings.Inbox_Title]: '受信トレイ',
  [BrightMailStrings.Inbox_Empty]: 'メールはまだありません',
  [BrightMailStrings.Inbox_Error]: '受信トレイの読み込みに失敗しました',
  [BrightMailStrings.Inbox_Retry]: '再試行',
  [BrightMailStrings.Inbox_UnreadCountTemplate]: '{COUNT} 件未読',

  // Compose
  [BrightMailStrings.Compose_Title]: '作成',
  [BrightMailStrings.Compose_To]: '宛先',
  [BrightMailStrings.Compose_Cc]: 'Cc',
  [BrightMailStrings.Compose_Bcc]: 'Bcc',
  [BrightMailStrings.Compose_Subject]: '件名',
  [BrightMailStrings.Compose_Body]: 'メッセージ',
  [BrightMailStrings.Compose_Send]: '送信',
  [BrightMailStrings.Compose_SendSuccess]: 'メールが正常に送信されました',
  [BrightMailStrings.Compose_SendError]: 'メールの送信に失敗しました',
  [BrightMailStrings.Compose_InvalidRecipient]:
    '有効な宛先を少なくとも1つ追加してください',
  [BrightMailStrings.Compose_Attachments]: '添付ファイル',
  [BrightMailStrings.Compose_ExternalRecipientsWarning]:
    'ECIES暗号化は外部の受信者には利用できません。暗号化が有効な状態で外部アドレスが含まれている間、送信は無効になります。',
  [BrightMailStrings.Compose_ExternalRecipientsWarningTemplate]:
    '外部の受信者（{ADDRESSES}）はローカルドメイン外にあり、ECIES暗号化メッセージを受信できません。',

  // Thread
  [BrightMailStrings.Thread_Error]: 'スレッドの読み込みに失敗しました',
  [BrightMailStrings.Thread_BackToInbox]: '受信トレイに戻る',
  [BrightMailStrings.Thread_Reply]: '返信',
  [BrightMailStrings.Thread_Forward]: '転送',

  // Delete
  [BrightMailStrings.Delete_Confirm]: '本当に削除しますか？',
  [BrightMailStrings.Delete_ConfirmBulkTemplate]:
    '選択した {COUNT} 件のメールを削除しますか？',
  [BrightMailStrings.Delete_Success]: 'メールが削除されました',
  [BrightMailStrings.Delete_ErrorTemplate]:
    'メールの削除に失敗しました：{MESSAGE_ID}',

  // Sidebar / Navigation
  [BrightMailStrings.Nav_Inbox]: '受信トレイ',
  [BrightMailStrings.Nav_Sent]: '送信済み',
  [BrightMailStrings.Nav_Drafts]: '下書き',
  [BrightMailStrings.Nav_Trash]: 'ゴミ箱',
  [BrightMailStrings.Nav_Labels]: 'ラベル',
  [BrightMailStrings.Nav_Compose]: '作成',
  [BrightMailStrings.Nav_MailFolders]: 'メールフォルダ',

  // Actions
  [BrightMailStrings.Action_Delete]: '削除',
  [BrightMailStrings.Action_MarkAsRead]: '既読にする',
  [BrightMailStrings.Action_Cancel]: 'キャンセル',

  // General
  [BrightMailStrings.Loading]: '読み込み中...',
};
