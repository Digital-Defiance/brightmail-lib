import { ComponentStrings } from '@digitaldefiance/i18n-lib';
import {
  BrightMailStringKey,
  BrightMailStrings,
} from '../../enumerations/brightMailStrings';

export const BrightMailMandarinStrings: ComponentStrings<BrightMailStringKey> = {
  // Menu
  [BrightMailStrings.MenuLabel]: 'BrightMail',

  // Inbox
  [BrightMailStrings.Inbox_Title]: '收件箱',
  [BrightMailStrings.Inbox_Empty]: '暂无邮件',
  [BrightMailStrings.Inbox_Error]: '加载收件箱失败',
  [BrightMailStrings.Inbox_Retry]: '重试',
  [BrightMailStrings.Inbox_UnreadCountTemplate]: '{COUNT} 封未读',

  // Compose
  [BrightMailStrings.Compose_Title]: '撰写',
  [BrightMailStrings.Compose_To]: '收件人',
  [BrightMailStrings.Compose_Cc]: '抄送',
  [BrightMailStrings.Compose_Bcc]: '密送',
  [BrightMailStrings.Compose_Subject]: '主题',
  [BrightMailStrings.Compose_Body]: '正文',
  [BrightMailStrings.Compose_Send]: '发送',
  [BrightMailStrings.Compose_SendSuccess]: '邮件发送成功',
  [BrightMailStrings.Compose_SendError]: '邮件发送失败',
  [BrightMailStrings.Compose_InvalidRecipient]:
    '请添加至少一个有效的收件人',
  [BrightMailStrings.Compose_Attachments]: '附件',
  [BrightMailStrings.Compose_ExternalRecipientsWarning]:
    'ECIES加密不适用于外部收件人。在启用加密的情况下存在外部地址时，发送功能将被禁用。',
  [BrightMailStrings.Compose_ExternalRecipientsWarningTemplate]:
    '外部收件人（{ADDRESSES}）不在本地域内，无法接收ECIES加密消息。',
  [BrightMailStrings.Compose_BounceWarningTitle]:
    '未验证的收件人',
  [BrightMailStrings.Compose_BounceWarningMessage]:
    '以下收件人未找到，您的邮件可能会被退回：{ADDRESSES}。仍然发送吗？',
  [BrightMailStrings.Compose_BounceWarningSendAnyway]: '仍然发送',

  // Thread
  [BrightMailStrings.Thread_Error]: '加载会话失败',
  [BrightMailStrings.Thread_BackToInbox]: '返回收件箱',
  [BrightMailStrings.Thread_Reply]: '回复',
  [BrightMailStrings.Thread_Forward]: '转发',

  // Delete
  [BrightMailStrings.Delete_Confirm]: '确定要删除吗？',
  [BrightMailStrings.Delete_ConfirmBulkTemplate]:
    '删除 {COUNT} 封选中的邮件？',
  [BrightMailStrings.Delete_Success]: '邮件已删除',
  [BrightMailStrings.Delete_ErrorTemplate]:
    '删除邮件失败：{MESSAGE_ID}',

  // Sidebar / Navigation
  [BrightMailStrings.Nav_Inbox]: '收件箱',
  [BrightMailStrings.Nav_Sent]: '已发送',
  [BrightMailStrings.Nav_Drafts]: '草稿',
  [BrightMailStrings.Nav_Trash]: '垃圾箱',
  [BrightMailStrings.Nav_Labels]: '标签',
  [BrightMailStrings.Nav_Compose]: '撰写',
  [BrightMailStrings.Nav_MailFolders]: '邮件文件夹',

  // Actions
  [BrightMailStrings.Action_Delete]: '删除',
  [BrightMailStrings.Action_MarkAsRead]: '标记为已读',
  [BrightMailStrings.Action_Cancel]: '取消',

  // General
  [BrightMailStrings.Loading]: '加载中...',
};
